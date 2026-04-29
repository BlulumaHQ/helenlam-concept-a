import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { useT } from "@/i18n/LanguageContext";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

export function Contact() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = schema.safeParse({ name: fd.get("name"), email: fd.get("email"), message: fd.get("message") });
    if (!r.success) { setError(r.error.issues[0].message); setStatus("error"); return; }
    setStatus("success"); setError(""); e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-luxury grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-brand uppercase tracking-eyebrow text-xs">{t.contact.eyebrow}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 leading-[1.1]">{t.contact.title}</h2>
          <p className="text-muted-foreground text-lg mb-12 font-light">{t.contact.sub}</p>
          <div className="space-y-6">
            <a href="tel:778-889-6084" className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-sm bg-ink flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-eyebrow">{t.contact.cell}</p>
                <p className="text-lg font-medium group-hover:text-brand-mid transition-smooth">778-889-6084</p>
                <p className="text-xs text-muted-foreground">{t.contact.office} 604-999-8882</p>
              </div>
            </a>
            <a href="mailto:sold@helenlam.ca" className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-sm bg-ink flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-eyebrow">{t.contact.emailLabel}</p>
                <p className="text-lg font-medium group-hover:text-brand-mid transition-smooth">sold@helenlam.ca</p>
              </div>
            </a>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-sm bg-ink flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-eyebrow">{t.contact.officeLabel}</p>
                <p className="text-lg font-medium">#215-8600 Cambie Rd</p>
                <p className="text-sm text-muted-foreground">Richmond, BC V6X 4J8</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-secondary p-10 rounded-sm space-y-4 border border-border">
          <h3 className="font-serif text-3xl mb-4">{t.contact.formTitle}</h3>
          <input name="name" placeholder={t.contact.name} required maxLength={100}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-brand" />
          <input name="email" type="email" placeholder={t.contact.email} required maxLength={255}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-brand" />
          <textarea name="message" placeholder={t.contact.message} required rows={5} maxLength={1000}
            className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-brand resize-none" />
          <button type="submit" className="w-full bg-ink text-white font-semibold py-4 rounded-sm hover:bg-brand-mid transition-smooth">
            {t.contact.submit}
          </button>
          {status === "success" && <p className="text-sm text-green-700">{t.contact.success}</p>}
          {status === "error" && <p className="text-sm text-destructive">{error}</p>}
        </form>
      </div>
    </section>
  );
}
