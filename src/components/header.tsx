"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { navigation, siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="APEX Laundry Service Home">
            <span className="text-xl font-bold font-heading tracking-tight text-primary">
              APEX<span className="text-accent"> Laundry </span>Service
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === item.href
                    ? "text-accent"
                    : "text-foreground/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background text-foreground hover:bg-secondary px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <Container className="py-4">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                    pathname === item.href
                      ? "bg-secondary text-accent"
                      : "text-foreground/70"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <div className="flex gap-2 pt-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background text-foreground hover:bg-secondary px-3 py-2 text-sm font-medium whitespace-nowrap transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={getWhatsAppUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 text-sm font-medium whitespace-nowrap transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}