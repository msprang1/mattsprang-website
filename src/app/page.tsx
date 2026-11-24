import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Matt Sprang | Coaching for Small Business Owners | Greater Philadelphia",
  description:
    "I coach small business owners to grow revenue, profit, and company value — without giving the business more of themselves. Founder. Built to $1.2M and sold for seven figures in 2024.",
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
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mattsprang.com/#service",
      name: "Matt Sprang Coaching",
      description:
        "Coaching for small business owners in the Greater Philadelphia region who want to grow revenue, profit, and company value without giving the business more of themselves.",
      url: "https://mattsprang.com",
      email: "matt@mattsprang.com",
      areaServed: [
        {
          "@type": "Place",
          name: "Greater Philadelphia Region",
        },
      ],
      founder: { "@id": "https://mattsprang.com/#person" },
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

      {/* Hero — dark split layout */}
      <section className="relative min-h-screen bg-[#111110] flex items-center overflow-hidden">
        {/* Photo — right side, ~30% of viewport width */}
        <div className="absolute right-0 top-0 bottom-0 w-[30%]">
          <Image
            src="/images/matt-hero.jpg"
            alt="Matt Sprang, business coach"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 15%" }}
            priority
          />
          {/* Blend left edge into dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/30 to-transparent" />
        </div>

        {/* Hero content — left side */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16 md:pb-24">
          <p className="text-colonial-blue uppercase tracking-widest text-xs md:text-sm mb-4 font-semibold">
            Small Business Coaching · Greater Philadelphia
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6 max-w-2xl">
            Grow your business.
            <br />
            Not your hours.
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            I coach small business owners to grow revenue, profit, and company
            value — while taking work off your plate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-charcoal text-sm font-semibold tracking-wide px-8 py-4 hover:bg-off-white transition-colors duration-200"
          >
            Start a conversation &rarr;
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "$1.2M", label: "Revenue at peak" },
              { number: "47", label: "Employees at exit" },
              { number: "7-fig", label: "Sold in 2024" },
              { number: "25 yrs", label: "Coaching experience" },
            ].map(({ number, label }) => (
              <div key={label} className="text-center md:text-left">
                <p className="font-serif text-4xl md:text-5xl text-white mb-1">
                  {number}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You built something real — full-width dark */}
      <section className="bg-[#1a1a18] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-colonial-blue uppercase tracking-widest text-xs mb-8">
            Sound familiar?
          </p>
          <blockquote className="font-serif text-3xl md:text-5xl text-white leading-tight mb-8">
            &ldquo;I built something real. So why does it still run through me
            for every single decision?&rdquo;
          </blockquote>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            You&apos;ve been in business long enough to know the model works.
            Customers are there. The team is there. But growth stopped meaning
            freedom a long time ago.
          </p>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mt-5">
            That&apos;s the problem I fix.
          </p>
        </div>
      </section>

      {/* What growth looks like */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="section-rule" />
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              What growth looks like
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "More revenue.",
                body: "You grow the top line without throwing more people or hours at the problem.",
              },
              {
                label: "Greater profit.",
                body: "Revenue is vanity. Profit is what you actually keep.",
              },
              {
                label: "Less on your plate.",
                body: "You spend your time on what you love and do best — whether that&apos;s sales, strategy, or the beach.",
              },
              {
                label: "A business worth more.",
                body: "An asset you could sell on your terms someday, not for nickels on the dollar.",
              },
            ].map(({ label, body }) => (
              <div
                key={label}
                className="bg-white border border-[#e2ddd8] p-8"
                style={{ borderTopWidth: "3px", borderTopColor: "#81a2b6" }}
              >
                <p className="font-serif text-xl text-charcoal mb-3">{label}</p>
                <p
                  className="text-body-text leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work together */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                How we work together
              </h2>
              <p className="text-body-text leading-relaxed text-lg">
                Your business goals run through you. So we start there.
              </p>
            </div>
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  label: "Discover.",
                  body: "Who you are, what drives you, and what you really want for your business and your life.",
                },
                {
                  number: "02",
                  label: "Realign.",
                  body: "We reshape the goals around what you actually want — not what you think you should want.",
                },
                {
                  number: "03",
                  label: "Execute.",
                  body: "We go after those goals with clear focus. Start with a quick win. Stack from there.",
                },
                {
                  number: "04",
                  label: "Sustain.",
                  body: "We build the business to keep growing without you carrying all of it.",
                },
              ].map(({ number, label, body }) => (
                <div key={label} className="flex items-start gap-6">
                  <span className="font-serif text-3xl text-colonial-blue/40 leading-none flex-shrink-0 mt-1">
                    {number}
                  </span>
                  <p className="text-body-text leading-relaxed">
                    <strong className="text-charcoal font-semibold">
                      {label}
                    </strong>{" "}
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who I work with */}
      <section className="bg-charcoal py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-colonial-blue uppercase tracking-widest text-xs mb-6">
              Is this you?
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
              You run an established business. You&apos;re doing fine. You want
              to do better.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
              I work with owners and founders three or more years in, generating
              up to about $3M a year, who are ready to do the work. Primarily in
              the Greater Philadelphia region.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-white text-white text-sm font-semibold tracking-wide px-8 py-4 hover:bg-white hover:text-charcoal transition-colors duration-200"
            >
              Let&apos;s talk &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About me short */}
      <section className="bg-off-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                I&apos;ve been where you are.
              </h2>
            </div>
            <div className="space-y-5 text-body-text leading-relaxed">
              <p>
                I&apos;m Matt Sprang. I founded a business from zero, grew it to
                $1.2M in revenue and 47 employees, survived an $800K
                construction debt that nearly ended it, and sold it for seven
                figures in 2024.
              </p>
              <p>
                Now I help owners build the kind of business I wish I&apos;d
                built sooner.
              </p>
              <Link
                href="/about"
                className="inline-block text-sm tracking-wide text-colonial-blue hover:text-colonial-dark transition-colors duration-200 font-semibold"
              >
                More about me &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
