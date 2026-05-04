import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-light-gray mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg text-white mb-3">Matt Sprang</p>
            <p className="text-sm leading-relaxed">
              Speaker, leadership development, and coaching. Greater
              Philadelphia region.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-colonial-blue mb-4">
              Pages
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/speaking", label: "Speaking" },
                {
                  href: "/leadership-development",
                  label: "Leadership Development",
                },
                { href: "/coaching", label: "Coaching" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-light-gray hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-colonial-blue mb-4">
              Get in Touch
            </p>
            <a
              href="mailto:matt@mattsprang.com"
              className="text-sm text-light-gray hover:text-white transition-colors duration-200 block mb-2"
            >
              matt@mattsprang.com
            </a>
            <a
              href="tel:+16098207946"
              className="text-sm text-light-gray hover:text-white transition-colors duration-200 block"
            >
              (609) 820-7946
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#404040] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666]">
            &copy; {new Date().getFullYear()} Matt Sprang. All rights reserved.
          </p>
          <p className="text-xs text-[#666]">Greater Philadelphia Region</p>
        </div>
      </div>
    </footer>
  );
}
