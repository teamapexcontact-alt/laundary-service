"use client";

import { Star, ThumbsUp } from "lucide-react";
import { Container } from "@/components/container";
import { reviews, beforeAfterPhotos } from "@/config/site";

export function ReviewsSection() {
  return (
    <section className="section-padding bg-background" id="reviews">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            What our customers say
          </h2>
          <p className="mt-4 text-foreground/60 leading-relaxed">
            Real reviews, real results. See the difference professional care makes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-foreground/20"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-3 pt-3 border-t border-border flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground/60">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-foreground/40">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold tracking-tight text-center">
            Before & After
          </h3>
          <p className="mt-2 text-sm text-foreground/50 text-center">
            Real transformations from our care process.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {beforeAfterPhotos.map((photo) => (
              <div key={photo.id} className="space-y-2">
                <p className="text-xs font-medium text-foreground/40 uppercase tracking-wider">{photo.label}</p>
                <div className="rounded-lg border border-border bg-muted/10 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-3">
                    <p className="text-xs text-foreground/20">Before / After</p>
                    <p className="text-[10px] text-foreground/20 mt-1">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-foreground/50">
          <ThumbsUp className="h-4 w-4" />
          Verified reviews from real customers
        </div>
      </Container>
    </section>
  );
}