export function SellerHook() {
  return (
    <section id="evaluation" className="py-24 bg-secondary">
      <div className="container-luxury">
        <div className="bg-card border border-border rounded-2xl p-12 md:p-20 shadow-luxury text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative">
            <span className="text-gold uppercase tracking-[0.3em] text-xs">Sellers</span>
            <h2 className="text-4xl md:text-6xl mt-4 mb-6 leading-tight">
              Curious What Your Home Is <span className="italic text-gold">Worth?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Recent trends and home sales give an accurate analysis of your home's worth.
              Find out what you could list your home at — no obligation.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center gradient-gold text-ink font-semibold px-10 py-5 rounded-md hover:opacity-90 transition-smooth shadow-luxury text-lg">
              Get Free Home Evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
