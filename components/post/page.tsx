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
    <article className="blog-post-card" onClick={handleRedirect}>
      <div className="post-image-wrapper">
        {imageurl ? (
          <img src={imageurl} alt={title} className="post-image" loading="lazy" />
        ) : (
          <div className="post-image-placeholder">
            <span className="placeholder-icon">📄</span>
          </div>
        )}
        <div className="post-overlay"></div>
      </div>

      <div className="post-content">
        <div className="post-meta">
          <time className="post-date" dateTime={created_at}>
            {created_at}
          </time>
        </div>

        <h2 className="post-title">{title}</h2>

        <p className="post-summary">{summary}</p>

        <div className="post-footer">
          <span className="read-more">
            Citește mai mult
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
