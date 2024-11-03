import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps): Promise<JSX.Element> {
  return <main className="max-w-[500px] mx-auto">{children}</main>;
}