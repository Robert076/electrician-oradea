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
      <div className="blog-container">
        <div className="blog-header">
          <div className="header-content">
            <h1>Blog</h1>
            <p className="blog-subtitle">
              Fii la curent cu cele mai noi informații din domeniu
            </p>
          </div>
          {isAdmin && (
            <div className="admin-actions">
              <Button href="/admin/" text="➕ Postare nouă" />
            </div>
          )}
        </div>
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <p className="empty-text">Nicio postare momentan.</p>
          <p className="empty-subtext">Revino curând pentru conținut nou!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="header-content">
          <h1>Postări recente</h1>
          <p className="blog-subtitle">
            Descoperă cele mai noi sfaturi, ghiduri și informații din domeniul electric
          </p>
        </div>
        {isAdmin && (
          <div className="admin-actions">
            <Button href="/admin/" text="➕ Postare nouă" />
          </div>
        )}
      </div>

      <div className="posts-grid">
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
    </div>
  );
}
