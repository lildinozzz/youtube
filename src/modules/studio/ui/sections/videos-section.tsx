import { Suspense } from "react";
import { VideosSectionClient } from "./videos-section-client";
import { VideoSectionSkeleton } from "./video-section-skeleton";
import { ErrorBoundary } from "react-error-boundary";

export const VideosSection = () => {
  return (
    <Suspense fallback={<VideoSectionSkeleton />}>
      <ErrorBoundary fallback={<div>Error</div>}>
        <VideosSectionClient />
      </ErrorBoundary>
    </Suspense>
  );
};
