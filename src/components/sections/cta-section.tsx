"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-balance">
            Ready to Experience Premium Care?
          </h2>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed text-lg">
            Schedule your first pickup today and let us take care of everything you wear.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#pickup-form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-2.5 text-base font-medium whitespace-nowrap transition-all"
            >
              Schedule Pickup
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-2.5 text-base font-medium whitespace-nowrap transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}