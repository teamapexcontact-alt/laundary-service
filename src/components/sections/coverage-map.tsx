"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Container } from "@/components/container";
import { branches, checkServiceability, siteConfig } from "@/config/site";

export function CoverageMap() {
  const [pincode, setPincode] = useState("");
  const [checked, setChecked] = useState<"idle" | "available" | "unavailable">("idle");

  const handleCheck = () => {
    if (!pincode || pincode.length < 6) return;
    setChecked(checkServiceability(pincode) ? "available" : "unavailable");
  };

  return (
    <section className="section-padding bg-secondary" id="coverage">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              We cover these areas
            </h2>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              Currently serving 4 zones across Hyderabad. Enter your pincode to confirm.
            </p>

            <div className="mt-6 flex gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => {
                    setPincode(e.target.value);
                    if (checked !== "idle") setChecked("idle");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                  className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Enter pincode to check coverage"
                />
              </div>
              <button
                onClick={handleCheck}
                className="h-11 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                Check
              </button>
            </div>

            {checked === "available" && (
              <div className="mt-3 flex items-center gap-2 text-sm text-green-600 bg-green-50 rounded-lg px-4 py-2.5 border border-green-200">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Yes, we deliver to this area!
              </div>
            )}
            {checked === "unavailable" && (
              <div className="mt-3 flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-2.5 border border-red-200">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Not yet — check back soon.
              </div>
            )}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="p-4 rounded-xl border border-border bg-background hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-sm font-heading font-semibold">{branch.name}</h3>
                  <p className="text-xs text-foreground/50 mt-1">Pincodes: {branch.pincodes.join(", ")}</p>
                  <a href={`tel:${branch.phone}`} className="text-xs text-accent mt-1 block hover:underline">
                    {branch.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15223.5!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHyderabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              title="Coverage area map"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}