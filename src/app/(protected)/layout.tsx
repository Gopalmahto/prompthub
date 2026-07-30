import type { ReactNode } from "react";

import { Navbar } from "@/components/layout";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {children}
      </main>
    </>
  );
}