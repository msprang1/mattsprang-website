import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "About Matt Sprang | Coach for Small Business Owners | Greater Philadelphia",
  description:
    "Founder who built a business from zero to $1.2M and 47 employees and sold it in 2024. Husband, father of two, and coach to small business owners in the Greater Philadelphia region.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mattsprang.com/#person",
  name: "Matt Sprang",
  jobTitle: "Business Coach",
  description:
    "Founder who built a business from zero to $1.2M and 47 employees and sold it in 2024. Coach to small business owners in the Greater Philadelphia region.",
  url: "https://mattsprang.com",
  email: "matt@mattsprang.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NJ",
    addressCountry: "US",
    description: "Southern New Jersey, Greater Philadelphia Region",
  },
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
    "Athletic Coaching",
  ],
  alumniOf: [
    {
      "@type": "Organization",
      name: "Greater Philadelphia Aquatic Enterprises",
      description: "Founder and CEO, 2008–2024",
    },
    {
      "@type": "EducationalOrganization",
      name: "Temple University",
      description: "M.S.Ed., Sports and Recreation Administration",
    },
    {
      "@type": "EducationalOrganization",
      name: "Rowan University",
      description: "B.A., History",
    },
  ],
};

export default function About() {
  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <section className="texture bg-off-white border-b border-[#e2ddd8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
                About
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                I&apos;ve been the owner everything runs through.
              </h1>
              <div className="section-rule" />
            </div>

            <div className="relative">
              <Image
                src="/images/matt-lifestyle-1.jpg"
                alt="Matt Sprang, business coach, Greater Philadelphia region"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: "520px",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: "#81a2b6" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              The story
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              In 2008, I founded Greater Philadelphia Aquatic Enterprises. Over
              16 years, I grew it from zero to $1.2 million in revenue and 47
              employees, and in 2024 I sold it for seven figures.
            </p>
            <p>
              It wasn&apos;t a straight line. An $800,000 construction debt
              brought us close to bankruptcy, and for two years I tried to
              control everything and carry it alone. What got us through was
              learning to shift from control to influence: trusting my team,
              letting go of decisions that didn&apos;t need me, and focusing on
              the work only I could do.
            </p>
            <p>
              That&apos;s the work I do with owners now. Your business should be
              an asset that serves your life, not a job you can never step away
              from.
            </p>
            <p>
              Before and during all of that, I spent 25 years coaching swimmers,
              some to the highest levels of the sport, learning how to help
              people commit to goals that feel impossible and build the habits
              to reach them.
            </p>
            <p>
              I&apos;m a family man first. I&apos;m married with two children,
              and I work hard to be present for them. I&apos;m also Director of
              Online Events for Front Row Dads.
            </p>
          </div>
        </div>
      </section>

      {/* Photo + credentials */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <Image
                src="/images/matt-hiking.jpg"
                alt="Matt Sprang"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: "#81a2b6" }}
              />
            </div>

            <div className="md:col-span-2">
              <div className="section-rule" />
              <h2 className="font-serif text-3xl text-charcoal mb-8">
                Credentials
              </h2>
              <div className="grid grid-cols-1 gap-y-3">
                {[
                  "Founder, Greater Philadelphia Aquatic Enterprises (2008–2024)",
                  "Grew to $1.2M in revenue and 47 employees; sold for seven figures in 2024",
                  "25 years coaching athletes",
                  "200+ facilitated events, 9.3 average rating, Net Promoter Score of 85",
                  "Trained facilitator, XChange Approach (Appreciative Inquiry)",
                  "Director of Online Events, Front Row Dads",
                  "M.S.Ed., Sports and Recreation Administration, Temple University",
                  "B.A., History, Rowan University",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-colonial-blue mt-1.5 flex-shrink-0">
                      &#9670;
                    </span>
                    <p className="text-body-text text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <div className="section-rule" />
          <Link
            href="/contact"
            className="btn-primary inline-block bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#3d3d3b] transition-colors duration-200"
          >
            Start a conversation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
