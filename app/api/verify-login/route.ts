export const runtime = "nodejs";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  const cookieStore = await cookies();
  const stored = cookieStore.get("auth_token")?.value;

  if (!token || !stored || token !== stored) {
    const redirectUrl = new URL("/admin/login?error=invalid", req.url);
    return NextResponse.redirect(redirectUrl);
  }

  cookieStore.delete("auth_token");
  cookieStore.set("auth", "true", {
    httpOnly: true,
    maxAge: 24 * 60 * 60,
    path: "/",
  });

  const redirectUrl = new URL("/admin", req.url);
  return NextResponse.redirect(redirectUrl);
}
