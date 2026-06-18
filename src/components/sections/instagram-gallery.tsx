"use client";

import { ExternalLink } from "lucide-react";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

const placeholderImages = [
  { id: 1, label: "Before & After" },
  { id: 2, label: "Premium Care" },
  { id: 3, label: "Garment Care" },
  { id: 4, label: "Shoe Cleaning" },
  { id: 5, label: "Bag Care" },
  { id: 6, label: "Fresh Delivery" },
];

export function InstagramGallery() {
  return (
    <section className="section-padding bg-secondary" id="gallery">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            From Our Instagram
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Follow us{" "}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              {siteConfig.instagram}
            </a>{" "}
            for before/after transformations and care tips
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
          {placeholderImages.map((img) => (
            <a
              key={img.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted/20 border border-border hover:border-accent/30 transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-accent" />
                  </div>
                  <p className="mt-3 text-xs text-foreground/50 font-medium">{img.label}</p>
                  <p className="text-[10px] text-foreground/30 mt-1">Instagram Image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs text-primary-foreground font-medium">{img.label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Follow us on Instagram
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}