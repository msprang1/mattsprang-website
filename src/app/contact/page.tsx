import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Looking to book a talk, start coaching, or have a real conversation about your team? Matt Sprang reads every message himself. Greater Philadelphia region and national bookings.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="texture bg-off-white border-b border-[#e2ddd8]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-colonial-blue mb-5 font-semibold">
              Contact
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 leading-tight">
              Let&apos;s Talk.
            </h1>
            <div className="section-rule" />
            <p className="text-body-text leading-relaxed">
              Whether you&apos;re looking to book a talk, start coaching, or
              just want to have a real conversation about where your team is,
              this is the right place to start.
            </p>
          </div>
        </div>
      </section>

      {/* Form + direct contact */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-4 font-semibold">
                Reach out directly
              </p>
              <a
                href="mailto:matt@mattsprang.com"
                className="block text-charcoal hover:text-colonial-blue transition-colors duration-200 mb-2"
              >
                matt@mattsprang.com
              </a>
              <a
                href="tel:+16098207946"
                className="block text-charcoal hover:text-colonial-blue transition-colors duration-200"
              >
                (609) 820-7946
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-4 font-semibold">
                What to expect
              </p>
              <p className="text-sm text-body-text leading-relaxed">
                Matt reads every message himself. No assistant, no
                auto-response, no funnel. He will be in touch within a day or
                two.
              </p>
            </div>

            <div className="border-t border-[#e2ddd8] pt-8 space-y-3">
              <p className="text-xs uppercase tracking-widest text-light-gray mb-4 font-semibold">
                Offerings
              </p>
              <div className="text-sm text-body-text space-y-2">
                <p className="flex items-start gap-2">
                  <span className="text-colonial-blue">&#9670;</span> Speaking
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-colonial-blue">&#9670;</span> Talent
                  Development
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-colonial-blue">&#9670;</span> Coaching
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
