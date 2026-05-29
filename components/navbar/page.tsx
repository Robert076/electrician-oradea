"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Acasa" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-lg font-semibold">
            <span className="text-primary">Electrician</span>{" "}
            <span className="text-secondary">Oradea</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setOpen(true)}
          aria-label="Deschide meniu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute bottom-10 text-primary"
          onClick={() => setOpen(false)}
          aria-label="Închide meniu"
        >
          <X size={36} />
        </button>
        <ul className="list-none p-0 w-full text-center">
          {links.map((link) => (
            <li key={link.href} className="border-b border-gray-100">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-5 text-xl font-medium text-primary no-underline hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
