"use client";

import Link from "next/link";
import { ArrowRight, Droplets, Shirt, Shirt as ShirtIron, Footprints } from "lucide-react";
import { Container } from "@/components/container";
import { services, siteConfig } from "@/config/site";

const iconMap: Record<string, React.ReactNode> = {
  "wash-fold": <Droplets className="h-6 w-6" />,
  "dry-clean": <Shirt className="h-6 w-6" />,
  ironing: <ShirtIron className="h-6 w-6" />,
  "shoe-care": <Footprints className="h-6 w-6" />,
};

export function ServicesPricing() {
  return (
    <section className="section-padding bg-background" id="services">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Services & Pricing
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Transparent per-kg and per-item pricing. No hidden charges.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-border hover:border-accent/30 bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary group-hover:bg-accent/10 transition-colors">
                  <div className="text-foreground group-hover:text-accent transition-colors">
                    {iconMap[service.id]}
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-heading font-semibold">{service.title}</h3>

                <p className="mt-2 text-sm text-foreground/60 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-2xl font-heading font-bold text-accent">{service.price}</p>
                  <p className="text-xs text-foreground/40 mt-0.5">{service.minOrder}</p>
                  <p className="text-xs text-foreground/40">Turnaround: {service.turnaround}</p>
                </div>

                <ul className="mt-4 space-y-1.5" role="list">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="text-xs text-foreground/50 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/schedule"
                className="block w-full py-3 text-center text-sm font-medium bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Select &mdash; {service.price}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-2xl border border-accent/20 bg-accent/5 text-center">
          <p className="text-lg font-heading font-semibold">
            Subscribe & Save —{" "}
            <span className="text-accent">{siteConfig.subscriptionPlan.name}</span>
          </p>
          <p className="text-sm text-foreground/60 mt-1">
            {siteConfig.subscriptionPlan.price}{siteConfig.subscriptionPlan.unit} — {siteConfig.subscriptionPlan.description}
          </p>
          <Link
            href="/schedule"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Learn more <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}