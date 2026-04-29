import { useState } from "react";
import { z } from "zod";
import { useT } from "@/i18n/LanguageContext";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
});

export function LeadCapture() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
    });
    if (!result.success) {
      setError(result.error.issues[0].message);
      setStatus("error");
      return;
    }
    setStatus("success");
    setError("");
    e.currentTarget.reset();
  };

  return (
    <section id="lead-capture" className="relative bg-ink text-white section-pad overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 40%)" }} />
      <div className="container-luxury relative grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-3 text-gold uppercase tracking-eyebrow text-[11px] font-medium">
            <span className="h-px w-12 bg-gold" />
            {t.lead.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-6 mb-6 leading-[1.05]">
            {t.lead.title1}<span className="italic text-gold">{t.lead.titleAccent}</span>{t.lead.title2}
          </h2>
          <p className="text-white/75 text-lg leading-relaxed font-light">{t.lead.sub}</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white text-ink p-10 rounded-sm shadow-luxury space-y-4">
          <h3 className="font-serif text-3xl mb-4">{t.lead.formTitle}</h3>
          <input name="name" placeholder={t.lead.name} required maxLength={100}
            className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-brand bg-background" />
          <input name="email" type="email" placeholder={t.lead.email} required maxLength={255}
            className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-brand bg-background" />
          <input name="phone" type="tel" placeholder={t.lead.phone} maxLength={30}
            className="w-full px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-brand bg-background" />
          <button type="submit" className="w-full bg-ink text-white font-semibold py-4 rounded-sm hover:bg-brand-mid transition-smooth tracking-wide">
            {t.lead.submit}
          </button>
          {status === "success" && <p className="text-sm text-green-700">{t.lead.success}</p>}
          {status === "error" && <p className="text-sm text-destructive">{error}</p>}
          <p className="text-xs text-muted-foreground text-center">{t.lead.privacy}</p>
        </form>
      </div>
    </section>
  );
}
