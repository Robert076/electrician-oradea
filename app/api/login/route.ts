import { NextResponse } from "next/server";
import { createSession } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const VALID_EMAIL = process.env.ADMIN_EMAIL;
    const VALID_PASS = process.env.ADMIN_PASSWORD;

    if (!VALID_EMAIL || !VALID_PASS) {
      console.error("ADMIN_EMAIL sau ADMIN_PASSWORD nu sunt configurate.");
      return NextResponse.json({ error: "Eroare de configurare server." }, { status: 500 });
    }

    if (email !== VALID_EMAIL || password !== VALID_PASS) {
      return NextResponse.json({ error: "Email sau parolă incorectă." }, { status: 401 });
    }

    await createSession("admin");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}
