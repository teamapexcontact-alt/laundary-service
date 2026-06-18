"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { toast } from "sonner";

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.city) {
      toast.error("Please fill in all required fields");
      return;
    }

    const url = getWhatsAppUrl("franchise", formData);
    window.open(url, "_blank");
    toast.success("Opening WhatsApp to share your inquiry");
  };

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight">
              Franchise Opportunities
            </h1>
            <p className="mt-6 text-lg text-foreground/60 leading-relaxed">
              Join Hyderabad&apos;s fastest-growing premium garment care brand. 
              Partner with us and be part of our expansion journey.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight">
                Why Franchise with Us?
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  { title: "Proven Business Model", desc: "A successful and tested operational framework that delivers results." },
                  { title: "Growing Demand", desc: "Hyderabad's premium garment care market is expanding rapidly." },
                  { title: "Brand Recognition", desc: "Leverage our established brand identity and market presence." },
                  { title: "Full Support", desc: "Comprehensive training, marketing support, and operational guidance." },
                  { title: "Scalable Opportunity", desc: "Multiple location models designed for profitable operations." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-border p-8 bg-card">
                <h2 className="text-2xl font-heading font-bold tracking-tight">
                  Send Your Inquiry
                </h2>
                <p className="mt-2 text-sm text-foreground/60">
                  Fill in your details and we&apos;ll get back to you on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Your City *</Label>
                      <Input
                        id="city"
                        placeholder="e.g., Hyderabad"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Business Interest</Label>
                      <Input
                        id="interest"
                        placeholder="e.g., New branch"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send Inquiry via WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}