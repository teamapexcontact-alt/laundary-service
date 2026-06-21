"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { services, branches, siteConfig } from "@/config/site";

const steps = ["Service", "Details", "Schedule", "Confirm"];

export default function SchedulePage() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", address: "", pincode: "", notes: "" });
  const [slot, setSlot] = useState("");

  const canProceed = step === 0
    ? selectedService !== null
    : step === 1
    ? form.name.length > 0 && form.phone.length >= 10
    : step === 2
    ? slot !== ""
    : true;

  const handleSubmit = () => {
    const msg = `New Pickup Request:%0A- Name: ${form.name}%0A- Phone: ${form.phone}%0A- Address: ${form.address}%0A- Pincode: ${form.pincode}%0A- Service: ${services.find(s => s.id === selectedService)?.title}%0A- Slot: ${slot}%0A- Notes: ${form.notes}`;
    window.open(`https://wa.me/${siteConfig.phone}?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <Container>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">Schedule a Pickup</h1>
        <p className="mt-2 text-foreground/60">Fill in the details and we&apos;ll pick up your laundry.</p>

        <div className="mt-8 flex items-center gap-2">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${i <= step ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground/40"}`}>
                {i + 1}
              </div>
              <span className={`text-sm ${i <= step ? "text-foreground" : "text-foreground/30"} hidden sm:inline`}>{s}</span>
              {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-accent" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl">
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
            <div>
              <h2 className="text-xl font-heading font-semibold mb-6">Your details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Address</label>
                  <textarea value={form.address} onChange={(e) => setForm(p => ({ ...p, address: e.target.value }))} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent min-h-[80px]" placeholder="Pickup address" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Pincode</label>
                  <input type="text" value={form.pincode} onChange={(e) => setForm(p => ({ ...p, pincode: e.target.value }))} className="w-full h-11 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Pincode" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Notes (optional)</label>
                  <textarea value={form.notes} onChange={(e) => setForm(p => ({ ...p, notes: e.target.value }))} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent min-h-[60px]" placeholder="Special instructions" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-heading font-semibold mb-6">Pickup slot</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["07:00-09:00", "09:00-11:00", "14:00-16:00", "16:00-18:00"].map((s) => (
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
                <div className="flex justify-between text-sm"><span className="text-foreground/50">Service</span><span>{services.find(s => s.id === selectedService)?.title}</span></div>
                <div className="flex justify-between text-sm"><span className="text-foreground/50">Name</span><span>{form.name}</span></div>
                <div className="flex justify-between text-sm"><span className="text-foreground/50">Phone</span><span>{form.phone}</span></div>
                <div className="flex justify-between text-sm"><span className="text-foreground/50">Pickup slot</span><span>{slot}</span></div>
                <div className="flex justify-between text-sm"><span className="text-foreground/50">Price</span><span className="font-semibold text-accent">{services.find(s => s.id === selectedService)?.price}</span></div>
              </div>
              <button
                onClick={handleSubmit}
                className="mt-6 w-full h-12 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              >
                Confirm via WhatsApp
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 flex gap-4">
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)} className="px-6 h-11 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors">
              Back
            </button>
          )}
          {step < 3 && (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={!canProceed}
              className="px-6 h-11 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-40"
            >
              Continue
            </button>
          )}
        </div>
      </Container>
    </main>
  );
}