"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Package, MessageSquare, Users, ArrowRight } from "lucide-react";

interface Stats {
  pickups: number;
  contacts: number;
  leads: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({ pickups: 0, contacts: 0, leads: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    Promise.all([
      fetch("/api/admin/pickups", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch("/api/admin/contacts", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch("/api/admin/leads", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
    ])
      .then(([pickups, contacts, leads]) => {
        setStats({
          pickups: pickups.data?.length || 0,
          contacts: contacts.data?.length || 0,
          leads: leads.data?.length || 0,
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      title: "Pickup Requests",
      value: stats.pickups,
      href: "/admin/pickups",
      icon: Package,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      title: "Contact Inquiries",
      value: stats.contacts,
      href: "/admin/contacts",
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Franchise Leads",
      value: stats.leads,
      href: "/admin/leads",
      icon: Users,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-sm text-foreground/50">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold tracking-tight mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="p-6 rounded-xl border border-border bg-background hover:border-accent/30 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${card.bg} ${card.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-4 w-4 text-foreground/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="mt-4 text-3xl font-heading font-bold">{card.value}</p>
              <p className="mt-1 text-sm text-foreground/50">{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}