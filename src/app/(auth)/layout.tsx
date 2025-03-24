import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
