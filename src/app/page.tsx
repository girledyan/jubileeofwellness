import { WaitlistForm } from "@/components/WaitlistForm";

const monthlyOils = [
  {
    name: "Sweet Orange",
    note: "Bright, uplifting, and easy to love — a gentle welcome to your ritual.",
  },
  {
    name: "Herbal Guardian",
    note: "A grounding herbal blend for when the day feels like a lot.",
  },
  {
    name: "Lavender",
    note: "The classic calm-down oil, for wind-down evenings and easier sleep.",
  },
  {
    name: "Rose Hydrosol",
    note: "Soft, floral, and a little indulgent — a reminder to be gentle with yourself.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-brand-light">
      {/* Hero */}
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pb-16 pt-20 text-center">
        <span className="rounded-full bg-white px-4 py-1 text-sm font-medium text-brand shadow-sm">
          Jubilee of Wellness
        </span>
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
      <section className="px-6 py-16">
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
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-brand-dark">
            A new oil to explore, every month
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-dark/70">
            Here&rsquo;s a peek at what&rsquo;s coming in our first few boxes.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {monthlyOils.map((oil, i) => (
              <div
                key={oil.name}
                className="flex items-start gap-4 rounded-2xl bg-brand-light p-5 text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-brand-dark">{oil.name}</p>
                  <p className="mt-1 text-sm text-brand-dark/70">{oil.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-dark/50">
            …with more joy-filled blends on the way.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16">
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
      <section className="border-t border-brand/10 bg-white px-6 py-16">
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

      <footer className="px-6 py-8 text-center text-xs text-brand-dark/50">
        Jubilee of Wellness &middot; jubileeofwellness.com
      </footer>
    </main>
  );
}
