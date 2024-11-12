'use client'
import React, { ReactNode, Suspense } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps): Promise<JSX.Element> {
  return (
  <Suspense>
    <main className="max-w-[500px] mx-auto">{children}</main>);

  </Suspense>
  )
}