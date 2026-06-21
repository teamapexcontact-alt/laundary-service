"use client";

import { Container } from "@/components/container";
import { ShieldCheck, Leaf, Award } from "lucide-react";

export function TrustProcess() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-background to-secondary z-0" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] rounded-2xl bg-muted/10 border border-border flex items-center justify-center order-2 lg:order-1">
            <div className="text-center p-8">
              <Leaf className="h-12 w-12 text-accent mx-auto" />
              <p className="mt-4 text-sm text-foreground/30">Facility & process photography</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Trusted care for everything you wear
            </h2>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              We treat your clothes the way you would — with care, attention, and the best products we can find.
              Every item is handled by trained professionals in a hygienic, insured facility.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: <ShieldCheck className="h-5 w-5 text-accent" />,
                  title: "Fully insured",
                  desc: "Every order is covered against damage or loss. Rare, but if it happens, we make it right.",
                },
                {
                  icon: <Leaf className="h-5 w-5 text-accent" />,
                  title: "Eco-friendly detergents",
                  desc: "Gentle on fabrics, safe for skin, better for the planet. No harsh chemicals.",
                },
                {
                  icon: <Award className="h-5 w-5 text-accent" />,
                  title: "Hygiene-certified process",
                  desc: "Temperature-controlled washing, sanitized equipment, and quality-checked before return.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-0.5 flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-semibold">{item.title}</h3>
                    <p className="text-sm text-foreground/60 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}