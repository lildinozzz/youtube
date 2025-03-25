import { VideoView } from "@/modules/studio/ui/views/video-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ videoId: string }>;
};

export default async function Page(props: PageProps) {
  const { videoId } = await props.params;

  void trpc.studio.getOne.prefetch({ id: videoId });
  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  );
}
