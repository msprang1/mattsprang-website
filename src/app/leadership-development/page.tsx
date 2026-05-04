import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership Development",
  description:
    "Most organizations spend their leadership development budget at the top. The people who will actually need to lead in five years are sitting in mid-level roles right now, mostly on their own.",
};

export default function LeadershipDevelopment() {
  return (
    <>
      {/* Hero */}
      <section className="texture bg-off-white border-b border-[#e2ddd8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
                Leadership Development
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
                src="/images/matt-speaking-1.jpg"
                alt="Matt Sprang facilitating a leadership development session"
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
              someone sees their potential and is willing to invest in it. And
              the broader culture is doing a poor job of producing the next
              generation of leaders.
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
                  He then spent 16 years as a CEO leading a staff of 45
                  employees through daily operations and through genuine crisis.
                  He knows what it costs to lose good young people, and he knows
                  what it takes to build the kind of environment where they stay
                  and grow.
                </p>
                <p>
                  He is a trained facilitator with more than 200 events, a 9.4
                  average rating, and a Net Promoter Score of 85. His
                  methodology is built on the XChange Approach, rooted in
                  Appreciative Inquiry. He draws the intelligence out of a room
                  rather than dispensing it from the front.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/images/matt-lifestyle-1.jpg"
                alt="Matt Sprang"
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
            <p className="text-body-text leading-relaxed">
              Each program is built around the specific needs of the
              organization. The methodology is consistent. The shape is not.
              This starts with a conversation.
            </p>
          </div>
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
