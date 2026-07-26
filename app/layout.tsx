import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaaSei — Build Beyond Your Beginning",
  description:
    "NaaSei builds leverage for people and organisations capable of more than their current conditions allow.",
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
