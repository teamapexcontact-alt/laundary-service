"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function StickyMobileActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
      <div className="flex items-center justify-center gap-2 px-4 py-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          aria-label="Call us"
        >
          <Phone className="h-4 w-4" />
          <span>Call Now</span>
        </a>
        <a
          href={getWhatsAppUrl("general")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}