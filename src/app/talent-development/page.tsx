import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Talent Development | Matt Sprang | Millennial & Gen Z Leadership Programs | Philadelphia",
  description:
    "Matt Sprang designs and facilitates talent development programs for organizations in the Greater Philadelphia region that want to build their next generation of leaders before they lose them.",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Talent Development Programs",
      provider: {
        "@type": "Person",
        name: "Matt Sprang",
        url: "https://mattsprang.com",
      },
      description:
        "Matt Sprang designs and facilitates talent development programs for organizations that employ Millennial and Gen Z workers and want to develop them into the leaders the organization is going to need. Based in the Greater Philadelphia region.",
      areaServed: "Greater Philadelphia Region",
      url: "https://mattsprang.com/talent-development",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a talent development engagement with Matt Sprang look like?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Engagements typically begin with a diagnostic conversation to understand the organization and the people being developed. From there, Matt designs and facilitates a structured process with the team or cohort, using the XChange Approach rooted in Appreciative Inquiry. The engagement closes with a set of commitments the group generates themselves — not assignments, but intentions they chose.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Matt Sprang's talent development work for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Matt works with organizations that employ Millennial and Gen Z workers — typically in the Greater Philadelphia region — who want to invest in developing those employees into future leaders before they lose them. Entry points include companies experiencing turnover they cannot explain, organizations with no clear succession plan, and leaders who know their bench is thin.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from a one-day workshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some organizations do work with Matt for a single day. Others build ongoing programs over weeks or months. The difference is that the work is never a pre-packaged curriculum dropped into your organization. It is designed around where you actually are, who your people are, and what the organization genuinely needs. The methodology is consistent. The shape is not.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a talent development engagement typically run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Engagements range from a single focused session to multi-month programs. This starts with a conversation about where the organization is and what would actually move the needle for them.",
          },
        },
      ],
    },
  ],
};

export default function TalentDevelopment() {
  return (
    <>
      <Script
        id="schema-talent-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <section className="texture bg-off-white border-b border-[#e2ddd8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
                Talent Development
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Your next generation of leaders is already in your building.
              </h1>
              <div className="section-rule" />
              <p className="text-lg text-body-text leading-relaxed">
                Most organizations spend their leadership development budget at
                the top. The people who will actually need to lead in five years
                are sitting in mid-level roles right now, mostly on their own.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/matt-running.jpg"
                alt="Matt Sprang, talent development facilitator, Greater Philadelphia region"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
                style={{
                  aspectRatio: "1/1",
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

      {/* The Problem */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              The problem
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              Companies are losing their best younger associates. Not because
              the work is bad or the pay is wrong. Because no one is investing
              in them. The leadership development budget flows up. The C-suite
              gets the coaches and the retreats. Younger associates get an
              onboarding checklist and a manager who is already stretched thin.
            </p>
            <p>
              Three things are happening at once. The pipeline is not being
              built. Succession is not a future concern; it is an active
              problem. Young talent is walking, and the reasons are rarely
              compensation. They are belonging, growth, and the feeling that
              someone sees their potential and is willing to invest in it.
            </p>
            <p>
              What does it actually cost to lose a good 28-year-old? Not just
              the recruiting fee. The institutional knowledge. The client
              relationships. The two years it takes to rebuild what leaves with
              them. Matt has a number for that — and it is larger than most
              organizations want to admit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Matt */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-rule" />
              <h2 className="font-serif text-3xl text-charcoal mb-6">
                Why Matt
              </h2>
              <div className="space-y-5 text-body-text leading-relaxed">
                <p>
                  Matt spent 25 years working directly with younger associates
                  during their most formative years. He did not do it by making
                  things easy. He convinced teenagers to get into a cold pool
                  three times a week at 5 a.m. before school. He helped them set
                  goals that felt impossible and build the process to reach
                  them.
                </p>
                <p>
                  He then spent 16 years as an Owner and CEO leading a staff of
                  45 employees through daily operations and through genuine
                  crisis, knowing firsthand what it costs to lose good young
                  people and what it takes to build the kind of environment
                  where they stay and grow.
                </p>
                <p>
                  He is a trained facilitator with more than 200 events, a 9.4
                  average rating, and a Net Promoter Score of 85, and his
                  methodology is built on the XChange Approach, rooted in
                  Appreciative Inquiry; he draws the intelligence out of a room
                  rather than dispensing it from the front.
                </p>
                <p>
                  <Link
                    href="/about"
                    className="text-colonial-blue hover:text-colonial-dark transition-colors duration-200"
                  >
                    Read more about Matt&apos;s background
                  </Link>{" "}
                  and what makes this work different.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/matt-mountain2.jpg"
                alt="Matt Sprang, talent development facilitator"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: "480px",
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

      {/* Methodology */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="section-rule" />
        <h2 className="font-serif text-3xl text-charcoal mb-10">
          The methodology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Strengths-based",
              body: "The work starts with what someone already has. People build on strength faster and more sustainably than they overcome deficit.",
            },
            {
              title: "Group facilitation",
              body: "Matt draws out the collective intelligence in the room rather than depositing knowledge into it. The Appreciative Inquiry approach asks what is working, what is possible, and what conditions produce the best results.",
            },
            {
              title: "Active listening",
              body: "The ability to hold space, to ask one more question instead of offering one more answer, is central to how the work gets done.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="border-t-2 pt-6"
              style={{ borderTopColor: "#81a2b6" }}
            >
              <h3 className="font-serif text-lg text-charcoal mb-3">{title}</h3>
              <p className="text-body-text text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What an engagement looks like */}
      <section className="bg-off-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              What an engagement looks like
            </h2>
            <div className="space-y-5 text-body-text leading-relaxed">
              <p>
                Engagements typically begin with a diagnostic conversation to
                understand the organization and the people being developed. From
                there, Matt designs and facilitates a structured process with
                the team or cohort — drawing out what is working, what is
                possible, and what the group can commit to together. The
                engagement closes with a set of commitments the group generates
                themselves. Not assignments. Intentions they chose.
              </p>
              <p>
                Some organizations work with Matt for a single focused day.
                Others build ongoing programs over several months. The work is
                designed around where you actually are — not a pre-packaged
                curriculum. The methodology is consistent. The shape is not.
              </p>
              <p>
                The methodology Matt uses does not start with a curriculum. It
                starts with a question. Most organizations are surprised by what
                comes up when someone asks the right one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="section-rule" />
        <h2 className="font-serif text-3xl text-charcoal mb-10">
          Common questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "Who is this for?",
              a: "Organizations that employ Millennial and Gen Z workers who want to invest in developing those employees into future leaders before they lose them. Common entry points: companies experiencing turnover they cannot explain, organizations with no clear succession plan, and leaders who know their bench is thin.",
            },
            {
              q: "How is this different from a one-day workshop?",
              a: "Some organizations do work with Matt for a single day. Others build ongoing programs over weeks or months. What makes it different is that this is never a pre-packaged curriculum. It is designed around who your people actually are and what the organization genuinely needs.",
            },
            {
              q: "How long does an engagement typically run?",
              a: "Engagements range from a single focused session to multi-month programs. It starts with a conversation about where the organization is and what would actually move the needle.",
            },
            {
              q: "What does the facilitation process look like?",
              a: "Matt uses the XChange Approach, rooted in Appreciative Inquiry. Rather than depositing content from the front of the room, he draws the intelligence out of the group. The result is a set of commitments the participants generated themselves — which means they follow through.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-t border-[#e2ddd8] pt-6">
              <h3 className="font-serif text-lg text-charcoal mb-3">{q}</h3>
              <p className="text-body-text text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">
            Start the conversation.
          </h2>
          <p className="text-light-gray mb-8 leading-relaxed">
            The work is built around what your organization actually needs.
            Let&apos;s talk about where you are and what that looks like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-block bg-colonial-blue text-white text-sm tracking-wide px-8 py-3.5 hover:bg-[#6d8fa3] transition-colors duration-200"
            >
              Get in touch
            </Link>
            <Link
              href="/about"
              className="inline-block text-sm tracking-wide px-8 py-3.5 border border-[#555] text-light-gray hover:border-colonial-blue hover:text-white transition-colors duration-200"
            >
              Read more about Matt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
