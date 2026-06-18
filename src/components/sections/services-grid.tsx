"use client";

import Link from "next/link";
import { ArrowRight, Shirt, Footprints, Backpack, Package as PackageIcon, Palette, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/container";
import { services } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ReactNode> = {
  laundry: <Droplets className="h-6 w-6" />,
  "dry-clean": <Shirt className="h-6 w-6" />,
  ironing: <Shirt className="h-6 w-6" />,
  "shoe-care": <Footprints className="h-6 w-6" />,
  "bag-care": <Backpack className="h-6 w-6" />,
  "teddy-care": <PackageIcon className="h-6 w-6" />,
  "color-restoration": <Palette className="h-6 w-6" />,
};

export function ServicesGrid() {
  return (
    <section className="section-padding bg-background" id="services">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Comprehensive garment care services with premium quality and professional handling.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group border-border hover:border-accent/30 transition-all duration-300 bg-card hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary group-hover:bg-accent/10 transition-colors">
                  <div className="text-foreground group-hover:text-accent transition-colors">
                    {iconMap[service.id] || <Shirt className="h-6 w-6" />}
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-heading font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-foreground/60 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5" role="list">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="text-xs text-foreground/50 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppUrl("inquiry", { service: service.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Inquire Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View All Services Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}