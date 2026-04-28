const steps = [
  { n: "01", t: "Consultation", d: "We start with a clear conversation about your goals, timeline, and budget." },
  { n: "02", t: "Search or Strategy", d: "Buyers get a curated home search. Sellers get a custom listing & marketing plan." },
  { n: "03", t: "Negotiation", d: "Sharp, data-driven negotiation to protect your interests and maximize value." },
  { n: "04", t: "Closing", d: "End-to-end coordination with lawyers, lenders and inspectors — keys in hand." },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-ink text-white">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand uppercase tracking-[0.3em] text-xs">Process</span>
          <h2 className="text-4xl md:text-5xl mt-4">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-brand text-5xl mb-4">{s.n}</div>
              <h3 className="text-2xl mb-2">{s.t}</h3>
              <p className="text-white/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#lead-capture" className="inline-flex items-center justify-center gradient-brand text-ink font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-smooth">
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
