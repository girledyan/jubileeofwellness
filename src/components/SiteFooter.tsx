import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-3 px-6 py-10 text-center">
      <Image
        src="/jubilee_logo_transparent.png"
        alt="Jubilee"
        width={2881}
        height={1010}
        className="h-auto w-32 opacity-80"
      />
      <a
        href="https://jubileeofwellness.com/"
        className="text-xs text-brand-dark/50 underline decoration-brand-dark/20 underline-offset-2 transition hover:text-brand hover:decoration-brand"
      >
        jubileeofwellness.com
      </a>
    </footer>
  );
}
