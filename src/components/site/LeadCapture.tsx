import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
});

export function LeadCapture() {
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
    <section id="lead-capture" className="relative bg-ink text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 40%)" }} />
      <div className="container-luxury relative grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-brand uppercase tracking-[0.3em] text-xs">Insider Access</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">
            Get Exclusive Listings <span className="text-brand">Before They Hit</span> the Market
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            Gain early access to properties, off-market opportunities, and expert insights
            on Vancouver, Richmond, Burnaby, and Coquitlam.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white text-ink p-8 rounded-lg shadow-luxury space-y-4">
          <h3 className="text-2xl mb-2">Unlock Listings</h3>
          <input name="name" placeholder="Full Name" required maxLength={100}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold" />
          <input name="email" type="email" placeholder="Email Address" required maxLength={255}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold" />
          <input name="phone" type="tel" placeholder="Phone (optional)" maxLength={30}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold" />
          <button type="submit" className="w-full gradient-brand text-ink font-semibold py-4 rounded-md hover:opacity-90 transition-smooth">
            Unlock Listings
          </button>
          {status === "success" && <p className="text-sm text-green-700">Thank you — Helen will be in touch within 24 hours.</p>}
          {status === "error" && <p className="text-sm text-destructive">{error}</p>}
          <p className="text-xs text-muted-foreground text-center">Your information is private and never shared.</p>
        </form>
      </div>
    </section>
  );
}
