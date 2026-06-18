import type { Metadata } from "next";
import { Container } from "@/components/container";
import { services } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium laundry, dry cleaning, shoe care, bag care, and more. Comprehensive garment care services across Hyderabad.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
              Comprehensive garment care services with premium quality and professional handling.
              Every item is treated with the care it deserves.
            </p>
          </div>
        </Container>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <Container>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "" : "lg:direction-rtl"}`}>
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className="aspect-[4/3] rounded-2xl bg-muted/10 border border-border flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-foreground/30">{service.title} Image</p>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <h2 className="text-3xl font-heading font-bold tracking-tight">{service.title}</h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-3" role="list">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-foreground/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppUrl("inquiry", { service: service.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all"
                  >
                    Book This Service
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="section-padding bg-primary text-primary-foreground">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg">
            Chat with us and we&apos;ll recommend the best service for your garments.
          </p>
          <a
            href={getWhatsAppUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all"
          >
            Chat on WhatsApp
          </a>
        </Container>
      </section>
    </>
  );
}