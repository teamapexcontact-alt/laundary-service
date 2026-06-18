"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  interest: string | null;
  created_at: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    fetch("/api/admin/leads", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => setLeads(data.data || []))
      .catch(() => toast.error("Failed to load leads"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-sm text-foreground/50">Loading leads...</div>;
  }

  if (leads.length === 0) {
    return (
      <div className="text-center py-20 text-foreground/50">
        <p>No franchise leads yet</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold tracking-tight mb-8">Franchise Leads</h1>
      <div className="space-y-4">
        {leads.map((lead) => (
          <div key={lead.id} className="p-4 rounded-xl border border-border bg-background">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold">{lead.name}</h3>
                <div className="mt-1 flex flex-wrap gap-3 text-sm text-foreground/60">
                  <span>{lead.phone}</span>
                  <span>{lead.email}</span>
                  <span>{lead.city}</span>
                </div>
                {lead.interest && (
                  <p className="mt-1 text-sm text-foreground/50">Interest: {lead.interest}</p>
                )}
                <p className="text-xs text-foreground/30 mt-2">{formatDate(lead.created_at)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}