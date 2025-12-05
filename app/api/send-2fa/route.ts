import { NextResponse } from "next/server";
import { sendMail } from "@/lib/send-mail";
import { set2FACode } from "@/lib/2fa-single";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (email !== "robertberes06@gmail.com") {
    return NextResponse.json({ error: "Email neautorizat" }, { status: 403 });
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await set2FACode(email, code);

  await sendMail({
    to: email,
    subject: "Codul tău 2FA",
    text: `Codul tău de autentificare este: ${code}. Expiră în 5 minute.`,
  });

  return NextResponse.json({ success: true });
}
