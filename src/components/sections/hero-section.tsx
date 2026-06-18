"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-secondary to-background">
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-8">
            Premium Laundry & Garment Care
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-balance">
            Premium Care For
            <br />
            <span className="text-accent">Everything You Wear</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-foreground/60 max-w-xl leading-relaxed">
            Premium laundry and garment care services with free pickup &amp; delivery across Hyderabad.
            Expert care for clothes, shoes, bags, and more.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#pickup-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-2.5 text-base font-medium whitespace-nowrap transition-all"
            >
              Schedule Pickup
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-foreground/20 bg-background text-foreground hover:bg-secondary px-8 py-2.5 text-base font-medium whitespace-nowrap transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: "Branches", value: "4" },
              { label: "Services", value: "7+" },
              { label: "Pickup Time", value: "30min" },
              { label: "Delivery", value: "24hr" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
    </section>
  );
}