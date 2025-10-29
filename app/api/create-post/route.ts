import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");
  if (!auth) return NextResponse.json({ error: "Neautorizat" }, { status: 403 });

  const { title, description, summary } = await req.json();

  if (!title || !description || !summary)
    return NextResponse.json(
      { error: "Titlu, descriere și rezumat obligatorii" },
      { status: 400 }
    );

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const { data, error } = await supabase
    .from("posts")
    .insert([{ title, summary, description, slug }])
    .select();

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Eroare la inserare" }, { status: 500 });
  }

  return NextResponse.json({ success: true, slug: data?.[0]?.slug });
}
