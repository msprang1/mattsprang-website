"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meeplvvn");

  if (state.succeeded) {
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
          <ValidationError
            field="name"
            errors={state.errors}
            className="text-sm text-red-600 mt-1"
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
          <ValidationError
            field="email"
            errors={state.errors}
            className="text-sm text-red-600 mt-1"
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
        <ValidationError
          field="message"
          errors={state.errors}
          className="text-sm text-red-600 mt-1"
        />
      </div>

      <ValidationError errors={state.errors} className="text-sm text-red-600" />

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary self-start bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-colonial-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {state.submitting ? "Sending..." : "Send it"}
      </button>
    </form>
  );
}
