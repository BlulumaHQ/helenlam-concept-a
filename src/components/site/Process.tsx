const steps = [
  { n: "01", t: "Consultation", d: "A clear conversation about your goals, timeline, and budget." },
  { n: "02", t: "Strategy", d: "A custom buying plan or tailored listing & marketing approach." },
  { n: "03", t: "Execution", d: "Sharp, data-driven negotiation that protects your interests." },
  { n: "04", t: "Closing", d: "End-to-end coordination with lawyers, lenders and inspectors." },
];

export function Process() {
  return (
    <section id="process" className="section-pad bg-ink text-white">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold uppercase tracking-eyebrow text-xs">Process</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">A Simple, Guided Process</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((s) => (
            <div key={s.n} className="relative pt-8 border-t border-white/15">
              <div className="text-gold font-serif text-2xl mb-6 tracking-wide">{s.n}</div>
              <h3 className="font-serif text-3xl mb-3">{s.t}</h3>
              <p className="text-white/70 leading-relaxed font-light">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <a href="#lead-capture" className="inline-flex items-center justify-center bg-gold text-ink font-semibold px-9 py-4 rounded-sm hover:opacity-90 transition-smooth">
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
