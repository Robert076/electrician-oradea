"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Post: React.FC<PostProperties> = ({ title, summary, created_at, slug, imageurl }) => {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/blog/${slug}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        {imageurl ? (
          <img
            src={imageurl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-gray-300">📝</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-medium text-primary/70 uppercase tracking-wide mb-2">{created_at}</p>
        <h3 className="font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{summary}</p>
        <span className="inline-block mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Citește mai mult →
        </span>
      </div>
    </article>
  );
};

export default Post;
