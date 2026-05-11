"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-light-accent rounded-sm p-8 text-center">
        <p className="font-serif text-xl text-charcoal mb-3">Got it.</p>
        <p className="text-body-text">
          Matt will be in touch soon. Thanks for reaching out.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-charcoal mb-2 font-semibold"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 bg-white border border-[#ddd8d2] text-charcoal text-sm focus:outline-none focus:border-colonial-blue transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-charcoal mb-2 font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 bg-white border border-[#ddd8d2] text-charcoal text-sm focus:outline-none focus:border-colonial-blue transition-colors duration-200"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm text-charcoal mb-2 font-semibold"
        >
          Phone <span className="text-light-gray font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 bg-white border border-[#ddd8d2] text-charcoal text-sm focus:outline-none focus:border-colonial-blue transition-colors duration-200"
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-charcoal mb-2 font-semibold"
        >
          What&apos;s on your mind
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white border border-[#ddd8d2] text-charcoal text-sm focus:outline-none focus:border-colonial-blue transition-colors duration-200 resize-none"
          placeholder="Tell Matt a bit about what you're working on or what you'd like to talk about."
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary self-start bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-colonial-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {status === "loading" ? "Sending..." : "Send it"}
      </button>
    </form>
  );
}
