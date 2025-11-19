import "./style.css";
import Button from "@/components/button/page";

export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/posts`, {
    cache: "no-store",
  });
  const posts = await res.json();

  if (!posts?.length) {
    return (
      <div className="blog">
        <h1>Blog</h1>
        <p>Nicio postare momentan.</p>
      </div>
    );
  }

  return (
    <div className="blog">
      <h1>Postări recente</h1>
      <p>Vezi ultimele postări și sfaturi de la specialiștii noștri în electricitate.</p>
      {posts.map((p: any) => {
        const date = new Date(p.created_at).toLocaleString("ro-RO", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <div key={p.id} className="post">
            <p className="title">{p.title}</p>
            <p className="summary">{p.summary}</p>
            <p className="date" style={{ color: "#888" }}>
              {date}
            </p>
            <Button text="Vezi postarea" href={`/blog/${p.slug}`} />
          </div>
        );
      })}
    </div>
  );
}
