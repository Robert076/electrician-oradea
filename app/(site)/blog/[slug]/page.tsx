import { supabase } from "@/lib/supabase";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("title, description, created_at")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    console.error("Eroare la încărcarea postării:", error?.message);
    return <p>❌ Postare negăsită.</p>;
  }

  // ✅ Formatează frumos data din PostgreSQL
  const date = new Date(post.created_at);
  const formatted = date.toLocaleString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div style={{ maxWidth: 600, margin: "4rem auto" }}>
      <h1>{post.title}</h1>
      <p style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{post.description}</p>
      <small style={{ color: "#888" }}>{formatted}</small>
    </div>
  );
}
