import { supabase } from "@/lib/supabase";

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, summary, slug, created_at")
    .order("id", { ascending: false });

  if (error) {
    console.error("Eroare la citirea postărilor:", error.message);
    return <p>❌ Nu s-au putut încărca postările.</p>;
  }

  if (!posts?.length) {
    return (
      <div style={{ maxWidth: 600, margin: "4rem auto" }}>
        <h1>Blog</h1>
        <p>Nicio postare momentan.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "4rem auto" }}>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => {
          // ✅ Convertim corect timestampul Postgres
          const date = new Date(p.created_at);
          const formatted = date.toLocaleString("ro-RO", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <li key={p.id} style={{ marginBottom: "1.5rem" }}>
              <a href={`/blog/${p.slug}`} style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                {p.title}
              </a>
              <p style={{ color: "#555", margin: "0.25rem 0" }}>{p.summary}</p>
              <small style={{ color: "#888" }}>{formatted}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
