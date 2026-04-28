import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Helen made the entire buying process smooth and stress-free. Her market knowledge and negotiation skills helped us secure our home below asking — we couldn't be happier.",
    name: "The Chen Family",
    role: "Buyers · Richmond",
  },
  {
    quote:
      "We sold our property quickly and for more than we expected. Helen's marketing strategy and attention to detail were exceptional from day one through closing.",
    name: "M. Wong",
    role: "Seller · Vancouver",
  },
  {
    quote:
      "Honest, responsive, and incredibly knowledgeable. Helen treated our purchase like it was her own. We've already referred her to friends and family.",
    name: "J. & L. Tran",
    role: "Buyers · Coquitlam",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-background">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand uppercase tracking-eyebrow text-xs">Client Stories</span>
          <h2 className="text-4xl md:text-5xl mt-4 font-serif">What Clients Say About Working With Helen</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-card border border-border rounded-sm p-8 shadow-card hover:shadow-luxury transition-smooth flex flex-col"
            >
              <Quote className="h-8 w-8 text-gold mb-6" />
              <blockquote className="text-foreground/85 leading-relaxed font-light text-lg flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex gap-0.5 text-gold mt-6 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption>
                <p className="font-serif text-xl text-ink">{t.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
