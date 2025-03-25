import { formatDuration } from "@/lib/utils";
import Image from "next/image";

type VideoThumbnailProps = {
  title: string;
  duration: number;
  imageUrl?: string | null;
  previewUrl?: string | null;
};

export const VideoThumbnail = (props: VideoThumbnailProps) => {
  const { imageUrl, previewUrl, duration } = props;

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover hover:opacity-0"
        />
        <Image
          unoptimized={!!previewUrl}
          src={previewUrl ?? "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="h-full w-full object-cover opacity-0 hover:opacity-100"
        />
      </div>

      <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-sm">
        {formatDuration(duration)}
      </div>
    </div>
  );
};
