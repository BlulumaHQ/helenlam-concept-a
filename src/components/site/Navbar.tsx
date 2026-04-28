import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-luxury flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3">
          <div>
            <div className="font-serif text-white text-2xl tracking-display leading-none">Helen Lam</div>
            <div className="text-[10px] text-gold tracking-eyebrow uppercase mt-1.5">Personal Real Estate Corp.</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90">
          <a href="#listings" className="hover:text-gold transition-smooth">Listings</a>
          <a href="#services" className="hover:text-gold transition-smooth">Services</a>
          <a href="#about" className="hover:text-gold transition-smooth">About</a>
          <a href="#process" className="hover:text-gold transition-smooth">Process</a>
          <a href="#contact" className="hover:text-gold transition-smooth">Contact</a>
        </nav>
        <a href="tel:778-889-6084" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold transition-smooth">
          <Phone className="h-4 w-4" />
          778-889-6084
        </a>
      </div>
    </header>
  );
}
