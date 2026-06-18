"use client";

import { Sparkles, Truck, MapPin, ShieldCheck, Users, Clock } from "lucide-react";
import { Container } from "@/components/container";
import { whyChooseUs } from "@/config/site";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="h-5 w-5" />,
  Truck: <Truck className="h-5 w-5" />,
  MapPin: <MapPin className="h-5 w-5" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Clock: <Clock className="h-5 w-5" />,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background" id="why-us">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            We set the standard for premium garment care in Hyderabad
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                {iconMap[item.icon] || <Sparkles className="h-5 w-5" />}
              </div>
              <h3 className="mt-4 text-lg font-heading font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}