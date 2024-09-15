"use server";

export async function fetchGreeting(name: string): Promise<string> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/hello?name=${name}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch greeting");
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
    return "Error fetching greeting";
  }
}
