import { supabase } from "@/lib/supabase";
import "./style.css";

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
    return (
      <p
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        ❌ Postare negăsită. Se poate ca serverul să fie offline.
      </p>
    );
  }

  // 🟦 Background random pentru h1
  const images = ["/hero.jpg", "/hero2.jpg", "/hero3.jpg"];
  const randomBg = images[Math.floor(Math.random() * images.length)];

  // Formatăm data
  const date = new Date(post.created_at);
  const formatted = date.toLocaleString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="post-page">
      <h1 style={{ backgroundImage: `url(${randomBg})` }}>{post.title}</h1>

      <p style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{post.description}</p>

      <small style={{ color: "#888" }}>{formatted}</small>
    </div>
  );
}
