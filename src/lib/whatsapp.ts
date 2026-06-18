export const WHATSAPP_NUMBER = "919876543210";

export type WhatsAppType = "pickup" | "inquiry" | "franchise" | "general";

interface WhatsAppData {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
  city?: string;
  interest?: string;
}

const messages: Record<WhatsAppType, (data: WhatsAppData) => string> = {
  pickup: (data) =>
    `Hi, I'd like to schedule a pickup.\nName: ${data.name || "Not provided"}\nPhone: ${data.phone || "Not provided"}\nAddress: ${data.address || "Not provided"}\nService: ${data.service || "Not specified"}\nPreferred Time: ${data.message || "Flexible"}`,
  inquiry: (data) =>
    `Hi, I have an inquiry.\nName: ${data.name || "Not provided"}\nPhone: ${data.phone || "Not provided"}\nEmail: ${data.email || "Not provided"}\nMessage: ${data.message || "No message"}`,
  franchise: (data) =>
    `Hi, I'm interested in franchising.\nName: ${data.name || "Not provided"}\nPhone: ${data.phone || "Not provided"}\nEmail: ${data.email || "Not provided"}\nCity: ${data.city || "Not provided"}\nInterest: ${data.interest || "Not specified"}`,
  general: (data) =>
    `Hi, I'd like to know more about your services.\nName: ${data.name || "Not provided"}\nPhone: ${data.phone || "Not provided"}\nMessage: ${data.message || ""}`,
};

export function getWhatsAppUrl(type: WhatsAppType, data?: WhatsAppData): string {
  const message = messages[type](data || {});
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}