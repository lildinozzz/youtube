import { db } from "@/db";
import { videos } from "@/db/schema";
import { mux } from "@/lib/mux";
import { VideoAssetCreatedWebhookEvent } from "@mux/mux-node/resources/webhooks.mjs";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

const SIGNIN_SECRET = process.env.MUX_WEBHOOK_SECRET;

export async function POST(request: Request) {
  if (!SIGNIN_SECRET) {
    throw new Error("MUX_WEBHOOK_SECRET is not set");
  }

  const headersPayload = await headers();
  const muxSignature = headersPayload.get("mux-signature");

  if (!muxSignature) {
    return new Response("No signature found", { status: 401 });
  }

  const payload = await request.json();
  const body = JSON.stringify(payload);

  mux.webhooks.verifySignature(
    body,
    {
      "mux-signature": muxSignature,
    },
    SIGNIN_SECRET
  );

  switch (payload.type) {
    case "video.asset.created":
      const data = payload.data as VideoAssetCreatedWebhookEvent["data"];

      if (!data.upload_id) {
        return new Response("No upload id found", { status: 400 });
      }

      await db
        .update(videos)
        .set({
          muxAssetId: data.id,
          muxStatus: data.status,
        })
        .where(eq(videos.muxUploadId, data.upload_id));

      break;
    case "video.asset.ready":
      break;
    case "video.asset.errored":
      break;
  }

  return new Response("Webhook received", { status: 200 });
}
