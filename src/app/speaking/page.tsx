import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Speaking | Matt Sprang | Leadership & Talent Development Speaker | Philadelphia",
  description:
    "Matt Sprang speaks to chambers of commerce, associations, and corporate audiences about the real cost of underdeveloped Millennial and Gen Z talent. Greater Philadelphia region and national bookings.",
};

export default function Speaking() {
  return (
    <>
      {/* Hero */}
      <section className="texture bg-off-white border-b border-[#e2ddd8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
                Speaking
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Your Business&apos;s Greatest Expense
              </h1>
              <div className="section-rule" />
              <p className="text-lg text-body-text leading-relaxed">
                It is not payroll. It is not overhead. It is the cost of losing
                good people and never figuring out why they left.
              </p>
            </div>

            {/* Hero photo */}
            <div className="relative">
              <Image
                src="/images/matt-speaking-1.jpg"
                alt="Matt Sprang speaking to a business audience in the Greater Philadelphia region"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  objectPosition: "center",
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

      {/* What Matt talks about */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              What Matt talks about
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              Matt speaks to business groups, associations, chambers of
              commerce, and corporate audiences about the real cost of
              underdeveloped talent. His talks are built on 25 years of working
              directly with younger associates, 16 years of running a real
              business, and more than 200 facilitated events.
            </p>
            <p>
              He does not lecture. He does not use a slide deck full of bullet
              points. He tells the truth about what it costs to ignore the
              people who are going to run your organization someday, and he
              gives audiences a concrete way to start thinking differently about
              it. Most audiences have not experienced this kind of conversation
              in a business setting, and the effect tends to linger.
            </p>
            <p>
              Matt speaks across the Greater Philadelphia region and is
              available for national bookings by arrangement. Learn more about
              his approach to{" "}
              <Link
                href="/talent-development"
                className="text-colonial-blue hover:text-colonial-dark transition-colors duration-200"
              >
                talent development programs
              </Link>{" "}
              for organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Signature talk */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-3xl text-charcoal mb-6">
                The signature talk
              </h2>
            </div>
            <div className="space-y-5 text-body-text leading-relaxed">
              <p className="font-serif text-xl text-charcoal">
                The Cost of Ignoring Your Bench
              </p>
              <p>
                What happens to organizations that invest only in the leaders
                they already have. This talk is built for chambers of commerce,
                associations, and corporate all-hands events and runs
                45&ndash;60 minutes.
              </p>
              <p>
                Audiences leave with a clear picture of why young talent leaves,
                a different way to think about leadership development that
                applies at any org size, and a specific, honest self-assessment
                of where their organization actually stands. Matt does not give
                people a framework. He gives them a question they have not been
                able to stop thinking about.
              </p>
              <p className="text-sm text-light-gray italic">
                Custom talks built around your audience&apos;s specific context
                are also available. Start with a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What audiences leave with */}
      <section className="bg-off-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                body: "A clear picture of why young talent leaves and what it actually costs.",
              },
              {
                num: "02",
                body: "A different way to think about leadership development that applies at any org size.",
              },
              {
                num: "03",
                body: "A specific, honest self-assessment of where their organization stands.",
              },
            ].map(({ num, body }) => (
              <div
                key={num}
                className="border border-[#e2ddd8] bg-white p-8 flex flex-col"
                style={{ borderTopWidth: "3px", borderTopColor: "#81a2b6" }}
              >
                <p
                  className="font-serif text-3xl font-bold mb-4"
                  style={{ color: "#d4e4ed" }}
                >
                  {num}
                </p>
                <p className="text-body-text text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-colonial-blue mt-6 font-semibold">
            What audiences leave with
          </p>
        </div>
      </section>

      {/* Speaking photos gallery */}
      <section className="bg-off-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-colonial-blue mb-8 font-semibold">
            On stage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "/images/matt-speaking-2.jpg",
              "/images/matt-speaking-3.jpg",
              "/images/matt-speaking-4.jpg",
            ].map((src, i) => (
              <div key={i} className="relative">
                <Image
                  src={src}
                  alt="Matt Sprang speaking at an event"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: "#81a2b6" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who books Matt */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-2xl text-charcoal mb-5">
                Who books Matt
              </h2>
              <p className="text-body-text text-sm leading-relaxed mb-6">
                Chambers of commerce, industry associations, corporate all-hands
                events, leadership conferences, and business groups in the
                Greater Philadelphia region. National bookings by arrangement.
              </p>
            </div>

            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-2xl text-charcoal mb-5">
                Credentials
              </h2>
              <ul className="space-y-2.5 text-sm text-body-text">
                {[
                  "25 years working directly with younger associates",
                  "200+ events facilitated",
                  "9.4 average participant rating",
                  "Net Promoter Score of 85",
                  "Trained facilitator, XChange Approach",
                  "Featured speaker, Front Row Dads Live (December 2024)",
                  "Keynote speaker, Rowan University Seniors of Distinction (April 2026)",
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

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">
            Ready to bring Matt to your event?
          </h2>
          <p className="text-light-gray mb-8 leading-relaxed">
            Book a conversation about what would make it land for your audience.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block bg-colonial-blue text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#6d8fa3] transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
