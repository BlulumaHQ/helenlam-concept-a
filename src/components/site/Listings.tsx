import { MapPin } from "lucide-react";

const listings = [
  {
    address: "1602 - 620 Cardero Street",
    city: "Vancouver",
    price: "$2,499,900",
    blurb: "The finest '02' residence at The Cardero by Bosa. Elevated 16th-floor home with breathtaking eye-level views of Coal Harbour Marina.",
    img: "https://iss-cdn.myrealpage.com/rfgik2IYEX0EjnumacuFJewP9s2GRP9gKwzVGfYySJc/rs:auto:800:0:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzYvOS83LzEwODIzMjc5Ni9lMTk4YzNhOWMwZTk3MGQ5YTUzOTgyMzkwOTVjNGQxYi5qcGVn",
    tag: "Featured",
  },
  {
    address: "1215 - 8611 Hazelbridge Way",
    city: "Richmond",
    price: "$950,000",
    blurb: "GST PAID! Picasso by Concord Pacific — brand-new 2 bed, 2 bath upper-level home with mountain and courtyard views.",
    img: "https://iss-cdn.myrealpage.com/I8cryiUl9L1RsGXr9m8-Ug_mWRWc3JnJy6s3yLDbWo8/rs:auto:800:0:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzIvMS80LzEwODMxOTQxMi9mMThhYWYwZDEwZjhhZWZjMjExOGRjZjA0YTk2MWZhOC5qcGVn",
    tag: "New",
  },
  {
    address: "1807 - 1188 Pinetree Way",
    city: "Coquitlam",
    price: "$749,000",
    blurb: "Spacious 2 bed, 2 bath corner unit with gorgeous mountain views beyond floor-to-ceiling windows at M Three by Cressey.",
    img: "https://iss-cdn.myrealpage.com/iHr5eYrQOY_YQxHB8U1T4K0O249RS0kZcTcYcmvzSv8/rs:auto:800:0:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzMvNS81LzEwNzY3NjU1My84MDcwNjM0ZmYzYjRjNjQxYmE3NzFjM2YzNTQ0MTEyYS5qcGVn",
    tag: "Featured",
  },
  {
    address: "319 - 4768 Brentwood Drive",
    city: "Burnaby",
    price: "$668,000",
    blurb: "Well-maintained 2 bed, 2 bath at The Harris at Brentwood Gate by Ledingham McAllister. Bright, functional layout.",
    img: "https://iss-cdn.myrealpage.com/LtNU29dGkv4RwGs917wnjJ4WSFvaeR_ghkBj-P3IPgA/rs:auto:800:0:0/g:sm/aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbXJwLWxpc3RpbmdzLzIvNC80LzEwODI4NDQ0Mi82NGVjMmQ3OGI2Zjg1YjVjZmU4ODNjODgzNzUxYjUyNi5qcGVn",
    tag: "New",
  },
];

export function Listings() {
  return (
    <section id="listings" className="section-pad bg-secondary">
      <div className="container-luxury">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand uppercase tracking-eyebrow text-xs">Featured Listings</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Handpicked Homes Across Greater Vancouver</h2>
          </div>
          <a href="#lead-capture" className="text-ink font-semibold border-b border-gold pb-1 hover:text-brand-mid transition-smooth tracking-wide">
            Browse More Listings →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((l) => (
            <article key={l.address} className="group bg-card rounded-sm overflow-hidden shadow-card hover:shadow-luxury transition-smooth">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.address} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" />
                <span className="absolute top-3 left-3 bg-ink text-gold text-[10px] uppercase tracking-eyebrow px-3 py-1 rounded-sm">{l.tag}</span>
                <span className="absolute bottom-3 right-3 bg-gold text-ink font-semibold px-3 py-1 rounded-sm text-sm">{l.price}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl mb-1 leading-tight">{l.address}</h3>
                <p className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-3 w-3" />{l.city}
                </p>
                <p className="text-sm text-foreground/75 line-clamp-3 mb-5 font-light">{l.blurb}</p>
                <a href="#contact" className="text-sm font-semibold text-ink hover:text-brand-mid transition-smooth tracking-wide">View Property →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
