import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matt Sprang | Speaker, Leadership Development & Coaching",
  description:
    "Most organizations invest in the leaders they already have. Almost none invest in the ones they are going to need. Matt Sprang works with organizations and individuals to change that.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="texture bg-off-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: copy */}
            <div className="animate-fade-up order-2 md:order-1">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-charcoal mb-5 leading-tight">
                Your people are leaving. And you already know why.
              </h1>
              <p
                className="text-lg font-light mb-8 leading-relaxed"
                style={{ color: "#5a7d96" }}
              >
                Most organizations invest in the leaders they already have.
                Almost none invest in the ones they are going to need. Matt
                Sprang works with organizations and individuals to change that.
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
                  href="/leadership-development"
                  className="group border border-[#81a2b6] bg-white p-5 flex items-center justify-between hover:border-colonial-blue transition-colors duration-200"
                  style={{ borderTopWidth: "3px", borderTopColor: "#81a2b6" }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-colonial-blue mb-1 font-semibold">
                      Leadership Development
                    </p>
                    <p className="font-serif text-charcoal text-lg leading-snug">
                      Leadership Development Programs
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
                    alt="Matt Sprang, speaker and leadership development, Greater Philadelphia region"
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
              "Built $250K to $1.2M, sold for seven figures",
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
              Matt Sprang spent 16 years as the President and CEO of Greater
              Philadelphia Aquatic Enterprises. He built the organization from
              $250,000 in top-line revenue to $1.2 million, led a staff of 45
              employees, survived an $800,000 construction debt, and sold the
              business for a seven-figure sum in 2024.
            </p>
            <p>
              Before that, and during it, he spent 25 years coaching young
              athletes in their most formative years. He learned how to build
              commitment, develop discipline, and convince a 16-year-old that
              getting into a cold pool at 5 a.m. was worth doing. That is the
              same work, applied to organizations.
            </p>
            <p>
              He has facilitated more than 200 events over six years, with an
              average participant rating of 9.4 and a Net Promoter Score of 85.
              He is a trained facilitator in the XChange Approach, a methodology
              rooted in Appreciative Inquiry.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-block bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#3d3d3b] transition-colors duration-200"
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
