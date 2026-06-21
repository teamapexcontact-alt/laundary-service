export const siteConfig = {
  name: "APEX Laundry Service",
  tagline: "Premium Laundry & Garment Care",
  description: "Door-to-door laundry, picked up and delivered fresh.",
  url: "https://apexlaundryservice.com",
  instagram: "@apexlaundryservice",
  instagramUrl: "https://instagram.com/apexlaundryservice",
  phone: "+91 9876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@apexlaundryservice.com",
  workingHours: "Mon - Sun: 8:00 AM - 8:00 PM",
  trustBadges: [
    "Insured Against Damage",
    "Hygiene Certified",
    "Eco-Friendly Detergents",
  ],
  subscriptionPlan: {
    name: "Unlimited Wash",
    price: 1999,
    unit: "/month",
    description: "Up to 30kg of laundry every month. Free pickup & delivery.",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Schedule", href: "/schedule" },
  { name: "Services", href: "/services" },
  { name: "Track", href: "/track" },
  { name: "Branches", href: "/branches" },
  { name: "Account", href: "/account" },
  { name: "Contact", href: "/contact" },
];

export const branches = [
  {
    id: "dairy-farm-road",
    name: "Dairy Farm Road",
    address: "Dairy Farm Road, Near Sub Station, Alwal, Hyderabad, Telangana 500010",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    pincodes: ["500010", "500011", "500012"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDairy+Farm+Road!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "suchitra",
    name: "Suchitra",
    address: "Suchitra Circle, Hyderabad, Telangana 500067",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    pincodes: ["500067", "500068", "500069"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSuchitra!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "kompally",
    name: "Kompally",
    address: "Kompally, Hyderabad, Telangana 500014",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    pincodes: ["500014", "500015", "500016"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKompally!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "gundlapochampally",
    name: "Gundlapochampally",
    address: "Gundlapochampally, Hyderabad, Telangana 500010",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    pincodes: ["500010", "500020", "500021"],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGundlapochampally!5e0!3m2!1sen!2sin!4v1",
  },
];

export const allPincodes = branches.flatMap((b) => b.pincodes);

export function checkServiceability(pincode: string): boolean {
  return allPincodes.includes(pincode);
}

export const services = [
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description: "Machine wash with eco-friendly detergents, dried and neatly folded. Perfect for everyday clothes.",
    price: "₹99/kg",
    minOrder: "3 kg minimum",
    turnaround: "24 hrs",
    benefits: ["Eco-friendly detergents", "Color-sorted washes", "Neatly folded", "Same-day available"],
  },
  {
    id: "dry-clean",
    title: "Dry Cleaning",
    description: "Professional solvent-based cleaning for suits, formal wear, and delicate fabrics. Expert stain removal.",
    price: "₹249/item",
    minOrder: "2 items minimum",
    turnaround: "48 hrs",
    benefits: ["Solvent-based cleaning", "Stain removal", "Fabric protection", "Wrinkle-free finish"],
  },
  {
    id: "ironing",
    title: "Ironing & Pressing",
    description: "Professional steam ironing with crisp, precise finishes. Each garment pressed to perfection.",
    price: "₹29/item",
    minOrder: "5 items minimum",
    turnaround: "24 hrs",
    benefits: ["Steam pressed", "Crisp creases", "Wrinkle removal", "Same-day available"],
  },
  {
    id: "shoe-care",
    title: "Shoe Cleaning",
    description: "Deep cleaning, deodorizing, and restoration for sneakers, leather shoes, and more.",
    price: "₹199/pair",
    minOrder: "1 pair",
    turnaround: "48 hrs",
    benefits: ["Deep cleaning", "Deodorizing", "Material-specific care", "Color restoration"],
  },
];

export const beforeAfterPhotos = [
  {
    id: 1,
    label: "Stain removal — curry stain on white fabric",
    result: "Completely removed",
    category: "stain-removal",
  },
  {
    id: 2,
    label: "Shoe restoration — old sneakers",
    result: "Like new",
    category: "shoe-care",
  },
  {
    id: 3,
    label: "Formal shirt — collar ring removal",
    result: "Spotless",
    category: "dry-cleaning",
  },
  {
    id: 4,
    label: "White shirt revival — yellow collar stain",
    result: "Bright white",
    category: "stain-removal",
  },
  {
    id: 5,
    label: "Silk saree — water stain removal",
    result: "Restored",
    category: "dry-cleaning",
  },
  {
    id: 6,
    label: "Sneaker deep clean — grime removal",
    result: "Like new",
    category: "shoe-care",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Priya S.",
    location: "Kompally",
    text: "Absolutely love their service! My silk sarees came back looking brand new. The pickup and delivery is so convenient.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul M.",
    location: "Suchitra",
    text: "Best dry cleaning in Hyderabad. My suits have never looked better. Highly recommended for formal wear.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya K.",
    location: "Dairy Farm Road",
    text: "Their shoe cleaning service is amazing! They restored my old sneakers to almost new condition.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram R.",
    location: "Gundlapochampally",
    text: "Regular customer for months now. Consistent quality, timely delivery, and great customer service.",
    rating: 5,
  },
  {
    id: 5,
    name: "Neha S.",
    location: "Alwal",
    text: "The stain removal is magic. They got months-old turmeric stains out of my daughter's dress. Lifesavers!",
    rating: 5,
  },
  {
    id: 6,
    name: "Arun K.",
    location: "Kompally",
    text: "I travel for work and their subscription plan is a godsend. Clothes are always waiting for me when I return.",
    rating: 5,
  },
  {
    id: 7,
    name: "Meera V.",
    location: "Suchitra",
    text: "On-time pickup, careful handling, and fresh-smelling clothes every single time. No complaints at all.",
    rating: 5,
  },
  {
    id: 8,
    name: "Sandeep T.",
    location: "Kompally",
    text: "Professional, reliable, and fair pricing. The subscription saves us both time and money as a family.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "What are your pickup and delivery timings?",
    a: "We operate from 8:00 AM to 8:00 PM, Monday through Sunday. Pickups can be scheduled at your convenience within these hours.",
  },
  {
    q: "How long does the service take?",
    a: "Standard turnaround is 24-48 hours. Express same-day service is available for ironing and select laundry items.",
  },
  {
    q: "How do I know if you serve my area?",
    a: "Enter your pincode in the checker on our homepage. We currently serve Dairy Farm Road, Suchitra, Kompally, Gundlapochampally, and surrounding areas.",
  },
  {
    q: "What happens if my clothes get damaged?",
    a: "We are fully insured against damage. In the rare event something goes wrong, we'll make it right.",
  },
  {
    q: "How do I book a pickup?",
    a: "Enter your address on our homepage to check serviceability, then select your date, time, and services. Confirmation takes seconds.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, UPI (GPay, PhonePe, Paytm), and bank transfers. Payment is collected on delivery.",
  },
  {
    q: "Do you offer a monthly subscription?",
    a: "Yes! Our Unlimited Wash plan at ₹1,999/month covers up to 30kg of laundry with free pickup and delivery.",
  },
];

export const pickupFlow = [
  {
    step: 1,
    title: "Schedule",
    description: "Choose your date, time, and services. Enter your address and we'll confirm instantly.",
  },
  {
    step: 2,
    title: "We Pick Up & Wash",
    description: "Our team collects your clothes at the scheduled time. We wash, dry, and press with care.",
  },
  {
    step: 3,
    title: "Delivered Fresh",
    description: "Freshly cleaned and pressed clothes delivered back to your door. Tracking included.",
  },
];

export const orderStatuses = [
  { key: "picked-up", label: "Picked up", description: "We've collected your clothes" },
  { key: "at-facility", label: "At facility", description: "Your order has reached our cleaning center" },
  { key: "washing", label: "Washing", description: "Your clothes are being cleaned" },
  { key: "quality-check", label: "Quality check", description: "Each item is inspected for quality" },
  { key: "out-for-delivery", label: "Out for delivery", description: "Your order is on its way back" },
  { key: "delivered", label: "Delivered", description: "Delivered and ready to wear" },
];