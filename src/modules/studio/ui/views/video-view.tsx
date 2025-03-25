import { FormSection } from "../sections/form-section";

type VideoViewProps = {
  videoId: string;
};

export const VideoView = (props: VideoViewProps) => {
  const { videoId } = props;

  return (
    <div className="px-4 pt-2.5 max-w-screen-lg">
      <FormSection videoId={videoId} />
    </div>
  );
};
