"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";

interface Contact {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  message: string;
  branch: string | null;
  created_at: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    fetch("/api/admin/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => setContacts(data.data || []))
      .catch(() => toast.error("Failed to load contacts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-sm text-foreground/50">Loading contacts...</div>;
  }

  if (contacts.length === 0) {
    return (
      <div className="text-center py-20 text-foreground/50">
        <p>No contact inquiries yet</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold tracking-tight mb-8">Contact Inquiries</h1>
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="p-4 rounded-xl border border-border bg-background">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold">{contact.name}</h3>
                <div className="mt-1 flex flex-wrap gap-3 text-sm text-foreground/60">
                  {contact.phone && <span>{contact.phone}</span>}
                  {contact.email && <span>{contact.email}</span>}
                  {contact.branch && <span>Branch: {contact.branch}</span>}
                </div>
                <p className="mt-2 text-sm text-foreground/50 leading-relaxed">{contact.message}</p>
                <p className="text-xs text-foreground/30 mt-2">{formatDate(contact.created_at)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}