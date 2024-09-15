import { fetchGreeting } from "@/lib/some.action";

export default async function Home() {
  // const message = await fetchGreeting("Alex");
  return (
    <main className="min-h-screen flex justify-center items-center">
      {/* <h1 className="text-3xl font-semibold">{message}</h1> */}
      <h1 className="text-3xl font-semibold">hi</h1>
    </main>
  );
}
