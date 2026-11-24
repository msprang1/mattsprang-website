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

    // Honeypot check — bots fill hidden fields, humans don't
    const honeypot = (
      form.elements.namedItem("website_url") as HTMLInputElement
    ).value;
    if (honeypot) {
      setStatus("success");
      return;
    }

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      businessName: (
        form.elements.namedItem("businessName") as HTMLInputElement
      ).value,
      businessWebsite: (
        form.elements.namedItem("businessWebsite") as HTMLInputElement
      ).value,
      linkedin: (form.elements.namedItem("linkedin") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLInputElement).value,
      yearsInBusiness: (
        form.elements.namedItem("yearsInBusiness") as HTMLInputElement
      ).value,
      annualRevenue: (
        form.elements.namedItem("annualRevenue") as HTMLSelectElement
      ).value,
      preferredContact:
        (
          form.querySelector(
            'input[name="preferredContact"]:checked',
          ) as HTMLInputElement
        )?.value ?? "email",
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
        <p className="font-serif text-xl text-charcoal mb-3">Thank you.</p>
        <p className="text-body-text">
          I read every submission myself and will follow up personally.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-[#ddd8d2] text-charcoal text-sm focus:outline-none focus:border-colonial-blue transition-colors duration-200";
  const labelClass = "block text-sm text-charcoal mb-2 font-semibold";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot — hidden from humans, filled by bots */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website_url">Leave this blank</label>
        <input
          id="website_url"
          name="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone{" "}
            <span className="text-light-gray font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="(555) 000-0000"
          />
        </div>
        <div>
          <p className={labelClass}>Preferred contact method</p>
          <div className="flex gap-6 pt-3">
            {["Email", "Phone"].map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 cursor-pointer text-sm text-charcoal"
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={opt.toLowerCase()}
                  defaultChecked={opt === "Email"}
                  className="accent-charcoal"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            className={inputClass}
            placeholder="Your business name"
          />
        </div>
        <div>
          <label htmlFor="businessWebsite" className={labelClass}>
            Business website
          </label>
          <input
            id="businessWebsite"
            name="businessWebsite"
            type="text"
            required
            className={inputClass}
            placeholder="yourbusiness.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="linkedin" className={labelClass}>
          Your LinkedIn profile{" "}
          <span className="text-light-gray font-normal">(optional)</span>
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="text"
          className={inputClass}
          placeholder="linkedin.com/in/yourprofile"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="industry" className={labelClass}>
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            type="text"
            required
            className={inputClass}
            placeholder="e.g. Construction, Healthcare"
          />
        </div>
        <div>
          <label htmlFor="yearsInBusiness" className={labelClass}>
            Years in business
          </label>
          <input
            id="yearsInBusiness"
            name="yearsInBusiness"
            type="number"
            required
            min="0"
            className={inputClass}
            placeholder="e.g. 7"
          />
        </div>
      </div>

      <div>
        <label htmlFor="annualRevenue" className={labelClass}>
          Annual revenue
        </label>
        <select
          id="annualRevenue"
          name="annualRevenue"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="Under $500K">Under $500K</option>
          <option value="$500K–$1M">$500K–$1M</option>
          <option value="$1M–$3M">$1M–$3M</option>
          <option value="Over $3M">Over $3M</option>
        </select>
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary self-start bg-charcoal text-white text-sm tracking-wide px-8 py-3.5 hover:bg-colonial-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {status === "loading" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
