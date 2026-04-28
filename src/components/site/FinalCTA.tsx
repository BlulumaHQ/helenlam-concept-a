export function FinalCTA() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, var(--gold) 0%, transparent 45%), radial-gradient(circle at 10% 80%, var(--brand-light) 0%, transparent 50%)",
        }}
      />
      <div className="container-luxury relative section-pad text-center">
        <span className="text-gold uppercase tracking-eyebrow text-xs">Next Step</span>
        <h2 className="font-serif text-5xl md:text-7xl mt-6 mb-6 leading-[1.05] max-w-4xl mx-auto">
          Ready to Take the Next Step?
        </h2>
        <p className="text-white/75 text-lg max-w-2xl mx-auto mb-12 font-light">
          Whether you're searching for the right home or preparing to sell, Helen will guide you
          with clarity, strategy, and care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#lead-capture"
            className="inline-flex items-center justify-center bg-gold text-ink font-semibold px-10 py-5 rounded-sm hover:opacity-90 transition-smooth shadow-luxury"
          >
            Get Exclusive Listings
          </a>
          <a
            href="#evaluation"
            className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-10 py-5 rounded-sm hover:bg-white hover:text-ink transition-smooth"
          >
            Get Home Value
          </a>
        </div>
      </div>
    </section>
  );
}
