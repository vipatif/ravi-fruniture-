import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravi Furniture | Mahesh, Serampore",
  description: "Ravi Furniture in Mahesh, Serampore — premium furniture for every corner of your home at honest prices.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
