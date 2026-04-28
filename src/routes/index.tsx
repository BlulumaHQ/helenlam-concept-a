import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LeadCapture } from "@/components/site/LeadCapture";
import { Services } from "@/components/site/Services";
import { Listings } from "@/components/site/Listings";
import { Trust } from "@/components/site/Trust";
import { Process } from "@/components/site/Process";
import { SellerHook } from "@/components/site/SellerHook";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Helen Lam | Vancouver & Richmond Real Estate — Buy, Sell, Top Dollar" },
      { name: "description", content: "Find your dream home or sell for top dollar in Vancouver with Helen Lam. Exclusive listings, proven marketing, and personalized service across Greater Vancouver." },
      { property: "og:title", content: "Helen Lam | Vancouver Real Estate Professional" },
      { property: "og:description", content: "Exclusive listings, expert negotiation, and top-dollar results across Vancouver, Richmond, Burnaby and Coquitlam." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" },
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
        <LeadCapture />
        <Services />
        <Listings />
        <Trust />
        <Process />
        <SellerHook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
