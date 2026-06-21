import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise",
  description: "Join Hyderabad's fastest-growing premium garment care brand. Franchise opportunities available across Hyderabad with APEX Laundry Service.",
};

export default function FranchiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}