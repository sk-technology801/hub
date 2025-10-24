import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
    }

    await connectDB();
    await Contact.create({ name, email, message });

    return new Response(JSON.stringify({ message: "Contact saved successfully!" }), { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return new Response(JSON.stringify({ error: "Failed to save contact" }), { status: 500 });
  }
}
