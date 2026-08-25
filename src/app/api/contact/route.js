import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, phone, service } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required" }), { status: 400 });
    }

    const conn = await connectDB();
    if (conn) {
      await Contact.create({ 
        name, 
        email, 
        message: message || `Service inquiry: ${service || "General"} | Phone: ${phone || "N/A"}` 
      });
    }

    return new Response(JSON.stringify({ message: "Contact request received successfully!" }), { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return new Response(JSON.stringify({ error: "Failed to save contact" }), { status: 500 });
  }
}
