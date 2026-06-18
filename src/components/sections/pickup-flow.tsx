"use client";

import { ClipboardCheck, Truck, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { pickupFlow } from "@/config/site";

const iconMap = [ClipboardCheck, Truck, Sparkles];

export function PickupFlow() {
  return (
    <section className="section-padding bg-secondary" id="how-it-works">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Getting your garments cleaned is as simple as 1-2-3
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {pickupFlow.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                {index < pickupFlow.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t border-dashed border-foreground/20" />
                )}
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-background border border-border relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-heading font-bold">
                    {step.step}
                  </div>
                  <Icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-heading font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}