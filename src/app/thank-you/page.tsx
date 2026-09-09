import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "You're on the list! | Jubilee of Wellness",
  description: "You're on the Ready to Roll! waitlist from Jubilee of Wellness.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-light">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <Image
          src="/jubilee_logo_transparent.png"
          alt="Jubilee"
          width={2881}
          height={1010}
          priority
          className="h-auto w-56 sm:w-64"
        />
        <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl">
          You&rsquo;re on the list! 🎉
        </h1>
        <p className="max-w-md text-brand-dark/80">
          Thanks for joining the Ready to Roll! waitlist. We&rsquo;ll email you
          the moment we launch on November 1st &mdash; plus founding-member
          perks for our first subscribers.
        </p>
        <Link
          href="/"
          className="text-sm font-medium text-brand underline underline-offset-2 hover:text-brand-dark"
        >
          Back to jubileeofwellness.com
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
