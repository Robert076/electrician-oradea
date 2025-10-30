"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // 🔹 Blocăm scroll-ul când meniul e deschis
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="navbar">
      <Link className="logo" href="/">
        <span>Electrician</span> Oradea
      </Link>

      {/* 🔹 Butonul de meniu / X */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* 🔹 Meniul full-screen */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Acasa
        </Link>
        <Link href="/despre-noi" onClick={() => setOpen(false)}>
          Despre noi
        </Link>
        <Link href="/servicii" onClick={() => setOpen(false)}>
          Servicii
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link href="/blog" onClick={() => setOpen(false)}>
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
