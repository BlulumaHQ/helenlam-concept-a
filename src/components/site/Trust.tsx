import { Star, Users, Award, Repeat } from "lucide-react";
import portrait from "@/assets/helen-portrait.jpg";

export function Trust() {
  return (
    <section className="py-24 bg-background">
      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand rounded-sm" />
          <img src={portrait} alt="Helen Lam — MLS Medallion Club Member" loading="lazy" width={800} height={800}
            className="relative rounded-sm shadow-luxury w-full max-w-md object-cover" />
          <div className="absolute -bottom-6 -right-6 bg-ink text-white p-6 rounded-sm shadow-luxury max-w-[240px] hidden md:block">
            <div className="flex gap-1 text-brand-light mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm leading-relaxed">"Utmost personal service — what matters most is your satisfaction."</p>
            <p className="text-xs text-white/60 mt-3 tracking-eyebrow uppercase">— Helen Lam</p>
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 text-brand uppercase tracking-eyebrow text-[11px] font-medium">
            <span className="h-px w-10 bg-brand" />
            Why Clients Choose Helen
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 tracking-display">Trusted by Buyers and Sellers Across Greater Vancouver</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
            Helen prides herself on giving every client utmost personal service. The result is a
            track record built on referrals, repeat business, and top-dollar outcomes.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {i:Repeat,t:"Repeat Clients & Referrals",d:"A practice built on relationships, not transactions."},
              {i:Star,t:"High Client Satisfaction",d:"Clients return because the service exceeds expectations."},
              {i:Award,t:"Top-Dollar Results",d:"Pricing and marketing strategy designed to maximize sale value."},
              {i:Users,t:"Local Market Expertise",d:"Deep knowledge of Vancouver, Richmond, Burnaby & Coquitlam."},
            ].map(({i:Icon,t,d})=>(
              <div key={t} className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-brand flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg mb-1 font-semibold tracking-display">{t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
