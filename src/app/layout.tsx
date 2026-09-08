import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jubilee of Wellness",
  description: "Jubilee of Wellness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-brand-dark antialiased">
        {children}
      </body>
    </html>
  );
}
