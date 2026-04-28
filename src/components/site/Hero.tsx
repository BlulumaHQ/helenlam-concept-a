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
      <div className="container-luxury relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-white uppercase tracking-eyebrow text-[11px] mb-8 font-medium">
            <span className="h-px w-10 bg-brand-light" />
            Vancouver · Richmond · Burnaby
          </span>
          <h1 className="text-white text-5xl md:text-7xl leading-[1.02] mb-6 tracking-display font-semibold">
            Find Your Dream Home or Sell for <span className="text-brand-light">Top Dollar</span> in Vancouver
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            Work with Helen Lam — a trusted real estate professional delivering proven marketing,
            sharp negotiation, and personalized service from search to sold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lead-capture"
              className="inline-flex items-center justify-center gradient-brand text-white font-semibold px-8 py-4 rounded-sm hover:opacity-90 transition-smooth shadow-brand"
            >
              Get Access to Exclusive Listings
            </a>
            <a
              href="#evaluation"
              className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white hover:text-ink transition-smooth"
            >
              Get Your Home Value
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-10 text-white/80 text-sm">
            <div><span className="text-brand-light text-3xl block font-semibold tracking-display">100%</span>Client-First Service</div>
            <div><span className="text-brand-light text-3xl block font-semibold tracking-display">Top $</span>Sale Price Strategy</div>
            <div><span className="text-brand-light text-3xl block font-semibold tracking-display">5★</span>Repeat & Referral Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
