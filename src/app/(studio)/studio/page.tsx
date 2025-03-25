import { trpc, HydrateClient } from "@/trpc/server";
import { StudioView } from "@/modules/studio/ui/views/studio-view";
import { DEFAULT_LIMIT } from "@/consts";

export default async function Page() {
  await trpc.studio.getMany.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
}
