import { NextResponse } from "next/server";
import { set2FACode } from "@/lib/2fa-single";
import { sendMail } from "@/lib/send-mail";
import { createSession } from "@/lib/session";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const VALID_EMAIL = process.env.ADMIN_EMAIL!;
  const VALID_PASS = process.env.ADMIN_PASSWORD!;

  if (email !== VALID_EMAIL || password !== VALID_PASS) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // const code = Math.floor(100000 + Math.random() * 900000).toString();
  //
  // set2FACode(VALID_EMAIL, code);

  // await sendMail({
  //   to: VALID_EMAIL,
  //   subject: "Codul tău de autentificare",
  //   text: `Codul tău de login este: ${code}`,
  // });

  await createSession("admin");

  return NextResponse.json(200);
  // return NextResponse.json({ step: "2fa" });
}
