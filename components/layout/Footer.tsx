import { Container } from "@/components/ui/Container";
import { SITE_CONFIG, FOOTER_LINKS, NAV_LINKS } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold">REVIVE</span>
              <span className="text-xl font-light text-[var(--color-primary-light)] ml-1">
                ACADEMY
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              L&apos;académie de formation Pilates de haut niveau au Sénégal. Devenez
              coach certifié avec une formation d&apos;excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={18} className="shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
