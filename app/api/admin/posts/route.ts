import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("id, title, summary, slug, created_at")
    .order("id", { ascending: false });

  if (error) {
    console.error("Eroare la admin fetch:", error.message);
    return NextResponse.json({ error: "Nu s-au putut încărca postările." }, { status: 500 });
  }

  return NextResponse.json(data);
}
