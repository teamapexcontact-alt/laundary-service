import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with DARK to WHITE. Call, WhatsApp, or visit our branches across Hyderabad. We're here to help with all your garment care needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}