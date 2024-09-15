import { fetchGreeting } from "@/lib/some.action";

export default async function Home() {
  const message = await fetchGreeting("Shuvadeep");
  return (
    <main className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-semibold">{message}</h1>
    </main>
  );
}
