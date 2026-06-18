"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Package, MessageSquare, Users, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const adminNav = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Pickups", href: "/admin/pickups", icon: Package },
  { name: "Contacts", href: "/admin/contacts", icon: MessageSquare },
  { name: "Leads", href: "/admin/leads", icon: Users },
];

function subscribeToStorage(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getTokenSnapshot() {
  return localStorage.getItem("admin_token");
}

function useAdminToken() {
  return useSyncExternalStore(
    subscribeToStorage,
    getTokenSnapshot,
    () => null
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const token = useAdminToken();

  useEffect(() => {
    if (pathname !== "/admin/login" && !token) {
      router.push("/admin/login");
    }
  }, [token, pathname, router]);

  if (!token && pathname !== "/admin/login") {
    return null;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    window.dispatchEvent(new Event("storage"));
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-foreground/50 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4 inline mr-1" />
            Back to Site
          </Link>
          <span className="text-sm text-foreground/30">|</span>
          <span className="text-sm font-heading font-bold">
            {siteConfig.name} Admin
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-destructive transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
      <div className="flex">
        <nav className="w-64 min-h-[calc(100vh-4rem)] border-r border-border bg-background p-4 hidden lg:block">
          <div className="space-y-1">
            {adminNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-accent/10 text-accent"
                      : "text-foreground/60 hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}