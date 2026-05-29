"use server";
import Post from "@/components/post/page";
import { cookies } from "next/headers";
import Button from "@/components/button/page";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function BlogPage() {
  const cookieStore = await cookies();
  const isAdminSession = cookieStore.get("session");
  const isAdmin = !!isAdminSession;

  const { data: posts, error } = await supabaseAdmin
    .from("posts")
    .select("id, title, summary, slug, created_at, imageurl")
    .order("id", { ascending: false });

  if (error) {
    console.error("Eroare la încărcarea postărilor:", error.message);
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Blog</h1>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12">
          <p className="text-4xl mb-4">⚠️</p>
          <p className="text-lg font-medium">Nu s-au putut încărca postările.</p>
          <p className="text-gray-500 mt-2">Încearcă din nou mai târziu.</p>
        </div>
      </div>
    );
  }

  if (!posts?.length) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">Blog</h1>
          {isAdmin && <Button href="/admin/" text="➕ Postare nouă" />}
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12">
          <p className="text-4xl mb-4">📝</p>
          <p className="text-lg font-medium">Nicio postare momentan.</p>
          <p className="text-gray-500 mt-2">Revino curând pentru conținut nou!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Postări recente</h1>
          <p className="text-gray-500 mt-3">
            Descoperă cele mai noi sfaturi, ghiduri și informații din domeniul electric
          </p>
        </div>
        {isAdmin && <Button href="/admin/" text="➕ Postare nouă" />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
