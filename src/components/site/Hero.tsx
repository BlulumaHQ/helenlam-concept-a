import heroImg from "@/assets/hero-vancouver.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Vancouver luxury skyline at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="container-luxury relative z-10 pt-36 pb-24">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-3 text-gold uppercase tracking-eyebrow text-[11px] mb-8 font-medium">
            <span className="h-px w-12 bg-gold" />
            Vancouver · Richmond · Greater Vancouver
          </span>
          <h1 className="font-serif text-white text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] mb-8 tracking-display font-medium">
            Find the Right Home or <span className="italic text-gold">Sell for Maximum Value</span> in Vancouver &amp; Richmond
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
            Work with Helen Lam — delivering personalized real estate strategies, expert
            guidance, and results you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lead-capture"
              className="inline-flex items-center justify-center bg-gold text-ink font-semibold px-9 py-4 rounded-sm hover:opacity-90 transition-smooth shadow-luxury"
            >
              Get Access to Exclusive Listings
            </a>
            <a
              href="#evaluation"
              className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-9 py-4 rounded-sm hover:bg-white hover:text-ink transition-smooth"
            >
              Get Your Home Value
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
