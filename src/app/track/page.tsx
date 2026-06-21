"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const demoOrder = {
  id: "APX-1234",
  status: "processing" as const,
  timeline: [
    { label: "Order placed", time: "Today, 09:00 AM", done: true },
    { label: "Picked up", time: "Today, 10:30 AM", done: true },
    { label: "Being processed", time: "In progress", done: true },
    { label: "Quality check", time: "Pending", done: false },
    { label: "Out for delivery", time: "Pending", done: false },
    { label: "Delivered", time: "Pending", done: false },
  ],
  items: "3 kg mixed laundry",
  total: "₹240",
  eta: "Tomorrow, before 6 PM",
};

const statusIcon: Record<string, React.ReactNode> = {
  "order-placed": <Package className="h-4 w-4" />,
  picked: <Package className="h-4 w-4" />,
  processing: <Clock className="h-4 w-4" />,
  "quality-check": <CheckCircle className="h-4 w-4" />,
  "out-for-delivery": <Truck className="h-4 w-4" />,
  delivered: <CheckCircle className="h-4 w-4" />,
};

export default function TrackPage() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (orderId.trim().length > 0) setSearched(true);
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <Container>
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-center">Track your order</h1>
          <p className="mt-2 text-foreground/60 text-center text-sm">Enter your order ID to see the latest status.</p>

          <div className="mt-8 flex gap-3">
            <input
              type="text"
              placeholder="Order ID (e.g., APX-1234)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 h-12 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              onClick={handleSearch}
              className="h-12 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <Search className="h-4 w-4" />
              Track
            </button>
          </div>

          {searched && (
            <div className="mt-10">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-foreground/40">Order #{demoOrder.id}</p>
                    <p className="text-sm font-medium mt-0.5">{demoOrder.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-heading font-bold text-accent">{demoOrder.total}</p>
                    <p className="text-xs text-foreground/40">Est. {demoOrder.eta}</p>
                  </div>
                </div>

                <div className="relative">
                  {demoOrder.timeline.map((item, i) => (
                    <div key={item.label} className="flex gap-4 pb-6 last:pb-0">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          item.done ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground/30"
                        }`}>
                          {item.done ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                        </div>
                        {i < demoOrder.timeline.length - 1 && (
                          <div className={`w-0.5 flex-1 mt-1 ${item.done ? "bg-accent" : "bg-border"}`} />
                        )}
                      </div>
                      <div className="pt-1.5">
                        <p className={`text-sm font-medium ${item.done ? "text-foreground" : "text-foreground/30"}`}>
                          {item.label}
                        </p>
                        <p className={`text-xs mt-0.5 ${item.done ? "text-foreground/50" : "text-foreground/20"}`}>
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-accent/5 border border-accent/20 text-center">
                <p className="text-sm text-foreground/70">
                  Questions?{" "}
                  <a
                    href={`https://wa.me/${siteConfig.phone}?text=Hi%2C%20I%20have%20a%20question%20about%20order%20${demoOrder.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}