import React from "react";
import "./style.css";

interface ServiceProps {
  imagePath: string;
  author: string;
  text: string;
}

const Review: React.FC<ServiceProps> = ({ imagePath, author, text }) => {
  return (
    <div className="review">
      <img src={imagePath} alt="" />
      <div className="wrapper">
        <div className="author">{author}</div>
        <div className="text">{text}</div>
      </div>
      <div className="icon stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: "#FFD700", fontSize: "20px" }}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Review;
