import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const adminKey = process.env.ADMIN_KEY;

  if (!adminKey || key !== adminKey) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-brand-light px-6 text-center">
        <p className="text-brand-dark/70">
          Not authorized. Add <code>?key=YOUR_ADMIN_KEY</code> to the URL.
        </p>
      </main>
    );
  }

  const signups = await prisma.waitlistSignup.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-brand-light px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-brand-dark">
            Waitlist signups ({signups.length})
          </h1>
        </div>

        {signups.length === 0 ? (
          <p className="mt-6 text-brand-dark/60">No signups yet.</p>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-2xl bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-brand/10 text-brand-dark/60">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {signups.map((signup) => (
                  <tr key={signup.id} className="border-b border-brand/5 last:border-0">
                    <td className="px-4 py-3 text-brand-dark">{signup.name}</td>
                    <td className="px-4 py-3 text-brand-dark">{signup.email}</td>
                    <td className="px-4 py-3 text-brand-dark/60">
                      {signup.createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
