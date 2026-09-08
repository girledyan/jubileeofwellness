"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

// Klaviyo's public API key ("Company ID") is meant to be used from the
// browser — it's the same value used by Klaviyo's own embedded forms —
// so it's safe to ship in client-side code.
const KLAVIYO_COMPANY_ID = process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID;
const KLAVIYO_LIST_ID = process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID;

function splitName(fullName: string) {
  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  return { firstName: firstName ?? "", lastName: rest.join(" ") };
}

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!KLAVIYO_COMPANY_ID || !KLAVIYO_LIST_ID) {
      setError("Signups aren't configured yet. Please try again later.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);

    const { firstName, lastName } = splitName(name);

    try {
      const res = await fetch(
        `https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            revision: "2024-10-15",
          },
          body: JSON.stringify({
            data: {
              type: "subscription",
              attributes: {
                profile: {
                  data: {
                    type: "profile",
                    attributes: {
                      email,
                      first_name: firstName,
                      ...(lastName ? { last_name: lastName } : {}),
                    },
                  },
                },
              },
              relationships: {
                list: {
                  data: {
                    type: "list",
                    id: KLAVIYO_LIST_ID,
                  },
                },
              },
            },
          }),
        },
      );

      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto w-full max-w-md rounded-2xl border border-brand/20 bg-white px-6 py-8 text-center shadow-sm">
        <p className="text-lg font-semibold text-brand-dark">
          You&rsquo;re on the list! 🎉
        </p>
        <p className="mt-2 text-brand-dark/70">
          We&rsquo;ll email you the moment Ready to Roll! opens for its first box.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-3"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-full border border-brand/20 bg-white px-5 py-3 text-brand-dark placeholder:text-brand-dark/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-full border border-brand/20 bg-white px-5 py-3 text-brand-dark placeholder:text-brand-dark/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Join the waitlist"}
      </button>
      {error && <p className="text-center text-sm text-red-600">{error}</p>}
      <p className="text-center text-xs text-brand-dark/50">
        No spam, ever. Just one email when we launch.
      </p>
    </form>
  );
}
