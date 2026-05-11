import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Work for JaJa Baby: From Age 0 to 100",
  description: "IVF Notes: structured reading notes for assisted reproductive technology."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
