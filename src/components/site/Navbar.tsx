import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-luxury flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3">
          <div>
            <div className="text-white text-xl font-semibold tracking-display leading-none">HELEN LAM</div>
            <div className="text-[10px] text-white/70 tracking-eyebrow uppercase mt-1">Personal Real Estate Corp.</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90">
          <a href="#listings" className="hover:text-brand-light transition-smooth">Listings</a>
          <a href="#services" className="hover:text-brand-light transition-smooth">Services</a>
          <a href="#process" className="hover:text-brand-light transition-smooth">Process</a>
          <a href="#contact" className="hover:text-brand-light transition-smooth">Contact</a>
        </nav>
        <a href="tel:778-889-6084" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-light transition-smooth">
          <Phone className="h-4 w-4" />
          778-889-6084
        </a>
      </div>
    </header>
  );
}
