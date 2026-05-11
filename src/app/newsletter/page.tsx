"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Edge of Known — Newsletter by Matt Sprang",
  description:
    "The Edge of Known is a newsletter by Matt Sprang on leadership, identity, and business. Published on Substack. Read by business owners, leaders, and people in the middle of something hard.",
  url: "https://mattsprang.com/newsletter",
  author: {
    "@type": "Person",
    name: "Matt Sprang",
    url: "https://mattsprang.com",
  },
};

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-light-accent rounded-sm p-8 text-center max-w-md mx-auto">
        <p className="font-serif text-xl text-charcoal mb-3">You&apos;re in.</p>
        <p className="text-body-text text-sm">
          Check your inbox to confirm your subscription. The next issue of The
          Edge of Known will find its way to you.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 bg-white border border-[#ddd8d2] text-charcoal text-sm focus:outline-none focus:border-colonial-blue transition-colors duration-200"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary bg-charcoal text-white text-sm tracking-wide px-8 py-3 hover:bg-colonial-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 mt-1 sm:col-span-2">{errorMsg}</p>
      )}
    </form>
  );
}

export default function Newsletter() {
  return (
    <>
      <Script
        id="schema-newsletter"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <section className="texture bg-off-white border-b border-[#e2ddd8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
                Newsletter
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Most leadership content tells you what you want to hear. This is
                not that.
              </h1>
              <div className="section-rule" />
              <p className="text-lg text-body-text leading-relaxed mb-8">
                The Edge of Known is read by business owners, leaders, and
                people in the middle of something hard. It does not offer
                frameworks. It does not have five steps. It is a specific
                perspective, offered consistently, by someone who has been
                through enough to have one.
              </p>
              <SubscribeForm />
            </div>

            <div className="relative">
              <Image
                src="/images/matt-phillies.jpg"
                alt="Matt Sprang"
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

      {/* About the newsletter */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-rule" />
            <h2 className="font-serif text-3xl text-charcoal mb-6">
              What it is
            </h2>
          </div>
          <div className="space-y-5 text-body-text leading-relaxed">
            <p>
              The Edge of Known is where Matt Sprang writes about leadership,
              identity, and the specific kind of transition that happens when
              someone starts to outgrow the role they built for themselves.
            </p>
            <p>
              One email, when it is ready. No cadence promises that will make
              you resent it later.
            </p>
            <p className="text-sm text-light-gray italic">
              The most common feedback is that the essays feel like they were
              written specifically for the person reading them.
            </p>
          </div>
        </div>
      </section>

      {/* Recent essays — TODO: fill in with real posts */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-rule" />
          <h2 className="font-serif text-3xl text-charcoal mb-10">
            Recent essays
          </h2>

          {/* TODO: Replace the items below with your actual recent Substack posts.
              For each: update the title, description, and href to the Substack post URL. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Essay title goes here",
                description:
                  "A two-sentence description of what this essay is about and why it matters to the reader. Keep it honest and specific.",
                href: "https://matthewsprang.substack.com",
              },
              {
                title: "Essay title goes here",
                description:
                  "A two-sentence description of what this essay is about and why it matters to the reader. Keep it honest and specific.",
                href: "https://matthewsprang.substack.com",
              },
              {
                title: "Essay title goes here",
                description:
                  "A two-sentence description of what this essay is about and why it matters to the reader. Keep it honest and specific.",
                href: "https://matthewsprang.substack.com",
              },
            ].map(({ title, description, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[#e2ddd8] bg-off-white p-8 hover:border-colonial-blue transition-colors duration-200"
                style={{ borderTopWidth: "3px", borderTopColor: "#81a2b6" }}
              >
                <p className="font-serif text-lg text-charcoal mb-3 group-hover:text-colonial-blue transition-colors duration-200">
                  {title}
                </p>
                <p className="text-body-text text-sm leading-relaxed">
                  {description}
                </p>
                <p className="text-xs uppercase tracking-widest text-colonial-blue mt-4 font-semibold">
                  Read on Substack &rarr;
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://matthewsprang.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-colonial-blue hover:text-colonial-dark transition-colors duration-200"
            >
              See all essays on Substack &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">
            Subscribe to The Edge of Known
          </h2>
          <p className="text-light-gray mb-8 leading-relaxed">
            One email, when it is ready. No cadence promises that will make you
            resent me later.
          </p>
          <div className="flex justify-center">
            <SubscribeForm />
          </div>
          <p className="text-xs text-[#666] mt-8">
            Read more about Matt&apos;s work:{" "}
            <Link
              href="/talent-development"
              className="text-colonial-blue hover:text-white transition-colors duration-200"
            >
              Talent Development
            </Link>{" "}
            &middot;{" "}
            <Link
              href="/coaching"
              className="text-colonial-blue hover:text-white transition-colors duration-200"
            >
              Coaching
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
