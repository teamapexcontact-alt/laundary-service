import type { Metadata } from "next";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About",
  description: "APEX Laundry Service - Hyderabad's premium laundry and garment care brand. Our story, mission, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight">
              Our Story
            </h1>
            <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
              APEX Laundry Service was born from a simple belief: your clothes deserve better.
              In a city that never stops moving, we saw the need for a laundry service
              that matched the pace and lifestyle of modern Hyderabad.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight">Our Mission</h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                To provide premium garment care that is accessible, convenient, and reliable.
                We believe that looking good should never be a hassle.
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Every garment that comes through our doors is treated with the same care
                and attention we give to our own wardrobe. From everyday wear to your
                most cherished pieces.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-muted/10 border border-border flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-foreground/30">Brand Image</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-secondary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Our Commitment
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "Every item is inspected, treated, and finished with meticulous attention to detail.",
              },
              {
                title: "Customer Care",
                description: "Your satisfaction is our priority. We go beyond cleaning to ensure you love your experience.",
              },
              {
                title: "Continuous Improvement",
                description: "We constantly refine our processes and adopt the best practices in garment care.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background">
        <Container className="text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Join Our Journey
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Whether you are a customer or a potential franchise partner, we would love
            to connect with you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={getWhatsAppUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all"
            >
              Chat with Us
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-foreground/20 bg-background text-foreground hover:bg-secondary px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all"
            >
              Call Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}