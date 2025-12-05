import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("session");
  if (!auth) return NextResponse.json({ error: "Neautorizat" }, { status: 403 });

  const { title, description, summary, fileBase64, fileName } = await req.json();

  if (!title || !description || !summary)
    return NextResponse.json(
      { error: "Titlu, descriere și rezumat obligatorii" },
      { status: 400 }
    );

  let imageurl: string | null = null;

  if (fileBase64 && fileName) {
    const buffer = Buffer.from(fileBase64, "base64");
    const filePath = `${Date.now()}_${fileName}`;

    const { error: uploadError } = await supabaseAdmin.storage
      .from("posts")
      .upload(filePath, buffer, {
        contentType: "image/*", // aici zicem că e imagine
      });

    if (uploadError) {
      console.error(uploadError);
      return NextResponse.json({ error: "Eroare la upload imagine" }, { status: 500 });
    }

    imageurl = `${process.env.SUPABASE_URL}/storage/v1/object/public/posts/${filePath}`;
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const { data, error } = await supabaseAdmin
    .from("posts")
    .insert([{ title, summary, description, slug, imageurl }])
    .select();

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Eroare la inserare" }, { status: 500 });
  }

  return NextResponse.json({ success: true, slug: data?.[0]?.slug });
}
