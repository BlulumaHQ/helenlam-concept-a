import portrait from "@/assets/helen-portrait.jpg";
import { useT } from "@/i18n/LanguageContext";

export function Trust() {
  const { t } = useT();
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-luxury grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-full h-full border border-gold rounded-sm" />
          <img
            src={portrait}
            alt="Helen Lam"
            loading="lazy"
            width={800}
            height={800}
            className="relative rounded-sm shadow-luxury w-full max-w-md object-cover"
          />
        </div>
        <div>
          <span className="text-brand uppercase tracking-eyebrow text-xs">{t.about.eyebrow}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 leading-[1.1]">{t.about.title}</h2>
          <div className="space-y-5 text-foreground/80 text-lg font-light leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="grid grid-cols-3 gap-6 my-10 py-8 border-y border-border">
            <div>
              <p className="font-serif text-3xl text-ink">{t.about.stat1}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">{t.about.stat1Sub}</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ink">{t.about.stat2}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">{t.about.stat2Sub}</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ink">{t.about.stat3}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">{t.about.stat3Sub}</p>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center bg-ink text-white font-semibold px-8 py-4 rounded-sm hover:bg-brand-mid transition-smooth">
            {t.about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
