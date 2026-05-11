"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/talent-development", label: "Talent Development" },
  { href: "/coaching", label: "Coaching" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 bg-off-white border-b border-[#e2ddd8]"
      style={{ backgroundColor: "#f7f5f2" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-xl text-charcoal tracking-wide hover:text-colonial-blue transition-colors duration-200"
        >
          Matt Sprang
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === href
                  ? "text-colonial-blue font-semibold"
                  : "text-body-text hover:text-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-charcoal transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-charcoal transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-charcoal transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-off-white border-t border-[#e2ddd8] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-wide py-1 transition-colors duration-200 ${
                pathname === href
                  ? "text-colonial-blue font-semibold"
                  : "text-body-text hover:text-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
