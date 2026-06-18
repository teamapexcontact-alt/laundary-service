"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { branches } from "@/config/site";

export function BranchLocations() {
  return (
    <section className="section-padding bg-secondary" id="branches">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Our Branches
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Conveniently located across Hyderabad
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {branches.map((branch) => (
            <div
              key={branch.id}
              id={branch.id}
              className="group p-6 rounded-xl border border-border bg-background hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-heading font-semibold">{branch.name}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{branch.address}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-foreground/50">
                    <span>{branch.hours}</span>
                    <a href={`tel:${branch.phone}`} className="text-accent hover:underline">
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/branches"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View Branch Details &amp; Maps
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}