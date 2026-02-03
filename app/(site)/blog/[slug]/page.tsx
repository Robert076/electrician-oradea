import { supabase } from "@/lib/supabase";
import "./style.css";
import Button from "@/components/button/page";

interface Props {
  params: Promise<{ slug: string }>;
}

// Simple markdown parser function
function parseMarkdown(text: string): string {
  return (
    text
      // Bold and italic: ***text***
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
      // Bold: **text**
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // Italic: *text*
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // Underline: __text__
      .replace(/__(.+?)__/g, "<u>$1</u>")
      // Line breaks
      .replace(/\n/g, "<br />")
  );
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

  // Parse markdown to HTML
  const formattedDescription = parseMarkdown(post.description);

  return (
    <div className="post-page">
      <h1 style={{ backgroundImage: `url(${post.imageurl})` }}>{post.title}</h1>
      <div className="content-container">
        <small className="post-date">{formatted}</small>
        {/* Use dangerouslySetInnerHTML to render HTML */}
        <div
          className="post-description"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
      </div>
      <Button text="Înapoi la postări" href="/blog" />
    </div>
  );
}
