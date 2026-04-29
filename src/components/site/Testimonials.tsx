import { Star, Quote } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export function Testimonials() {
  const { t } = useT();
  return (
    <section className="section-pad bg-background">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand uppercase tracking-eyebrow text-xs">{t.testimonials.eyebrow}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.testimonials.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item) => (
            <figure key={item.n} className="bg-card border border-border rounded-sm p-8 shadow-card hover:shadow-luxury transition-smooth flex flex-col">
              <Quote className="h-8 w-8 text-gold mb-6" />
              <blockquote className="text-foreground/85 leading-relaxed font-light text-lg flex-1">
                "{item.q}"
              </blockquote>
              <div className="flex gap-0.5 text-gold mt-6 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption>
                <p className="font-serif text-xl text-ink">{item.n}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">{item.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
