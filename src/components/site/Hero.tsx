import heroImg from "@/assets/hero-vancouver.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
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
          <span className="inline-block text-gold uppercase tracking-[0.3em] text-xs mb-6 border border-gold/40 px-4 py-2">
            Vancouver · Richmond · Burnaby
          </span>
          <h1 className="text-white font-display text-5xl md:text-7xl leading-[1.05] mb-6">
            Find Your Dream Home or Sell for <span className="text-gold italic">Top Dollar</span> in Vancouver
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Work with Helen Lam — a trusted real estate professional delivering proven marketing,
            sharp negotiation, and personalized service from search to sold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#lead-capture"
              className="inline-flex items-center justify-center gradient-gold text-ink font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-smooth shadow-luxury"
            >
              Get Access to Exclusive Listings
            </a>
            <a
              href="#evaluation"
              className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-ink transition-smooth"
            >
              Get Your Home Value
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-white/80 text-sm">
            <div><span className="text-gold font-display text-2xl block">100%</span>Client-First Service</div>
            <div><span className="text-gold font-display text-2xl block">Top $</span>Sale Price Strategy</div>
            <div><span className="text-gold font-display text-2xl block">5★</span>Repeat & Referral Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
