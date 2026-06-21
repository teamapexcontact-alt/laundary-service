"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { faqs } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-secondary" id="faq">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-background overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-secondary/50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  suppressHydrationWarning
                >
                  <span className="text-sm font-heading font-semibold pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 flex-shrink-0 text-foreground/50 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-4">
                    <p className="text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/50">
              Still have questions?{" "}
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}