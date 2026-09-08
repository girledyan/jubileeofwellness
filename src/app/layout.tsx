import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ready to Roll! | Jubilee of Wellness",
  description:
    "Join the waitlist for Ready to Roll!, a monthly essential oil roller subscription from Jubilee of Wellness.",
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
