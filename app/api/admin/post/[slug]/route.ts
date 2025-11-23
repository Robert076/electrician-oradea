import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;

  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("title, description, created_at")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "Postare negăsită" }, { status: 404 });
  }

  return NextResponse.json(data);
}
