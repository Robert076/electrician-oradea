import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const revalidate = 7200;

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("posts")
      .select("id, title, summary, slug, created_at, imageurl")
      .order("id", { ascending: false });

    if (error) {
      console.error("Eroare la fetch postări:", error.message);
      return NextResponse.json({ error: "Nu s-au putut încărca postările." }, { status: 500 });
    }

    return NextResponse.json(data ?? [], {
      headers: {
        "Cache-Control": "public, s-maxage=7200, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    console.error("Eroare neașteptată la fetch postări:", err);
    return NextResponse.json({ error: "Eroare internă de server." }, { status: 500 });
  }
}
