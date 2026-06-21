import Link from "next/link";
import { Phone, Mail, MapPin, Camera, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { siteConfig, navigation, branches } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold font-heading tracking-tight">
                APEX<span className="text-accent"> Laundry </span>Service
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href={getWhatsAppUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-heading tracking-wider uppercase text-accent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-heading tracking-wider uppercase text-accent">
              Branches
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <Link
                    href={`/branches#${branch.id}`}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {branch.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-heading tracking-wider uppercase text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-4" role="list">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>Hyderabad, Telangana</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                  <span className="text-accent font-medium">Hours:</span>
                  <span>{siteConfig.workingHours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-primary-foreground/10">
        <div className="bg-primary-foreground/5">
          <Container className="py-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { label: "Insured Against Damage", icon: "🛡️" },
                { label: "Hygiene Certified", icon: "✅" },
                { label: "Eco-Friendly Detergents", icon: "🌿" },
                { label: "On-Time Delivery", icon: "⏱️" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <span className="text-lg">{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </Container>
        </div>
        <Container className="py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Follow us on{" "}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Instagram
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}