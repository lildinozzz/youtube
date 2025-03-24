import { PropsWithChildren } from "react";
import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

export default function Layout({ children }: PropsWithChildren) {
  return <HomeLayout>{children}</HomeLayout>;
}
