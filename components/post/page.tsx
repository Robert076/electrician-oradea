"use client";
import React from "react";
import "./style.css";
import { useRouter } from "next/navigation";

const Post: React.FC<PostProperties> = ({ title, summary, created_at, slug, imageurl }) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="blog-post" onClick={handleRedirect}>
      {imageurl && <img src={imageurl} alt={title} />}
      <div className="paragraphs">
        <p className="title">{title}</p>
        <p className="summary">{summary}</p>
      </div>
      <p className="date">{created_at}</p>
    </div>
  );
};

export default Post;
