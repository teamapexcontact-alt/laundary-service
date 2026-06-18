
export const siteConfig = {
  name: "DARK to WHITE",
  tagline: "Premium Laundry & Garment Care",
  description: "Premium laundry and garment care services with pickup & delivery across Hyderabad.",
  url: "https://darktowhite.com",
  instagram: "@dark_towhite",
  instagramUrl: "https://instagram.com/dark_towhite",
  phone: "+91 9876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@darktowhite.com",
  workingHours: "Mon - Sun: 8:00 AM - 8:00 PM",
  openGraph: {
    image: "/images/og-image.jpg",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Branches", href: "/branches" },
  { name: "About", href: "/about" },
  { name: "Franchise", href: "/franchise" },
  { name: "Contact", href: "/contact" },
];

export const branches = [
  {
    id: "dairy-farm-road",
    name: "Dairy Farm Road",
    address: "Dairy Farm Road, Near Sub Station, Alwal, Hyderabad, Telangana 500010",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDairy+Farm+Road!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "suchitra",
    name: "Suchitra",
    address: "Suchitra Circle, Hyderabad, Telangana 500067",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSuchitra!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "kompally",
    name: "Kompally",
    address: "Kompally, Hyderabad, Telangana 500014",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKompally!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: "gundlapochampally",
    name: "Gundlapochampally",
    address: "Gundlapochampally, Hyderabad, Telangana 500010",
    phone: "+91 9876543210",
    hours: "8:00 AM - 8:00 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGundlapochampally!5e0!3m2!1sen!2sin!4v1",
  },
];

export const services = [
  {
    id: "laundry",
    title: "Laundry Washing",
    description: "Premium machine & hand wash for all fabric types. We treat every garment with care using gentle, eco-friendly detergents.",
    benefits: ["Eco-friendly detergents", "Gentle fabric care", "Separate color sorting", "Stain treatment"],
    icon: "Shirt",
  },
  {
    id: "dry-clean",
    title: "Dry Cleaning",
    description: "Professional dry cleaning for suits, formal wear, and delicate fabrics. Expert stain removal and fabric protection.",
    benefits: ["Solvent-based cleaning", "Formal wear specialist", "Delicate fabric safe", "Wrinkle-free finish"],
    icon: "Shirt",
  },
  {
    id: "ironing",
    title: "Ironing",
    description: "Professional steam ironing with crisp, precise finishes. Each garment is pressed to perfection.",
    benefits: ["Steam pressed", "Crisp creases", "Wrinkle removal", "Same-day available"],
    icon: "Shirt",
  },
  {
    id: "shoe-care",
    title: "Shoe Cleaning",
    description: "Complete shoe care service including cleaning, deodorizing, and restoration for all materials.",
    benefits: ["Deep cleaning", "Deodorizing treatment", "Material-specific care", "Color restoration"],
    icon: "Shirt",
  },
  {
    id: "bag-care",
    title: "Bag Cleaning",
    description: "Specialized cleaning for handbags, backpacks, and luggage. Gentle yet effective cleaning for all materials.",
    benefits: ["Material-safe cleaning", "Stain removal", "Leather conditioning", "Shape preservation"],
    icon: "Shirt",
  },
  {
    id: "teddy-care",
    title: "Teddy Cleaning",
    description: "Gentle cleaning for stuffed toys and soft items. Safe, hygienic cleaning that preserves softness and shape.",
    benefits: ["Gentle wash cycle", "Hypoallergenic process", "Shape retention", "Safe for kids"],
    icon: "Shirt",
  },
  {
    id: "color-restoration",
    title: "Colour Restoration",
    description: "Revive faded garments with our professional colour restoration treatment. Breathe new life into your favourites.",
    benefits: ["Fade reversal", "Colour refresh", "Fabric-safe dyes", "Even tone finish"],
    icon: "Shirt",
  },
];

export const whyChooseUs = [
  {
    title: "Premium Care",
    description: "Every garment receives premium, professional care with attention to detail.",
    icon: "Sparkles",
  },
  {
    title: "Pickup & Delivery",
    description: "Free pickup and delivery right to your doorstep. Convenient scheduling.",
    icon: "Truck",
  },
  {
    title: "Multiple Branches",
    description: "4 convenient locations across Hyderabad. Always near you.",
    icon: "MapPin",
  },
  {
    title: "Fabric Safety",
    description: "Gentle, fabric-safe processes. Eco-friendly detergents used.",
    icon: "ShieldCheck",
  },
  {
    title: "Expert Handling",
    description: "Trained professionals with years of garment care experience.",
    icon: "Users",
  },
  {
    title: "Quick Service",
    description: "Fast turnaround times. Same-day services available.",
    icon: "Clock",
  },
];

export const testimonials = [
  {
    name: "Priya S.",
    location: "Kompally",
    content: "Absolutely love their service! My silk sarees came back looking brand new. The pickup and delivery is so convenient.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    location: "Suchitra",
    content: "Best dry cleaning in Hyderabad. My suits have never looked better. Highly recommended for formal wear.",
    rating: 5,
  },
  {
    name: "Ananya K.",
    location: "Dairy Farm Road",
    content: "Their shoe cleaning service is amazing! They restored my old sneakers to almost new condition.",
    rating: 5,
  },
  {
    name: "Vikram R.",
    location: "Gundlapochampally",
    content: "Regular customer for months now. Consistent quality, timely delivery, and great customer service.",
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
    q: "How do you ensure garment safety?",
    a: "We use eco-friendly detergents, separate color sorting, and fabric-specific cleaning processes. Each garment is handled with care.",
  },
  {
    q: "Which areas do you serve?",
    a: "We currently serve Dairy Farm Road, Suchitra, Kompally, Gundlapochampally, and surrounding areas in Hyderabad.",
  },
  {
    q: "How do I book a pickup?",
    a: "You can book through our website form, or simply message us on WhatsApp. We'll confirm and send a team member.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, UPI (GPay, PhonePe, Paytm), and bank transfers. Payment is collected on delivery.",
  },
];

export const pickupFlow = [
  {
    step: 1,
    title: "Book Pickup",
    description: "Schedule a pickup through our website or WhatsApp. Choose your preferred time slot.",
  },
  {
    step: 2,
    title: "We Collect",
    description: "Our team arrives at your doorstep to collect your garments. Safe and contactless.",
  },
  {
    step: 3,
    title: "Fresh Delivery",
    description: "Get your freshly cleaned and pressed garments delivered back to you.",
  },
];