import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Matt Sprang | Coaching for Small Business Owners | Greater Philadelphia",
  description:
    "I coach established small business owners to grow revenue, profit, and the value of their company without giving the business more of themselves. Founder. Built a business to $1.2M and sold it in 2024.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mattsprang.com/#person",
      name: "Matt Sprang",
      jobTitle: "Business Coach",
      url: "https://mattsprang.com",
      email: "matt@mattsprang.com",
      sameAs: [
        "https://www.linkedin.com/in/matt-sprang/",
        "https://matthewsprang.substack.com",
        "https://www.instagram.com/matt_sprang_coaching/",
        "https://www.youtube.com/@msprang",
      ],
      knowsAbout: [
        "Small Business Coaching",
        "Business Growth",
        "Revenue Growth",
        "Business Exit",
        "Entrepreneurship",
        "Appreciative Inquiry",
        "XChange Approach",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mattsprang.com/#service",
      name: "Matt Sprang Coaching",
      description:
        "Coaching for established small business owners in the Greater Philadelphia region who want to grow revenue, profit, and the value of their company without giving the business more of themselves.",
      url: "https://mattsprang.com",
      email: "matt@mattsprang.com",
      areaServed: [
        {
          "@type": "Place",
          name: "Greater Philadelphia Region",
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
            itemOffered: {
              "@type": "Service",
              name: "Small Business Coaching",
            },
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
                Grow your business without giving it more of you.
              </h1>
              <p className="text-lg font-light text-body-text mb-8 leading-relaxed">
                I coach established small business owners in the Greater
                Philadelphia region to grow revenue, profit, and the value of
                their company, while taking work off their plate.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#3d3d3b] transition-colors duration-200"
              >
                Start a conversation &rarr;
              </Link>
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
                    alt="Matt Sprang, business coach, Greater Philadelphia region"
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover"
                    priority
                    style={{
                      maxHeight: "580px",
                      objectFit: "cover",
                      objectPosition: "top center",
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

      {/* Stats strip */}
      <section className="credibility-strip bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
            {[
              "Founder: built to $1.2M and 47 employees",
              "Sold for seven figures in 2024",
              "25 years coaching athletes",
              "200+ facilitated events, 9.3 average rating",
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

      {/* You built something real */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              You built something real.
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              You&apos;ve been in business long enough to know the model works.
              The customers are there. The team is there. But somewhere along
              the way, the business started running through you. Every decision.
              Every problem. Every next step.
            </p>
            <p>
              Growing it shouldn&apos;t mean giving it more of your hours, your
              weekends, or your family&apos;s time. I work with owners who want
              more from their business, but not at any cost.
            </p>
          </div>
        </div>
      </section>

      {/* What growth looks like */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-rule" />
          <h2 className="font-serif text-3xl text-charcoal mb-10">
            What growth looks like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "More revenue.", body: null },
              { label: "Greater profit.", body: null },
              {
                label: "Less on your plate.",
                body: "You spend your time on what you love and do best, whether that’s sales, systems, or the beach.",
              },
              {
                label: "A business worth more.",
                body: "An asset you could sell on your terms someday, not for nickels on the dollar.",
              },
            ].map(({ label, body }) => (
              <div
                key={label}
                className="border border-[#e2ddd8] bg-off-white p-6"
                style={{ borderTopWidth: "3px", borderTopColor: "#81a2b6" }}
              >
                <p className="font-semibold text-charcoal mb-1">{label}</p>
                {body && (
                  <p className="text-body-text text-sm leading-relaxed">
                    {body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work together */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              How we work together
            </h2>
            <p className="text-body-text leading-relaxed">
              Your business goals run through you. So we start with you.
            </p>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Discover.",
                body: "Who you are, what drives you, and what you really want for your business and your life.",
              },
              {
                label: "Realign.",
                body: "We reshape the goals for your business around what you actually want.",
              },
              {
                label: "Execute.",
                body: "We go after those goals with clear focus, starting with a quick win and stacking from there.",
              },
              {
                label: "Sustain.",
                body: "We build the business to keep growing without you carrying all of it.",
              },
            ].map(({ label, body }) => (
              <div key={label} className="flex items-start gap-4">
                <span
                  className="text-colonial-blue mt-1.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  &#9670;
                </span>
                <p className="text-body-text leading-relaxed">
                  <strong className="text-charcoal">{label}</strong> {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I work with */}
      <section className="bg-off-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              Who I work with
            </h2>
            <p className="text-body-text leading-relaxed mb-8">
              Owners and founders of established businesses, three or more years
              in, generating up to about $3 million a year, who are ready to do
              the work. Primarily in the Greater Philadelphia region.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-block bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#3d3d3b] transition-colors duration-200"
            >
              Start a conversation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About me short */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">About me</h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              I&apos;m Matt Sprang. I founded a business from zero, grew it to
              $1.2 million in revenue and 47 employees, survived an $800,000
              construction debt that nearly ended it, and sold it for seven
              figures in 2024. Now I help owners build the kind of business I
              wish I&apos;d built sooner.
            </p>
            <Link
              href="/about"
              className="inline-block text-sm tracking-wide text-colonial-blue hover:text-colonial-dark transition-colors duration-200"
            >
              More about me &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
