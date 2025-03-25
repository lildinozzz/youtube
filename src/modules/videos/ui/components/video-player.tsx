"use client";

import MuxPlayer from "@mux/mux-player-react";

type VideoPlayerProps = {
  playbackId: string | null;
  thumbnailUrl: string | null;
  autoPlay?: boolean;
  onPlay?: () => void;
};

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { playbackId, thumbnailUrl, autoPlay, onPlay } = props;

  return (
    <MuxPlayer
      playbackId={playbackId || ""}
      poster={thumbnailUrl || "/placeholder.svg"}
      playerInitTime={0}
      autoPlay={autoPlay}
      thumbnailTime={0}
      className="w-full h-full object-contain"
      accentColor="#FF2056"
      onPlay={onPlay}
    />
  );
};
