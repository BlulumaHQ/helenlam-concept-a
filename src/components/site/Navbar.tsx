import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-luxury flex items-center justify-between py-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl text-white tracking-tight">Helen Lam</span>
          <span className="hidden sm:inline text-xs text-gold uppercase tracking-[0.2em] border-l border-white/30 pl-2 ml-1">PREC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
          <a href="#listings" className="hover:text-gold transition-smooth">Listings</a>
          <a href="#services" className="hover:text-gold transition-smooth">Services</a>
          <a href="#process" className="hover:text-gold transition-smooth">Process</a>
          <a href="#contact" className="hover:text-gold transition-smooth">Contact</a>
        </nav>
        <a href="tel:778-889-6084" className="hidden sm:inline-flex items-center gap-2 text-sm text-white hover:text-gold transition-smooth">
          <Phone className="h-4 w-4" />
          778-889-6084
        </a>
      </div>
    </header>
  );
}
