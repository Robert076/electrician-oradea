"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="navbar">
      <Link className="logo" href="/">
        <span>Electrician</span> Oradea
      </Link>

      {/* ICON MENIU */}
      <div className="menu-icon" onClick={() => setOpen(true)}>
        <Menu size={28} />
      </div>

      {/* MENIU FULLSCREEN EXACT CA EXEMPLUL 2 */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <div className="close-btn" onClick={() => setOpen(false)}>
          <X size={38} />
        </div>

        <ul>
          <li onClick={() => setOpen(false)}>
            <Link href="/">Acasa</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/despre-noi">Despre noi</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/servicii">Servicii</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/contact">Contact</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      {/* Desktop links rămân la fel */}
      <div className="nav-links">
        <Link href="/">Acasa</Link>
        <Link href="/despre-noi">Despre noi</Link>
        <Link href="/servicii">Servicii</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
