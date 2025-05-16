import type { Metadata } from "next";
import { ThemeProvider } from "@/app/themes/switch-board";

export const metadata: Metadata = {
  title: "Isaac Yep's Link-Tree",
  description: "A landing page for career interfacing with Isaac Yep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>{children}</ThemeProvider>
    </html>
  );
}
