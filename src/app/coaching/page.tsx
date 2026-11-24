import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Coaching for Small Business Owners | Matt Sprang | Greater Philadelphia",
  description:
    "Coaching for established small business owners who want to grow revenue, profit, and company value without doing more themselves.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Small Business Coaching",
  provider: {
    "@type": "Person",
    name: "Matt Sprang",
    url: "https://mattsprang.com",
  },
  description:
    "Coaching for established small business owners in the Greater Philadelphia region who want to grow revenue, profit, and company value without doing more themselves.",
  areaServed: "Greater Philadelphia Region",
  url: "https://mattsprang.com/coaching",
};

export default function Coaching() {
  return (
    <>
      <Script
        id="schema-coaching"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <section className="texture bg-off-white border-b border-[#e2ddd8] pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
              Coaching
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              Your business should grow without taking more of you.
            </h1>
            <div className="section-rule" />
          </div>
        </div>
      </section>

      {/* Intro + photo */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              Most owners I meet are doing fine on paper. But when I ask,
              &ldquo;How is it really going?&rdquo; — the answer changes. Growth
              has slowed. Or it&apos;s come at the cost of more hours, more
              decisions, and less time for everything else.
            </p>
            <p>
              I coach the owner first. The business runs through you. So
              that&apos;s where we start. Then we work on the business together.
            </p>
          </div>

          <div>
            <Image
              src="/images/matt-outdoor.jpg"
              alt="Matt Sprang, business coach based in the Greater Philadelphia region"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              style={{
                maxHeight: "420px",
                objectFit: "contain",
                objectPosition: "center top",
              }}
            />
            <div
              className="h-1.5 w-full"
              style={{ backgroundColor: "#81a2b6" }}
            />
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-3xl text-charcoal mb-6">
                Who this is for
              </h2>
              <ul className="space-y-3 text-body-text text-sm">
                {[
                  "Owners and founders of established businesses, three or more years in",
                  "Businesses generating up to about $3 million a year",
                  "Owners who want to grow, but not by working more",
                  "Owners who are ready to do the work. I’m the catalyst; the change is yours.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-colonial-blue mt-1.5 flex-shrink-0">
                      &#9670;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-3xl text-charcoal mb-6">
                What we work toward
              </h2>
              <ul className="space-y-3 text-body-text text-sm">
                {[
                  "More revenue",
                  "Greater profit",
                  "Less on your plate, so you can focus on what you love and do best",
                  "A more valuable business: an asset you can sell on your terms someday",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-colonial-blue mt-1.5 flex-shrink-0">
                      &#9670;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              How it works
            </h2>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Discover.",
                body: "Who you are, what drives you, and what you really want.",
              },
              {
                label: "Realign.",
                body: "We reshape the goals for your business around what you want.",
              },
              {
                label: "Execute.",
                body: "Clear focus, a quick early win, and steady progress from there.",
              },
              {
                label: "Sustain.",
                body: "A business that keeps growing without you carrying all of it.",
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

      {/* Getting started */}
      <section className="bg-off-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              Getting started
            </h2>
            <p className="text-body-text leading-relaxed mb-8">
              It starts with a short intake form. I read every submission
              myself, and if it looks like a fit, I&apos;ll reach out to set up
              a discovery call.
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
    </>
  );
}
