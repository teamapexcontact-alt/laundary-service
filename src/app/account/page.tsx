"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";
import { RotateCcw, CreditCard, Package, ChevronRight } from "lucide-react";

const pastOrders = [
  { id: "APX-1198", date: "18 Jun", items: "5 kg mixed", total: "₹400", status: "Delivered" },
  { id: "APX-1156", date: "14 Jun", items: "3 kg + 2 shirts dry clean", total: "₹380", status: "Delivered" },
  { id: "APX-1123", date: "10 Jun", items: "4 kg premium", total: "₹440", status: "Delivered" },
];

export default function AccountPage() {
  const [phone, setPhone] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (phone.length >= 10) setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-background pt-24 pb-16">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-heading font-bold tracking-tight">My Account</h1>
            <p className="mt-2 text-foreground/60 text-sm">Enter your phone number to view your past orders.</p>
            <div className="mt-8 space-y-4">
              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full h-12 rounded-lg border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                onClick={handleLogin}
                className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View orders
              </button>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-heading font-bold tracking-tight">My Account</h1>
          <p className="mt-1 text-foreground/60 text-sm">{phone}</p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: <RotateCcw className="h-5 w-5" />, label: "Reorder", desc: "Repeat last order" },
              { icon: <Package className="h-5 w-5" />, label: "Active", desc: "Orders in progress" },
              { icon: <CreditCard className="h-5 w-5" />, label: "Subscribe", desc: `Save ${siteConfig.subscriptionPlan.price}${siteConfig.subscriptionPlan.unit}` },
            ].map((item) => (
              <button
                key={item.label}
                className="p-4 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors text-center"
              >
                <div className="flex justify-center text-foreground">{item.icon}</div>
                <p className="mt-2 text-xs font-medium">{item.label}</p>
                <p className="text-[10px] text-foreground/40 mt-0.5">{item.desc}</p>
              </button>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-heading font-semibold">Past orders</h2>
          <div className="mt-4 space-y-3">
            {pastOrders.map((order) => (
              <div
                key={order.id}
                className="p-4 rounded-xl border border-border bg-card flex items-center justify-between hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{order.id}</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/50 mt-1">{order.date} &middot; {order.items}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-accent">{order.total}</p>
                  <a
                    href={`https://wa.me/${siteConfig.phone}?text=Hi%2C%20I%27d%20like%20to%20reorder%20${order.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                  >
                    Reorder
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-foreground/30 text-center">
            This is a demo view. Full account integration coming soon.
          </p>
        </div>
      </Container>
    </main>
  );
}