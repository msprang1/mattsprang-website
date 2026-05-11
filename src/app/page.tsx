import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Matt Sprang | Leadership Development, Speaking & Coaching | Greater Philadelphia",
  description:
    "Most organizations invest in the leaders they already have. Almost none invest in the ones they are going to need. Matt Sprang works with organizations in the Greater Philadelphia region to change that. Speaker, facilitator, and coach. 25 years. 200+ events. 9.4 rating.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mattsprang.com/#person",
      name: "Matt Sprang",
      jobTitle: "Leadership Development Professional, Speaker & Coach",
      url: "https://mattsprang.com",
      sameAs: [
        "https://www.linkedin.com/in/matt-sprang/",
        "https://matthewsprang.substack.com",
      ],
      knowsAbout: [
        "Leadership Development",
        "Talent Development",
        "Millennial and Gen Z Workforce",
        "Executive Coaching",
        "Appreciative Inquiry",
        "XChange Approach",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mattsprang.com/#service",
      name: "Matt Sprang",
      description:
        "Matt Sprang is a leadership development professional, speaker, and coach based in Southern New Jersey serving the Greater Philadelphia region. He works with organizations that employ Millennial and Gen Z workers and want to develop them into the leaders the organization is going to need.",
      url: "https://mattsprang.com",
      telephone: "+16098207946",
      email: "matt@mattsprang.com",
      areaServed: [
        {
          "@type": "Place",
          name: "Greater Philadelphia Region",
        },
        {
          "@type": "Place",
          name: "South Jersey",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.9526,
        longitude: -75.1652,
      },
      founder: { "@id": "https://mattsprang.com/#person" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Speaking" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Talent Development Programs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Leadership Coaching" },
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <section className="texture bg-off-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: copy */}
            <div className="animate-fade-up order-2 md:order-1">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-charcoal mb-5 leading-tight">
                Your people are leaving. And you already know why.
              </h1>
              <p className="text-lg font-light text-body-text mb-4 leading-relaxed">
                Organizations spend their development budget at the top, while
                the people who will actually run the place in ten years sit in
                mid-level roles right now, figuring it out on their own; the
                cost of that is not just turnover but the slow erosion of
                everything you built.
              </p>
              <p className="text-base text-body-text mb-8 leading-relaxed">
                That is the problem Matt Sprang spends his time on, based in
                Southern New Jersey and serving the Greater Philadelphia region
                and beyond.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-10">
                <Link
                  href="/speaking"
                  className="group border border-[#e2ddd8] bg-white p-5 flex items-center justify-between hover:border-colonial-blue transition-colors duration-200"
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-colonial-blue mb-1 font-semibold">
                      Speaking
                    </p>
                    <p className="font-serif text-charcoal text-lg leading-snug">
                      Bring Matt to Speak
                    </p>
                  </div>
                  <span className="text-colonial-blue group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </Link>

                <Link
                  href="/talent-development"
                  className="group border border-[#81a2b6] bg-white p-5 flex items-center justify-between hover:border-colonial-blue transition-colors duration-200"
                  style={{ borderTopWidth: "3px", borderTopColor: "#81a2b6" }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-colonial-blue mb-1 font-semibold">
                      Talent Development
                    </p>
                    <p className="font-serif text-charcoal text-lg leading-snug">
                      Talent Development Programs
                    </p>
                  </div>
                  <span className="text-colonial-blue group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </Link>

                <Link
                  href="/coaching"
                  className="group border border-[#e2ddd8] bg-white p-5 flex items-center justify-between hover:border-colonial-blue transition-colors duration-200"
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-colonial-blue mb-1 font-semibold">
                      Coaching
                    </p>
                    <p className="font-serif text-charcoal text-lg leading-snug">
                      One-on-One Coaching
                    </p>
                  </div>
                  <span className="text-colonial-blue group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: photo */}
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative">
                <div
                  className="absolute -top-3 -right-3 w-full h-full"
                  style={{
                    backgroundColor: "#81a2b6",
                    opacity: 0.15,
                    zIndex: 0,
                  }}
                />
                <div className="relative z-10">
                  <Image
                    src="/images/matt-hero.jpg"
                    alt="Matt Sprang, speaker and leadership development professional, Greater Philadelphia region"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover"
                    priority
                    style={{
                      maxHeight: "580px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: "#81a2b6" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="credibility-strip bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
            {[
              "25 years developing young leaders",
              "200+ facilitated events",
              "9.4 average rating",
              "Built $150K to $1.2M, sold for seven figures",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs uppercase tracking-widest text-light-gray text-center"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              About Matt
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              Matt Sprang spent 16 years as the Owner and CEO of Greater
              Philadelphia Aquatic Enterprises; he took over a program
              generating roughly $150,000 in revenue and built it to $1.2
              million, leading a staff of 45 employees, surviving an $800,000
              construction debt, and selling the business for a seven-figure sum
              in 2024.
            </p>
            <p>
              Before that, and during it, he spent 25 years coaching young
              athletes in their most formative years, learning how to build
              commitment, develop discipline, and convince a 16-year-old that
              getting into a cold pool at 5 a.m. was worth doing; that is the
              same work, applied to organizations.
            </p>
            <p>
              He has facilitated more than 200 events over six years, with an
              average participant rating of 9.4 and a Net Promoter Score of 85,
              and is a trained facilitator in the XChange Approach, a
              methodology rooted in Appreciative Inquiry.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="btn-primary inline-block bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#3d3d3b] transition-colors duration-200"
              >
                Read more about Matt
              </Link>
              <Link
                href="/contact"
                className="inline-block text-sm tracking-wide px-8 py-3.5 border border-[#c8c3bc] text-charcoal hover:border-colonial-blue hover:text-colonial-blue transition-colors duration-200"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
