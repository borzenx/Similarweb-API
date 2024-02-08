import type { Metadata } from "next";
import "./scss/main.scss";

export const metadata: Metadata = {
  title: "Similarweb API",
  description: "Created by Wojciech Borzęcki",
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
