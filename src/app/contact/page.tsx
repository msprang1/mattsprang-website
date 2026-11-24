import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Matt Sprang",
  description:
    "Start a conversation with Matt Sprang about growing your business without giving it more of you.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-colonial-blue uppercase tracking-widest text-xs mb-4 font-semibold">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-2xl mb-4">
            Let&apos;s start a conversation.
          </h1>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">
            Tell me a little about you and your business. I read every
            submission myself and will follow up personally.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-colonial-blue mb-4 font-semibold">
                Prefer email?
              </p>
              <a
                href="mailto:matt@mattsprang.com"
                className="block text-charcoal hover:text-colonial-blue transition-colors duration-200"
              >
                matt@mattsprang.com
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
          </div>
        </div>
      </section>
    </>
  );
}
