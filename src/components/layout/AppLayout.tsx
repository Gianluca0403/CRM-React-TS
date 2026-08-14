import type { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface AppLayoytProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoytProps) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <Header />

        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}
