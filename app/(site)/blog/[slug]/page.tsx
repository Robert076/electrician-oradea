import { supabase } from "@/lib/supabase";
import "./style.css";
import Button from "@/components/button/page";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("title, description, created_at, imageurl")
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
      {/* Mutăm imaginea ca background al h1 pentru un banner */}
      <h1 style={{ backgroundImage: `url(${post.imageurl})` }}>{post.title}</h1>

      {/* Container nou pentru lizibilitate maximă */}
      <div className="content-container">
        <small className="post-date">{formatted}</small>

        {/* Mutăm descrierea în interiorul containerului */}
        <p className="post-description">{post.description}</p>
      </div>
      <Button text="Înapoi la postări" href="/blog" />
    </div>
  );
}
