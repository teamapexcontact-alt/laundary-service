"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Camera } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { siteConfig, branches } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast.error("Please fill in your name and message");
      return;
    }

    const url = getWhatsAppUrl("inquiry", formData);
    window.open(url, "_blank");
    toast.success("Opening WhatsApp to continue");
  };

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
              We are here to help. Reach out to us anytime.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/20 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold">Call Us</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-sm text-foreground/60 hover:text-accent transition-colors">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/20 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold">Email Us</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground/60 hover:text-accent transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/20 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold">WhatsApp</p>
                    <a
                      href={getWhatsAppUrl("general")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/60 hover:text-accent transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-accent/20 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold">Follow Us</p>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/60 hover:text-accent transition-colors"
                    >
                      {siteConfig.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-accent/20 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold">Address</p>
                    <p className="text-sm text-foreground/60">
                      Hyderabad, Telangana<br />
                      {siteConfig.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="font-heading font-semibold">Our Branches</h3>
                {branches.map((branch) => (
                  <a
                    key={branch.id}
                    href={`/branches#${branch.id}`}
                    className="block p-3 rounded-lg border border-border hover:border-accent/20 transition-colors"
                  >
                    <p className="text-sm font-medium">{branch.name}</p>
                    <p className="text-xs text-foreground/50 mt-0.5">{branch.address}</p>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-border p-8 bg-card">
                <h2 className="text-2xl font-heading font-bold tracking-tight">
                  Send a Message
                </h2>
                <p className="mt-2 text-sm text-foreground/60">
                  We typically respond within a few minutes on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="branch">Select Branch</Label>
                    <Select
                      value={formData.branch}
                      onValueChange={(value) => setFormData({ ...formData, branch: value || "" })}
                    >
                      <SelectTrigger id="branch">
                        <SelectValue placeholder="Choose a branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {branches.map((branch) => (
                          <SelectItem key={branch.id} value={branch.name}>
                            {branch.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}