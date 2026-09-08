"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
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
