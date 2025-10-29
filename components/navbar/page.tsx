import React from "react";
import "./style.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Electrician Oradea</span>
      <div className="nav-links">
        <Link href="/">Acasa</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
