"use client";

import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface TimelineItem {
  label: string;
  time: string;
  done: boolean;
}

interface OrderData {
  id: string;
  status: string;
  timeline: TimelineItem[];
  items: string;
  total: string;
  eta: string;
}

const demoOrder: OrderData = {
  id: "APX-1234",
  status: "processing",
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

export default function TrackPage() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (orderId.trim().length === 0) return;
    setLoading(true);
    setTimeout(() => {
      setSearched(true);
      setLoading(false);
    }, 400);
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <Container>
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight text-center">Track your order</h1>
          <p className="mt-2 text-foreground/60 text-center text-sm">Enter your order ID to see the latest status.</p>

          <div className="mt-8 flex gap-3">
            <Input
              placeholder="Order ID (e.g., APX-1234)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-1 h-12"
            />
            <Button
              onClick={handleSearch}
              disabled={loading || orderId.trim().length === 0}
              className="h-12 px-6 gap-2"
            >
              <Search className="h-4 w-4" />
              {loading ? "Searching..." : "Track"}
            </Button>
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
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                          item.done ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground/30"
                        )}>
                          {item.done ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                        </div>
                        {i < demoOrder.timeline.length - 1 && (
                          <div className={cn("w-0.5 flex-1 mt-1", item.done ? "bg-accent" : "bg-border")} />
                        )}
                      </div>
                      <div className="pt-1.5">
                        <p className={cn("text-sm font-medium", item.done ? "text-foreground" : "text-foreground/30")}>
                          {item.label}
                        </p>
                        <p className={cn("text-xs mt-0.5", item.done ? "text-foreground/50" : "text-foreground/20")}>
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

          {loading && (
            <div className="mt-10 flex justify-center">
              <div className="text-sm text-foreground/50">Looking up your order...</div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}