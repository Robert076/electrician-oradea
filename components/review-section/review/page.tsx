import React from "react";

interface ServiceProps {
  imagePath: string;
  author: string;
  text: string;
}

const Review: React.FC<ServiceProps> = ({ imagePath, author, text }) => {
  return (
    <div className="w-[300px] sm:w-[320px] h-[320px] bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-300">
      <img
        src={imagePath}
        alt={author}
        className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100"
      />
      <div className="flex-1 overflow-hidden">
        <p className="font-semibold text-base mb-2">{author}</p>
        {text && (
          <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line line-clamp-5">{text}</p>
        )}
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
    </div>
  );
};

export default Review;
