import type { Metadata } from "next";
import { Container } from "@/components/container";
import { branches } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Branches",
  description: "Visit our 4 branches across Hyderabad. Dairy Farm Road, Suchitra, Kompally, and Gundlapochampally.",
};

export default function BranchesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight">
              Our Branches
            </h1>
            <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
              Conveniently located across Hyderabad with 4 branches to serve you better.
              Drop off your garments or schedule a pickup.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <div
                key={branch.id}
                id={branch.id}
                className="rounded-2xl border border-border overflow-hidden bg-card"
              >
                <div className="aspect-[16/9] bg-muted/10">
                  <iframe
                    src={branch.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "250px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${branch.name} location map`}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-heading font-semibold">{branch.name}</h2>
                  <p className="mt-2 text-sm text-foreground/60">{branch.address}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-foreground/50">
                    <div className="flex items-center gap-1.5">
                      <span className="text-accent font-medium">Hours:</span>
                      {branch.hours}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background text-foreground hover:bg-secondary px-4 py-2 text-sm font-medium whitespace-nowrap transition-all"
                    >
                      Call Branch
                    </a>
                    <a
                      href={getWhatsAppUrl("general", { message: `Hi, I'm interested in services at ${branch.name}.` })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all"
                    >
                      WhatsApp {branch.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}