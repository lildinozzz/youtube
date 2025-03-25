import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <StudioLayout>{children}</StudioLayout>;
}
