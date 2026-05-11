import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "About Matt Sprang | Speaker, Leadership Development & Coaching | Greater Philadelphia",
  description:
    "Matt Sprang is a leadership development professional, speaker, and coach based in the Greater Philadelphia region. Former Owner and CEO. 25 years developing young leaders. Seven-figure exit in 2024.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mattsprang.com/#person",
  name: "Matt Sprang",
  jobTitle: "Leadership Development Professional, Speaker & Coach",
  description:
    "Matt Sprang is a leadership development professional, speaker, and coach based in Southern New Jersey, serving the Greater Philadelphia region. He works with organizations that employ Millennial and Gen Z workers and want to develop them into the leaders the organization is going to need.",
  url: "https://mattsprang.com",
  email: "matt@mattsprang.com",
  telephone: "+16098207946",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NJ",
    addressCountry: "US",
    description: "Southern New Jersey, Greater Philadelphia Region",
  },
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
    "Business Growth",
    "Organizational Development",
  ],
  alumniOf: [
    {
      "@type": "Organization",
      name: "Greater Philadelphia Aquatic Enterprises",
      description: "Founder, Owner and CEO, 2008–2024",
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
                The short version: he built something, nearly lost it, and
                learned what it actually takes to develop people who stay.
              </h1>
              <div className="section-rule" />
              <p className="text-lg text-body-text leading-relaxed">
                Matt Sprang is a leadership development professional, speaker,
                and coach based in Southern New Jersey, serving the Greater
                Philadelphia region and beyond.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/matt-lifestyle-1.jpg"
                alt="Matt Sprang, leadership development professional and speaker, Greater Philadelphia region"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: "520px",
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

      {/* The story */}
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
              In 2008, at 30 years old, Matt Sprang founded Greater Philadelphia
              Aquatic Enterprises, starting with $50,000 in top-line revenue and
              a conviction that the business could become something real.
            </p>
            <p>
              For the next 16 years, he built it; by the time he sold it in 2024
              for a seven-figure sum, the organization had grown to $1.2 million
              in revenue and 45 employees. Along the way, he survived an
              $800,000 construction debt that came close to ending everything,
              and what he learned inside that crisis changed how he thinks about
              organizations, pressure, and the people who hold things together
              when things get hard.
            </p>
            <p>
              Before any of that, and during all of it, Matt spent 25 years
              coaching young athletes in their most formative years, convincing
              teenagers to get into a cold pool at 5 a.m. three times a week
              before school, helping them set goals that felt impossible and
              build the habits to reach them, and learning how to develop
              commitment, not just demand it.
            </p>
            <p>
              That is the same work he does now, applied to organizations; the
              athletes are different and so is the pool, but the question he is
              always asking is the same: what does this person actually need in
              order to become who they are capable of being?
            </p>
          </div>
        </div>
      </section>

      {/* Why this work */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-3xl text-charcoal mb-6">
                Why this work
              </h2>
            </div>
            <div className="space-y-5 text-body-text leading-relaxed">
              <p>
                Most leadership development money goes to the people who already
                have the title, while the people who are going to run the
                organization in ten years sit in mid-level roles right now,
                mostly figuring it out alone.
              </p>
              <p>
                Matt has been on both sides of that; as a young leader without
                much guidance and later as an Owner and CEO who had to figure
                out how to develop 45 people while running a real business with
                real debt and real pressure, he knows what gets lost when no one
                invests in the middle of the org chart, and what becomes
                possible when someone does.
              </p>
              <p>
                He spent 25 years learning how to develop people who do not yet
                know what they are capable of; that is not a generic coaching
                skill but a specific one, built over a long time in conditions
                that demanded it.
              </p>
            </div>
            <div>
              <Image
                src="/images/matt-hiking.jpg"
                alt="Matt Sprang"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: "400px",
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

      {/* What makes it different */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              What makes it different
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              Matt is a trained facilitator in the XChange Approach, a
              methodology rooted in Appreciative Inquiry, drawing the
              intelligence out of a room rather than depositing it from the
              front; the work is not a lecture or a curriculum but a process of
              helping people discover what they already know and build on it.
            </p>
            <p>
              He has facilitated more than 200 events over six years, with an
              average participant rating of 9.4 and a Net Promoter Score of 85,
              and has spoken at Rowan University, Front Row Dads Live, and
              organizations across the Greater Philadelphia region.
            </p>
            <p>
              He is not coaching or consulting from theory; every framework he
              uses has been tested in a real organization, under real pressure,
              with real stakes, and that is what he brings into every room.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="bg-off-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-colonial-blue mb-8 font-semibold">
            Credentials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "25 years developing young leaders directly",
              "200+ facilitated events, 9.4 average rating, NPS of 85",
              "Trained facilitator, XChange Approach (Appreciative Inquiry)",
              "Founder, Owner and CEO, Greater Philadelphia Aquatic Enterprises",
              "Founded and grew from $50K to $1.2M over 16 years",
              "Seven-figure business exit, 2024",
              "Featured speaker, Front Row Dads Live (December 2024)",
              "Keynote speaker, Rowan University Seniors of Distinction (April 2026)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-colonial-blue mt-1.5 flex-shrink-0">
                  &#9670;
                </span>
                <p className="text-body-text text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curiosity close */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <div className="section-rule" />
          <p className="font-serif text-2xl text-charcoal mb-6 leading-snug">
            He spent 16 years building something from $50,000 to $1.2 million,
            survived a crisis that should have ended it, and then sold it; what
            he learned in those years about developing people is not in any book
            he has ever read.
          </p>
          <p className="text-body-text leading-relaxed mb-8">
            Read how Matt approaches the work, or start with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/talent-development"
              className="btn-primary inline-block bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#3d3d3b] transition-colors duration-200"
            >
              Talent development programs
            </Link>
            <Link
              href="/coaching"
              className="inline-block text-sm tracking-wide px-8 py-3.5 border border-[#c8c3bc] text-charcoal hover:border-colonial-blue hover:text-colonial-blue transition-colors duration-200"
            >
              One-on-one coaching
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
