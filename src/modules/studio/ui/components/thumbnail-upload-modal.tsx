import { UploadDropzone } from "@/app/utils/uploadthing";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { trpc } from "@/trpc/client";

type ThumbnailUploadModalProps = {
  videoId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ThumbnailUploadModal = (props: ThumbnailUploadModalProps) => {
  const { open, onOpenChange, videoId } = props;
  const utils = trpc.useUtils();

  const onUploadComplete = () => {
    utils.studio.getMany.invalidate();
    utils.studio.getOne.invalidate({ id: videoId });
  };
  return (
    <ResponsiveDialog
      title="Upload Thumbnail"
      open={open}
      onOpenChange={onOpenChange}
    >
      <UploadDropzone
        endpoint="thumbnailUploader"
        input={{ videoId }}
        onClientUploadComplete={onUploadComplete}
      />
    </ResponsiveDialog>
  );
};
