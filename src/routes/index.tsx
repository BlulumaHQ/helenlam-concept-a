import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { LeadCapture } from "@/components/site/LeadCapture";
import { Services } from "@/components/site/Services";
import { Listings } from "@/components/site/Listings";
import { Trust } from "@/components/site/Trust";
import { Process } from "@/components/site/Process";
import { SellerHook } from "@/components/site/SellerHook";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helen Lam | Vancouver & Richmond Real Estate — Buy, Sell, Top Dollar" },
      { name: "description", content: "Find the right home or sell for maximum value in Vancouver & Richmond with Helen Lam. Personalized strategy, expert guidance, results you can trust." },
      { property: "og:title", content: "Helen Lam | Vancouver Real Estate Professional" },
      { property: "og:description", content: "Exclusive listings, expert negotiation, and top-dollar results across Vancouver, Richmond, Burnaby and Coquitlam." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <LeadCapture />
        <Services />
        <Listings />
        <Trust />
        <Process />
        <SellerHook />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
