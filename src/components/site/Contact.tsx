import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
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
    <section id="contact" className="py-24 bg-background">
      <div className="container-luxury grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-gold uppercase tracking-[0.3em] text-xs">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">Let's Start the Conversation</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Whether you're buying, selling, or simply exploring options — Helen is here to help.
          </p>
          <div className="space-y-6">
            <a href="tel:778-889-6084" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-md gradient-gold flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-ink" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Cell</p>
                <p className="text-lg font-medium group-hover:text-gold transition-smooth">778-889-6084</p>
                <p className="text-xs text-muted-foreground">Office: 604-999-8882</p>
              </div>
            </a>
            <a href="mailto:sold@helenlam.ca" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-md gradient-gold flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-ink" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-lg font-medium group-hover:text-gold transition-smooth">sold@helenlam.ca</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md gradient-gold flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-ink" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Office</p>
                <p className="text-lg font-medium">#215-8600 Cambie Rd</p>
                <p className="text-sm text-muted-foreground">Richmond, BC V6X 4J8</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg space-y-4">
          <h3 className="font-display text-2xl mb-2">Send a Message</h3>
          <input name="name" placeholder="Name" required maxLength={100}
            className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold" />
          <input name="email" type="email" placeholder="Email" required maxLength={255}
            className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold" />
          <textarea name="message" placeholder="How can Helen help?" required rows={5} maxLength={1000}
            className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
          <button type="submit" className="w-full bg-ink text-white font-semibold py-4 rounded-md hover:opacity-90 transition-smooth">
            Send Message
          </button>
          {status === "success" && <p className="text-sm text-green-700">Message sent — Helen will respond shortly.</p>}
          {status === "error" && <p className="text-sm text-destructive">{error}</p>}
        </form>
      </div>
    </section>
  );
}
