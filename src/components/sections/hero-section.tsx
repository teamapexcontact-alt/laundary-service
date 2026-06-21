"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { checkServiceability, siteConfig } from "@/config/site";

export function HeroSection() {
  const [pincode, setPincode] = useState("");
  const [checked, setChecked] = useState<"idle" | "available" | "unavailable">("idle");

  const handleCheck = () => {
    if (!pincode || pincode.length < 6) return;
    setChecked(checkServiceability(pincode) ? "available" : "unavailable");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 z-10" />
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />

      <Container className="relative z-20 py-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-balance leading-[1.05]">
            Door-to-door laundry,
            <br />
            <span className="text-accent">picked up and delivered fresh.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
            Professional laundry care, dry cleaning, and more — with free pickup &amp; delivery across Hyderabad.
            Schedule in under a minute.
          </p>

          <div className="mt-10 max-w-lg">
            <label className="text-sm font-medium text-primary-foreground/80 mb-2 block">
              Enter your address or pincode to see if we deliver to you
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/40" />
                <input
                  type="text"
                  placeholder="Enter your pincode or area"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                    if (checked !== "idle") setChecked("idle");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-white text-foreground placeholder:text-foreground/40 text-sm font-body focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Enter your pincode to check serviceability"
                />
              </div>
              <button
                onClick={handleCheck}
                className="h-12 px-6 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors whitespace-nowrap inline-flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" />
                Check
              </button>
            </div>

            {checked === "available" && (
              <div className="mt-3 flex items-center gap-2 text-sm text-green-400 bg-green-400/10 rounded-lg px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                We deliver to your area!{" "}
                <Link href="/schedule" className="text-accent hover:underline font-medium ml-1">
                  Schedule a pickup
                </Link>
              </div>
            )}
            {checked === "unavailable" && (
              <div className="mt-3 flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-lg px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                We don&apos;t serve this area yet. Check back soon or{" "}
                <a
                  href={`https://wa.me/${siteConfig.phone}?text=Hi%2C%20I%27m%20interested%20in%20your%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  contact us
                </a>
              </div>
            )}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-base font-medium transition-all min-h-[44px]"
            >
              Schedule a Pickup
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-base font-medium transition-all min-h-[44px]"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { label: "Areas Covered", value: "4+" },
              { label: "Turnaround", value: "24 hrs" },
              { label: "Rating", value: "4.9★" },
              { label: "Pickup Time", value: "On-time" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-heading font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}