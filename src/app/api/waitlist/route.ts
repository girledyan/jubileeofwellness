import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(200),
  email: z.string().trim().email("Please enter a valid email address.").max(320),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    );
  }

  const { name, email } = parsed.data;

  try {
    await prisma.waitlistSignup.create({
      data: { name, email: email.toLowerCase() },
    });
  } catch (err) {
    // Already on the list — treat it as success rather than leaking
    // whether an email is already signed up.
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return NextResponse.json({ ok: true });
    }

    console.error("Failed to save waitlist signup:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
