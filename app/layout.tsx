import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bluneo.ai",
  description: "A futuristic AI SaaS hero section with a glass petal motion logo."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
