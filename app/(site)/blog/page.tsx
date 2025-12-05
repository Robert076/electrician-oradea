"use server";
import Post from "@/components/post/page";
import "./style.css";
import { cookies } from "next/headers";
import Button from "@/components/button/page";
export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/posts`, {
    cache: "no-store",
  });

  const cookieStore = await cookies();
  const isAdminSession = cookieStore.get("session");
  const isAdmin = !!isAdminSession;

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
      {isAdmin && <Button href="/admin/" text="Crează o postare nouă" />}
      {posts.map((p: PostProperties) => {
        const date = new Date(p.created_at).toLocaleString("ro-RO", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <Post
            key={p.id}
            id={p.id}
            title={p.title}
            summary={p.summary}
            created_at={date}
            slug={p.slug}
            imageurl={p.imageurl}
          />
        );
      })}
    </div>
  );
}
