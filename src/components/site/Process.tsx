import { useT } from "@/i18n/LanguageContext";

export function Process() {
  const { t } = useT();
  return (
    <section id="process" className="section-pad bg-ink text-white">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold uppercase tracking-eyebrow text-xs">{t.process.eyebrow}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.process.title}</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {t.process.steps.map((s, i) => (
            <div key={s.t} className="relative pt-8 border-t border-white/15">
              <div className="text-gold font-serif text-2xl mb-6 tracking-wide">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-serif text-3xl mb-3">{s.t}</h3>
              <p className="text-white/70 leading-relaxed font-light">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <a href="#lead-capture" className="inline-flex items-center justify-center bg-gold text-ink font-semibold px-9 py-4 rounded-sm hover:opacity-90 transition-smooth">
            {t.process.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
