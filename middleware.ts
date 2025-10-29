import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");
  if (!auth && request.nextUrl.pathname.endsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}
