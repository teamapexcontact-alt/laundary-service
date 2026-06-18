"use client";

import { useState, useCallback, useEffect, startTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatTime } from "@/lib/utils";

interface Pickup {
  id: string;
  name: string;
  phone: string;
  address: string;
  service_type: string | null;
  preferred_time: string | null;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  confirmed: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  completed: "bg-green-500/10 text-green-600 border-green-500/20",
  cancelled: "bg-red-500/10 text-red-600 border-red-500/20",
};

async function fetchPickups(): Promise<Pickup[]> {
  const token = localStorage.getItem("admin_token");
  if (!token) return [];

  const res = await fetch("/api/admin/pickups", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.data || [];
}

export default function AdminPickupsPage() {
  const [pickups, setPickups] = useState<Pickup[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPickups = useCallback(async () => {
    startTransition(() => setLoading(true));
    try {
      const data = await fetchPickups();
      startTransition(() => setPickups(data));
    } catch (err) {
      console.error(err);
      toast.error("Failed to load pickups");
    } finally {
      startTransition(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    loadPickups();
  }, [loadPickups]);

  const updateStatus = async (id: string, status: string) => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    try {
      const res = await fetch("/api/admin/pickups", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status }),
      });

      if (res.ok) {
        toast.success(`Pickup marked as ${status}`);
        loadPickups();
      } else {
        toast.error("Failed to update status");
      }
    } catch {
      toast.error("Network error");
    }
  };

  if (loading) {
    return <div className="text-sm text-foreground/50">Loading pickups...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold tracking-tight mb-8">Pickup Requests</h1>

      {pickups.length === 0 ? (
        <div className="text-center py-20 text-foreground/50">
          <p>No pickup requests yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {pickups.map((pickup) => (
            <div
              key={pickup.id}
              className="p-4 rounded-xl border border-border bg-background"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading font-semibold truncate">{pickup.name}</h3>
                    <Badge
                      variant="outline"
                      className={`text-xs capitalize ${statusColors[pickup.status] || ""}`}
                    >
                      {pickup.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-foreground/60">{pickup.phone}</p>
                  <p className="text-sm text-foreground/50 truncate">{pickup.address}</p>
                  {pickup.service_type && (
                    <p className="text-xs text-foreground/50 mt-1">Service: {pickup.service_type}</p>
                  )}
                  <p className="text-xs text-foreground/30 mt-2">
                    {formatDate(pickup.created_at)} at {formatTime(pickup.created_at)}
                  </p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {pickup.status === "pending" && (
                    <button
                      onClick={() => updateStatus(pickup.id, "confirmed")}
                      className="text-xs px-3 py-1.5 rounded-md bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors"
                    >
                      Confirm
                    </button>
                  )}
                  {pickup.status !== "completed" && pickup.status !== "cancelled" && (
                    <button
                      onClick={() => updateStatus(pickup.id, "completed")}
                      className="text-xs px-3 py-1.5 rounded-md bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors"
                    >
                      Complete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}