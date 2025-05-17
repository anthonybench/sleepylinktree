import type { Metadata } from "next";
import { ThemeProvider } from "@/app/themes/switch-board";

export const metadata: Metadata = {
  title: "Isaac Yep",
  description: "A landing page for career interfacing with Isaac Yep.",
  applicationName: "SleepyLinkTree",
  creator: "Isaac Yep",
  authors: [{ name: "Isaac Yep" }],
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
