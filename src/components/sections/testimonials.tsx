"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/container";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section className="section-padding bg-background" id="testimonials">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Trusted by hundreds of customers across Hyderabad
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-heading font-semibold">{testimonial.name}</p>
                <p className="text-xs text-foreground/50">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}