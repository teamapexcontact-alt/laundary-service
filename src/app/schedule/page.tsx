"use client";

import { useState } from "react";
import { MessageCircle, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services, siteConfig } from "@/config/site";
import { toast } from "sonner";

interface FormData {
  name: string;
  phone: string;
  address: string;
  pincode: string;
  notes: string;
}

const steps = ["Service", "Details", "Schedule", "Confirm"];
const pickupSlots = ["07:00-09:00", "09:00-11:00", "14:00-16:00", "16:00-18:00"];

export default function SchedulePage() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({ name: "", phone: "", address: "", pincode: "", notes: "" });
  const [slot, setSlot] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const canProceed = step === 0
    ? selectedService !== null
    : step === 1
    ? form.name.length > 0 && form.phone.length >= 10
    : step === 2
    ? slot !== ""
    : true;

  const handleSubmit = () => {
    setSubmitting(true);
    const service = services.find(s => s.id === selectedService);
    const msg = `New Pickup Request:%0A- Name: ${form.name}%0A- Phone: ${form.phone}%0A- Address: ${form.address}%0A- Pincode: ${form.pincode}%0A- Service: ${service?.title}%0A- Price: ${service?.price}%0A- Slot: ${slot}%0A- Notes: ${form.notes}`;
    window.open(`https://wa.me/${siteConfig.phone}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp to confirm your pickup");
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">Schedule a Pickup</h1>
          <p className="mt-2 text-foreground/60">Fill in the details and we&apos;ll pick up your laundry.</p>

          <div className="mt-8 flex items-center justify-center gap-2">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                  i <= step ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground/40"
                }`}>
                  {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </div>
                <span className={`text-sm ${i <= step ? "text-foreground" : "text-foreground/30"} hidden sm:inline`}>{s}</span>
                {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-accent" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="mt-10">
            {step === 0 && (
              <div>
                <h2 className="text-xl font-heading font-semibold mb-6">What do you need done?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        selectedService === service.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/30"
                      }`}
                    >
                      <p className="font-heading font-semibold">{service.title}</p>
                      <p className="text-sm text-foreground/50 mt-1">{service.price}</p>
                      <p className="text-xs text-foreground/40 mt-0.5">Min: {service.minOrder}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-xl font-heading font-semibold mb-6">Your details</h2>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      placeholder="Pickup address"
                      value={form.address}
                      onChange={(e) => setForm(p => ({ ...p, address: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      placeholder="Pincode"
                      value={form.pincode}
                      onChange={(e) => setForm(p => ({ ...p, pincode: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Special instructions"
                      value={form.notes}
                      onChange={(e) => setForm(p => ({ ...p, notes: e.target.value }))}
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-heading font-semibold mb-6">Pickup slot</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {pickupSlots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`p-4 rounded-xl border-2 text-center text-sm transition-all ${
                        slot === s ? "border-accent bg-accent/5" : "border-border hover:border-accent/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-xs text-foreground/40">Same-day pickup available before 11 AM</p>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-heading font-semibold mb-6">Confirm your order</h2>
                <div className="rounded-xl border border-border bg-card p-6 space-y-3">
                  {[
                    { label: "Service", value: services.find(s => s.id === selectedService)?.title },
                    { label: "Price", value: services.find(s => s.id === selectedService)?.price, highlight: true },
                    { label: "Name", value: form.name },
                    { label: "Phone", value: form.phone },
                    { label: "Pickup slot", value: slot },
                    { label: "Address", value: form.address },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-foreground/50">{item.label}</span>
                      <span className={item.highlight ? "font-semibold text-accent" : ""}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={submitting}
                  size="lg"
                  className="mt-6 w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  {submitting ? "Opening WhatsApp..." : "Confirm via WhatsApp"}
                </Button>
              </div>
            )}
          </div>

          <div className="mt-8 flex gap-4">
            {step > 0 && (
              <Button
                onClick={() => setStep(s => s - 1)}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            )}
            {step < 3 && (
              <Button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed}
                className="gap-2"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}