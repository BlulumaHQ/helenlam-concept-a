import portrait from "@/assets/helen-portrait.jpg";

export function Trust() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-luxury grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-full h-full border border-gold rounded-sm" />
          <img
            src={portrait}
            alt="Helen Lam — Vancouver & Richmond Real Estate Professional"
            loading="lazy"
            width={800}
            height={800}
            className="relative rounded-sm shadow-luxury w-full max-w-md object-cover"
          />
        </div>
        <div>
          <span className="text-brand uppercase tracking-eyebrow text-xs">About Helen</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 leading-[1.1]">
            Your Local Real Estate Expert in Vancouver &amp; Richmond
          </h2>
          <div className="space-y-5 text-foreground/80 text-lg font-light leading-relaxed">
            <p>
              Helen Lam is a trusted real estate professional serving buyers, sellers, and
              investors across Vancouver, Richmond, Burnaby, and Coquitlam. Her practice is
              built on deep local market knowledge and a client-first philosophy.
            </p>
            <p>
              Helen prides herself on giving every client utmost personal service — what
              matters most is your satisfaction. From the first conversation to the final
              signature, you'll have an experienced advocate guiding every decision.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 my-10 py-8 border-y border-border">
            <div>
              <p className="font-serif text-3xl text-ink">Local</p>
              <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">Market Focus</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ink">Personal</p>
              <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">Service</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ink">Proven</p>
              <p className="text-xs text-muted-foreground uppercase tracking-eyebrow mt-1">Results</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-ink text-white font-semibold px-8 py-4 rounded-sm hover:bg-brand-mid transition-smooth"
          >
            Contact Helen
          </a>
        </div>
      </div>
    </section>
  );
}
