"use client";

import { ResponsiveDialog } from "@/components/responsive-dialog";
import { StudioUploader } from "@/components/studio-uploader";
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const StudioUploadModal = () => {
  const router = useRouter();

  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video created");
      utils.studio.getMany.invalidate();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSuccess = () => {
    if (!create.data?.video.id) return;

    create.reset();
    router.push(`/studio/videos/${create.data?.video.id}`);
  };

  return (
    <>
      <ResponsiveDialog
        title="Upload video"
        open={!!create.data}
        onOpenChange={() => create.reset()}
      >
        {create.data?.url && (
          <StudioUploader endPoint={create.data?.url} onSuccess={onSuccess} />
        )}

        {!create.data?.url && <Loader2Icon className="animate-spin" />}
      </ResponsiveDialog>
      <Button
        variant="secondary"
        onClick={() => create.mutate()}
        disabled={create.isPending}
      >
        {create.isPending && <Loader2Icon className="animate-spin" />}
        {!create.isPending && <PlusIcon />}
        Create
      </Button>
    </>
  );
};
