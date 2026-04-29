import { Home, TrendingUp, Search, Handshake, BarChart3, Target } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export function Services() {
  const { t } = useT();
  const buyIcons = [Search, BarChart3, Handshake];
  const sellIcons = [BarChart3, Target, TrendingUp];
  return (
    <section id="services" className="section-pad bg-background">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand uppercase tracking-eyebrow text-xs">{t.services.eyebrow}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.services.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-12 rounded-sm shadow-card border border-border hover:shadow-luxury transition-smooth flex flex-col">
            <div className="w-14 h-14 rounded-sm bg-ink flex items-center justify-center mb-8">
              <Home className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-serif text-4xl mb-3">{t.services.buyTitle}</h3>
            <p className="text-muted-foreground mb-8 text-lg font-light">{t.services.buySub}</p>
            <ul className="space-y-4 mb-10 flex-1">
              {t.services.buy.map((item, idx) => {
                const Icon = buyIcons[idx];
                return (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Icon className="h-5 w-5 text-brand" />
                    {item}
                  </li>
                );
              })}
            </ul>
            <a href="#lead-capture" className="inline-flex items-center justify-center w-full bg-ink text-white font-semibold py-4 rounded-sm hover:bg-brand-mid transition-smooth">
              {t.services.buyCta}
            </a>
          </div>
          <div className="bg-ink text-white p-12 rounded-sm shadow-luxury flex flex-col">
            <div className="w-14 h-14 rounded-sm bg-gold flex items-center justify-center mb-8">
              <TrendingUp className="h-7 w-7 text-ink" />
            </div>
            <h3 className="font-serif text-4xl mb-3">{t.services.sellTitle}</h3>
            <p className="text-white/75 mb-8 text-lg font-light">{t.services.sellSub}</p>
            <ul className="space-y-4 mb-10 flex-1">
              {t.services.sell.map((item, idx) => {
                const Icon = sellIcons[idx];
                return (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <Icon className="h-5 w-5 text-gold" />
                    {item}
                  </li>
                );
              })}
            </ul>
            <a href="#evaluation" className="inline-flex items-center justify-center w-full bg-gold text-ink font-semibold py-4 rounded-sm hover:opacity-90 transition-smooth">
              {t.services.sellCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
