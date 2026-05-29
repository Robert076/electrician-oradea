import { supabaseAdmin } from "@/lib/supabaseAdmin";
import Button from "@/components/button/page";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/__(.+?)__/g, "<u>$1</u>")
    .replace(/\n/g, "<br />");
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post, error } = await supabaseAdmin
    .from("posts")
    .select("title, description, created_at, imageurl")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    notFound();
  }

  const date = new Date(post.created_at);
  const formatted = date.toLocaleString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDescription = parseMarkdown(post.description);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
      {/* Banner */}
      {post.imageurl && (
        <div className="relative rounded-2xl overflow-hidden h-48 sm:h-72 mb-8 shadow-lg">
          <img src={post.imageurl} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <h1 className="absolute bottom-6 left-6 right-6 text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">
            {post.title}
          </h1>
        </div>
      )}

      {!post.imageurl && (
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
      )}

      <p className="text-sm text-gray-400 mb-8">{formatted}</p>

      <div
        className="prose prose-gray max-w-none leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
      />

      <div className="mt-12">
        <Button text="Înapoi la postări" href="/blog" />
      </div>
    </article>
  );
}
