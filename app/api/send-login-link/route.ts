import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email } = await req.json();
  const allowed = ["robertberes06@gmail.com", "electricianul@firma.ro"];
  if (!allowed.includes(email)) {
    return NextResponse.json({ error: "Email neautorizat" }, { status: 403 });
  }

  const token = crypto.randomBytes(24).toString("hex");

  // ✅ setăm tokenul în cookie
  const cookieStore = await cookies();
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    maxAge: 10 * 60, // 10 minute
    path: "/",
  });

  const verifyUrl = `${
    process.env.NEXTAUTH_URL || "http://localhost:3000"
  }/api/verify-login?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST!,
    port: Number(process.env.EMAIL_SERVER_PORT!),
    auth: {
      user: process.env.EMAIL_SERVER_USER!,
      pass: process.env.EMAIL_SERVER_PASS!,
    },
  });

  await transporter.sendMail({
    to: email,
    from: process.env.EMAIL_FROM!,
    subject: "Link de autentificare Electrician Oradea",
    html: `<p>Apasă pe linkul de mai jos pentru autentificare:</p><a href="${verifyUrl}">${verifyUrl}</a>`,
  });

  return NextResponse.json({ success: true });
}
