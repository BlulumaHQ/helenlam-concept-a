import { useT } from "@/i18n/LanguageContext";

export function SellerHook() {
  const { t } = useT();
  return (
    <section id="evaluation" className="section-pad bg-secondary">
      <div className="container-luxury">
        <div className="bg-card border border-border rounded-sm p-12 md:p-20 shadow-luxury text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ background: "var(--gradient-brand)" }} />
          <div className="relative">
            <span className="text-brand uppercase tracking-eyebrow text-xs">{t.seller.eyebrow}</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-6 mb-6 leading-[1.05]">
              {t.seller.title1}<span className="italic text-gold">{t.seller.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 font-light">{t.seller.sub}</p>
            <a href="#contact" className="inline-flex items-center justify-center bg-ink text-white font-semibold px-10 py-5 rounded-sm hover:bg-brand-mid transition-smooth shadow-luxury text-lg">
              {t.seller.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
