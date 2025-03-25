import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect } from "react";
import { Button } from "./ui/button";

type InfiniteScrollProps = {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
};

export const InfiniteScroll = (props: InfiniteScrollProps) => {
  const {
    isManual = false,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = props;

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isManual) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    isFetchingNextPage,
    isManual,
    fetchNextPage,
  ]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={ref} className="h-1 w-1">
        {hasNextPage && (
          <Button
            variant="secondary"
            disabled={isFetchingNextPage || !hasNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </Button>
        )}
      </div>
      {!hasNextPage && (
        <p className="text-xs text-muted-foreground">
          You have reached the end of the list
        </p>
      )}
    </div>
  );
};
