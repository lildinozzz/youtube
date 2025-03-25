import { HydrateClient, trpc } from "@/trpc/server";
import { HomeView } from "@/modules/home/ui/views/home-view";

type PageProps = {
  searchParams: Promise<{ categoryId: string }>;
};

export const dynamic = "force-dynamic";

export default async function Home(props: PageProps) {
  const { searchParams } = props;
  const { categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}
