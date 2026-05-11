import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Coaching | Matt Sprang | Leadership Coach for Emerging Leaders & Business Owners | Philadelphia",
  description:
    "One-on-one coaching for emerging leaders in their 20s and 30s and for business owners navigating transitions. Greater Philadelphia region. Strengths-based, direct, built on questions more than answers.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Leadership Coaching",
      provider: {
        "@type": "Person",
        name: "Matt Sprang",
        url: "https://mattsprang.com",
      },
      description:
        "One-on-one coaching for emerging leaders in their 20s and 30s and for business owners navigating transitions. Based in the Greater Philadelphia region. Strengths-based, direct, and built on questions more than answers.",
      areaServed: "Greater Philadelphia Region",
      url: "https://mattsprang.com/coaching",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does coaching with Matt Sprang look like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sessions are typically conducted by phone or video. Engagements usually run three to six months, with sessions every two to three weeks. Every session ends with something the client generated — an intention, an experiment, a commitment. Not an assignment. Something they chose.",
          },
        },
        {
          "@type": "Question",
          name: "Who does Matt coach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Matt works with young professionals, typically in their late 20s and 30s, who are growing into leadership and want to do it with intention. He also works with business owners and executives navigating transitions, bottlenecks, or the gap between where they are and where they want to be.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Matt's coaching different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Matt is not coaching from theory. He spent 25 years developing young leaders directly and 16 years as an Owner and CEO who survived an $800,000 construction debt and grew a business from $50,000 to $1.2 million before selling it for seven figures; that specific set of experiences, including crisis, succession, and letting go, informs every conversation.",
          },
        },
      ],
    },
  ],
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
      <section className="texture bg-off-white border-b border-[#e2ddd8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
              Coaching
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              You already know what needs to change.
            </h1>
            <div className="section-rule" />
            <p className="text-lg text-body-text leading-relaxed">
              One-on-one coaching for leaders who are ready to do the work.
            </p>
          </div>
        </div>
      </section>

      {/* Opening + photo */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              Matt works with young professionals, typically in their late 20s
              and 30s, who are growing into leadership and want to do it with
              intention. He also works with business owners and executives
              navigating transitions, bottlenecks, or the gap between where they
              are and where they want to be.
            </p>
            <p>
              His coaching is strengths-based, direct, and built on questions
              more than answers. Every session ends with something the client
              generated, not something assigned. An intention, an experiment, a
              commitment. Something they chose.
            </p>
            <p>
              He will push back. He will ask the question that has been avoided.
              And he will be in the client&apos;s corner.
            </p>
          </div>

          <div>
            <Image
              src="/images/matt-outdoor.jpg"
              alt="Matt Sprang, leadership coach based in the Greater Philadelphia region"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              style={{
                maxHeight: "420px",
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
            <div
              className="h-1.5 w-full"
              style={{ backgroundColor: "#81a2b6" }}
            />
          </div>
        </div>
      </section>

      {/* Who this is for + What Matt brings */}
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
                  "Young professionals who want to grow as leaders and as people.",
                  "Business owners who are the bottleneck in their own organization.",
                  "Anyone navigating a major transition and tired of figuring it out alone.",
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
                What Matt brings
              </h2>
              <div className="space-y-4 text-body-text text-sm leading-relaxed">
                <p>
                  Twenty-five years working directly with younger associates
                  during their most formative years, and sixteen years as an
                  Owner and CEO leading a staff of 45 through daily operations
                  and genuine crisis, including an $800,000 construction debt
                  that could have ended everything.
                </p>
                <p>
                  More than 200 facilitated events, a 9.4 average participant
                  rating, and formal training in the XChange Approach, rooted in
                  Appreciative Inquiry.
                </p>
                <p>
                  He is not coaching from theory; he is coaching from a specific
                  set of days in a specific life, and that experience, building
                  something from $50,000 to $1.2 million, nearly losing it, and
                  choosing to sell it, informs every conversation he has with a
                  client.
                </p>
                <p>
                  <Link
                    href="/about"
                    className="text-colonial-blue hover:text-colonial-dark transition-colors duration-200"
                  >
                    Read more about Matt&apos;s background
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What coaching looks like */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              What coaching looks like
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              Sessions happen by phone or video, typically every two to three
              weeks. Most engagements run three to six months, though some
              clients work with Matt longer. There is no fixed program.
            </p>
            <p>
              The question Matt asks most often is one most people have never
              been asked directly. It is not complicated. And the answer to it
              tends to change the direction of the work immediately.
            </p>
            <div
              className="border-l-2 pl-6 py-2"
              style={{ borderLeftColor: "#81a2b6" }}
            >
              <p className="text-body-text text-sm leading-relaxed italic">
                This is not accountability check-ins. It is not goal-setting
                templates. It is not a program you complete. It is a specific
                kind of conversation that happens when someone is ready to stop
                circling the same problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-off-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-rule" />
          <h2 className="font-serif text-3xl text-charcoal mb-10">
            Common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What does a typical session look like?",
                a: "Sessions run by phone or video, usually 60 minutes, every two to three weeks. Every session ends with something the client generated — an intention, an experiment, a commitment. Not an assignment. Something they chose.",
              },
              {
                q: "How long is a typical engagement?",
                a: "Most engagements run three to six months. Some clients work with Matt longer. There is no minimum, and there is no program to complete. The work ends when the client is ready for it to end.",
              },
              {
                q: "How is this different from therapy or consulting?",
                a: "Coaching is not therapy. It does not dig into the past to explain the present. It is also not consulting — Matt is not going to tell you what to do. He is going to ask the right questions until you know what you are going to do.",
              },
              {
                q: "Do you work with clients outside Greater Philadelphia?",
                a: "Yes. Most coaching happens by phone or video, so geography is not a constraint. Matt is based in Southern New Jersey and works with clients across the country.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-t border-[#e2ddd8] pt-6">
                <h3 className="font-serif text-lg text-charcoal mb-3">{q}</h3>
                <p className="text-body-text text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">
            This starts with a conversation.
          </h2>
          <p className="text-light-gray mb-8 leading-relaxed">
            No pitch. No pressure.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block bg-colonial-blue text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#6d8fa3] transition-colors duration-200"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>
    </>
  );
}
