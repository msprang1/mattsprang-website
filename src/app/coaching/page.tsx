import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-on-one coaching for leaders who are ready to do the work. Matt works with young professionals growing into leadership and with business owners navigating transitions.",
};

export default function Coaching() {
  return (
    <>
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
              alt="Matt Sprang, coach"
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
                  during their most formative years. Sixteen years as a CEO
                  leading a staff of 45, through daily operations and through
                  genuine crisis.
                </p>
                <p>
                  More than 200 facilitated events. A 9.4 average participant
                  rating. Formal training in the XChange Approach, rooted in
                  Appreciative Inquiry.
                </p>
                <p>
                  He is not coaching from theory. He is coaching from a specific
                  set of days in a specific life.
                </p>
              </div>
            </div>
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
