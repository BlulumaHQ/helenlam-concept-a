import { Home, TrendingUp, Search, Handshake, BarChart3, Target } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand uppercase tracking-eyebrow text-xs">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Two Paths. One Trusted Advisor.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-12 rounded-sm shadow-card border border-border hover:shadow-luxury transition-smooth flex flex-col">
            <div className="w-14 h-14 rounded-sm bg-ink flex items-center justify-center mb-8">
              <Home className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-serif text-4xl mb-3">Buying a Home?</h3>
            <p className="text-muted-foreground mb-8 text-lg font-light">
              Find the right home with a guide who knows the Vancouver market inside out.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                { i: Search, t: "Personalized search" },
                { i: BarChart3, t: "Market insights" },
                { i: Handshake, t: "Skilled negotiation" },
              ].map(({ i: Icon, t }) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <Icon className="h-5 w-5 text-brand" />
                  {t}
                </li>
              ))}
            </ul>
            <a href="#lead-capture" className="inline-flex items-center justify-center w-full bg-ink text-white font-semibold py-4 rounded-sm hover:bg-brand-mid transition-smooth">
              Start Your Home Search →
            </a>
          </div>
          <div className="bg-ink text-white p-12 rounded-sm shadow-luxury flex flex-col">
            <div className="w-14 h-14 rounded-sm bg-gold flex items-center justify-center mb-8">
              <TrendingUp className="h-7 w-7 text-ink" />
            </div>
            <h3 className="font-serif text-4xl mb-3">Selling Your Property?</h3>
            <p className="text-white/75 mb-8 text-lg font-light">
              Get the highest possible price in the shortest period of time.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                { i: BarChart3, t: "Accurate pricing strategy" },
                { i: Target, t: "Professional marketing" },
                { i: TrendingUp, t: "Maximum value optimization" },
              ].map(({ i: Icon, t }) => (
                <li key={t} className="flex items-center gap-3 text-white/90">
                  <Icon className="h-5 w-5 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <a href="#evaluation" className="inline-flex items-center justify-center w-full bg-gold text-ink font-semibold py-4 rounded-sm hover:opacity-90 transition-smooth">
              Get My Home Value →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
