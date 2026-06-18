"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Container } from "@/components/container";
import { services } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { toast } from "sonner";

interface FormData {
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
}

export function PickupFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    const url = getWhatsAppUrl("pickup", {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      service: formData.service || "Not specified",
      message: formData.message,
    });

    window.open(url, "_blank");
    toast.success("Opening WhatsApp to complete your booking");
  };

  return (
    <section className="section-padding bg-background" id="pickup-form">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Schedule a Pickup
            </h2>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              Fill in your details and we&apos;ll connect with you on WhatsApp to confirm your pickup.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Pickup request form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  aria-required="true"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Pickup Address *</Label>
              <Textarea
                id="address"
                placeholder="Your complete pickup address"
                rows={3}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                aria-required="true"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value || "" })}
                >
                  <SelectTrigger id="service" aria-label="Select service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred-time">Preferred Time</Label>
                <Input
                  id="preferred-time"
                  placeholder="e.g., Morning 10 AM"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Button>

            <p className="text-xs text-foreground/50 text-center">
              By submitting, you agree to be contacted via WhatsApp for pickup confirmation.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}