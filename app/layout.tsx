import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge Fitness | Earn Your Strong",
  description:
    "Expert-led strength, conditioning, and mobility training in Brooklyn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
