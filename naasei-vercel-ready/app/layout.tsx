import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaaSei — Build Beyond Your Beginning",
  description:
    "NaaSei helps people, ventures and organisations turn possibility into progress through strategy, innovation, communication and entrepreneurship.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
