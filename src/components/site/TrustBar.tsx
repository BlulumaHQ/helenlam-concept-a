import { ShieldCheck, MapPinned, Sparkles, Handshake } from "lucide-react";

const items = [
  { i: ShieldCheck, t: "Trusted by Local Buyers & Sellers" },
  { i: Sparkles, t: "Personalized Service" },
  { i: MapPinned, t: "Local Market Expertise" },
  { i: Handshake, t: "Skilled Negotiation" },
];

export function TrustBar() {
  return (
    <section className="bg-ink border-y border-white/10">
      <div className="container-luxury py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 text-white/85">
              <Icon className="h-5 w-5 text-gold shrink-0" />
              <span className="text-sm font-medium tracking-wide">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
