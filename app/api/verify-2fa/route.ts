import { verify2FACode } from "@/lib/2fa-single";
import { createSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ error: "Email și cod obligatorii." }, { status: 400 });
    }

    const valid = await verify2FACode(email, code);

    if (!valid) return NextResponse.json({ error: "Cod invalid sau expirat." }, { status: 400 });

    await createSession("admin");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }
}
