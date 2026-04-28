export function SellerHook() {
  return (
    <section id="evaluation" className="section-pad bg-secondary">
      <div className="container-luxury">
        <div className="bg-card border border-border rounded-sm p-12 md:p-20 shadow-luxury text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ background: "var(--gradient-brand)" }} />
          <div className="relative">
            <span className="text-brand uppercase tracking-eyebrow text-xs">Sellers</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-6 mb-6 leading-[1.05]">
              Curious What Your Home Is <span className="italic text-gold">Worth?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 font-light">
              Get a personalized home evaluation based on current market data — no obligation.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center bg-ink text-white font-semibold px-10 py-5 rounded-sm hover:bg-brand-mid transition-smooth shadow-luxury text-lg">
              Get Free Home Evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
