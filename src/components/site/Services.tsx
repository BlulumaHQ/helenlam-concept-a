import { Home, TrendingUp, Search, Handshake, BarChart3, Target } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-luxury">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand uppercase tracking-[0.3em] text-xs">Services</span>
          <h2 className="text-4xl md:text-5xl mt-4">Two Paths. One Trusted Advisor.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-10 rounded-lg shadow-card border border-border hover:shadow-luxury transition-smooth">
            <div className="w-14 h-14 rounded-md gradient-brand flex items-center justify-center mb-6">
              <Home className="h-7 w-7 text-ink" />
            </div>
            <h3 className="text-3xl mb-3">Buying</h3>
            <p className="text-muted-foreground mb-6">Find the right home with a guide who knows the Vancouver market inside out.</p>
            <ul className="space-y-3 mb-8">
              {[{i:Search,t:"Personalized home search"},{i:BarChart3,t:"Market insights & pricing data"},{i:Handshake,t:"Negotiation support that protects you"}].map(({i:Icon,t})=>(
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <Icon className="h-5 w-5 text-brand" />{t}
                </li>
              ))}
            </ul>
            <a href="#lead-capture" className="inline-flex items-center justify-center w-full bg-ink text-white font-semibold py-3 rounded-md hover:bg-ink/90 transition-smooth">
              Start Your Home Search →
            </a>
          </div>
          <div className="bg-card p-10 rounded-lg shadow-card border border-border hover:shadow-luxury transition-smooth">
            <div className="w-14 h-14 rounded-md gradient-brand flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-ink" />
            </div>
            <h3 className="text-3xl mb-3">Selling</h3>
            <p className="text-muted-foreground mb-6">Get the highest possible price in the shortest period of time.</p>
            <ul className="space-y-3 mb-8">
              {[{i:BarChart3,t:"Accurate home evaluation"},{i:Target,t:"Proven marketing strategy"},{i:TrendingUp,t:"Maximum price optimization"}].map(({i:Icon,t})=>(
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <Icon className="h-5 w-5 text-brand" />{t}
                </li>
              ))}
            </ul>
            <a href="#evaluation" className="inline-flex items-center justify-center w-full gradient-brand text-white font-semibold py-3 rounded-md hover:opacity-90 transition-smooth">
              Get My Home Value →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
