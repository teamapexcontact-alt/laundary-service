import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyMobileActions } from "@/components/sticky-mobile-actions";
import { Toaster } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "APEX Laundry Service | Premium Laundry & Garment Care Hyderabad",
    template: "%s | APEX Laundry Service",
  },
  description: "Premium laundry, dry cleaning, shoe & bag care with pickup & delivery across Hyderabad. Book via WhatsApp.",
  keywords: [
    "premium laundry Hyderabad",
    "dry cleaning Hyderabad",
    "laundry pickup Hyderabad",
    "shoe cleaning Hyderabad",
    "bag cleaning Hyderabad",
    "ironing services Hyderabad",
    "garment care Hyderabad",
    "APEX Laundry Service",
  ],
  authors: [{ name: "APEX Laundry Service" }],
  creator: "APEX Laundry Service",
  publisher: "APEX Laundry Service",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://apexlaundryservice.com",
    siteName: "APEX Laundry Service",
    title: "APEX Laundry Service | Premium Laundry & Garment Care Hyderabad",
    description: "Premium laundry, dry cleaning, shoe & bag care with pickup & delivery across Hyderabad.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "APEX Laundry Service - Premium Laundry & Garment Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Laundry Service | Premium Laundry & Garment Care Hyderabad",
    description: "Premium laundry, dry cleaning, shoe & bag care with pickup & delivery across Hyderabad.",
    images: ["/images/og-image.jpg"],
    creator: "@apexlaundryservice",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <StickyMobileActions />
        </Providers>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0B0B0B",
              color: "#FFFFFF",
              border: "1px solid #E5E5E5",
            },
          }}
        />
      </body>
    </html>
  );
}