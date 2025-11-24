"use client";
import React, { useEffect, useRef } from "react";
import "./style.css";
import Link from "next/link";

interface ServiceProps {
  iconPath: string;
  title: string;
  text: string;
}

const Service: React.FC<ServiceProps> = ({ iconPath, title, text }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Link href="/servicii" style={{ textDecoration: "none", color: "black" }}>
      <div className="service" ref={ref}>
        <div className="icon">
          <img src={iconPath} alt="" />
        </div>
        <div className="wrapper">
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    </Link>
  );
};

export default Service;
