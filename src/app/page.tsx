import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";

const monthlyOils = [
  {
    name: "Sweet Orange",
    image: "/products/sweet-orange.png",
    note: "Bright, uplifting, and easy to love — a gentle welcome to your ritual.",
  },
  {
    name: "Herbal Guardian",
    image: "/products/herbal-guardian.png",
    note: "A grounding herbal blend for when the day feels like a lot.",
  },
  {
    name: "Lavender",
    image: "/products/lavender.png",
    note: "The classic calm-down oil, for wind-down evenings and easier sleep.",
  },
  {
    name: "Rose Hydrosol",
    image: "/products/rose-hydrosol.png",
    note: "Soft, floral, and a little indulgent — a reminder to be gentle with yourself.",
  },
];

// Soft blurred color washes used to give the flat brand-light sections some
// depth. Purely decorative — hidden from assistive tech, never interactive.
function Blob({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
    />
  );
}

export default function HomePage() {
  return (
    <main className="bg-brand-light">
      {/* Hero */}
      <section className="relative isolate mx-auto flex max-w-3xl flex-col items-center gap-6 overflow-hidden px-6 pb-16 pt-20 text-center">
        <Blob className="-left-24 -top-24 h-72 w-72 bg-brand/25" />
        <Blob className="-right-16 top-10 h-56 w-56 bg-brand-green/30" />
        <Blob className="bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-brand/10" />

        <Image
          src="/jubilee_logo_transparent.png"
          alt="Jubilee"
          width={2881}
          height={1010}
          priority
          className="h-auto w-56 sm:w-64"
        />
        <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
          Ready to Roll! 🌿
        </h1>
        <p className="max-w-xl text-lg text-brand-dark/80">
          A monthly essential oil roller subscription, made for mental wellness
          relief and everyday joy — one oil, one ritual, delivered to your door.
        </p>
        <WaitlistForm />
        <p className="text-sm font-medium text-brand-dark/60">
          Launching November 1st &mdash; join the waitlist for founding-member perks.
        </p>
      </section>

      {/* Problem */}
      <section className="border-y border-brand/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-brand-dark">
            Essential oils help. Knowing where to start doesn&rsquo;t.
          </h2>
          <p className="mt-4 text-brand-dark/70">
            If you&rsquo;ve ever stood in front of a shelf of oils not knowing
            which one to reach for &mdash; or when, or how &mdash; Ready to Roll!
            is built for you. Every box teaches you one oil, one moment, one
            small ritual for calm and joy.
          </p>
        </div>
      </section>

      {/* What's in the box */}
      <section className="relative isolate overflow-hidden px-6 py-16">
        <Blob className="-right-20 top-1/3 h-72 w-72 bg-brand-green/25" />
        <Blob className="-left-16 bottom-0 h-56 w-56 bg-brand/15" />

        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold text-brand-dark">
            What&rsquo;s in every box
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-3xl">🧴</p>
              <h3 className="mt-3 font-semibold text-brand-dark">
                Essential oil roller
              </h3>
              <p className="mt-2 text-sm text-brand-dark/70">
                A pre-blended roller bottle featuring that month&rsquo;s oil or
                blend &mdash; ready to use, no mixing required.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-3xl">🪷</p>
              <h3 className="mt-3 font-semibold text-brand-dark">
                A cozy pouch
              </h3>
              <p className="mt-2 text-sm text-brand-dark/70">
                Your roller arrives tucked in its own pouch &mdash; a little
                keepsake for your bag, desk, or nightstand.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-3xl">📇</p>
              <h3 className="mt-3 font-semibold text-brand-dark">
                &ldquo;When to use it&rdquo; card
              </h3>
              <p className="mt-2 text-sm text-brand-dark/70">
                A simple card explaining the oil and the moments it&rsquo;s
                made for &mdash; so you always know how to use it.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-brand/20 bg-white p-6 text-center">
            <p className="font-semibold text-brand-dark">
              Founding members&rsquo; first box also includes an aromatherapy
              bracelet
            </p>
            <p className="mt-2 text-sm text-brand-dark/70">
              Handmade by Crafty K, so you can wear your calm as well as
              carry it.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly theme preview */}
      <section className="border-y border-brand/10 bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold text-brand-dark">
            A new oil to explore, every month
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-dark/70">
            Here&rsquo;s a peek at what&rsquo;s coming in our first few boxes.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {monthlyOils.map((oil, i) => (
              <div
                key={oil.name}
                className="flex flex-col overflow-hidden rounded-2xl bg-brand-light p-3 text-left shadow-sm"
              >
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={oil.image}
                    alt={`${oil.name} essential oil roller from Jubilee`}
                    width={1024}
                    height={1536}
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand">
                  Month {i + 1}
                </p>
                <p className="font-semibold text-brand-dark">{oil.name}</p>
                <p className="mt-1 text-sm text-brand-dark/70">{oil.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-dark/50">
            …with more joy-filled blends on the way.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative isolate overflow-hidden px-6 py-16">
        <Blob className="left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-brand/15" />

        <div className="mx-auto max-w-md rounded-3xl bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-brand">
            Ready to Roll!
          </p>
          <p className="mt-2 text-4xl font-bold text-brand-dark">
            $24<span className="text-lg font-medium text-brand-dark/60">/month</span>
          </p>
          <p className="mt-2 text-sm text-brand-dark/70">
            One oil, one ritual, delivered monthly. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden border-t border-brand/10 bg-white px-6 py-16">
        <Blob className="-bottom-20 -left-16 h-72 w-72 bg-brand-green/20" />
        <Blob className="-top-16 -right-16 h-56 w-56 bg-brand/15" />

        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold text-brand-dark">
            Be first to roll with us
          </h2>
          <p className="text-brand-dark/70">
            Join the waitlist and we&rsquo;ll let you know the moment Ready to
            Roll! opens &mdash; plus founding-member perks for our first
            subscribers.
          </p>
          <WaitlistForm />
        </div>
      </section>

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
    </main>
  );
}
