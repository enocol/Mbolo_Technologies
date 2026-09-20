/**
 * Single source of truth for all copy on the home page.
 * Values marked PLACEHOLDER should be replaced with real company details
 * before the site goes live.
 */

export const company = {
  name: "Mbolo Technologies",
  legalName: "Mbolo Technologies SARL",
  tagline: "Software built in Cameroon, for Africa.",
  email: "support@mbolotechnologies.com", // PLACEHOLDER
  phone: "+237 6 78 80 52 48", // PLACEHOLDER
  whatsapp: "+44 7 5199 99 500", // PLACEHOLDER
  city: "Douala, Cameroon", // PLACEHOLDER
  address: "Bonamoussadi, Douala — Littoral, Cameroon", // PLACEHOLDER
  hours: "Mon – Fri, 8:00 – 18:00 (WAT)",
};

// Contact point published in the privacy policy for data-protection questions.
// Deliberately separate from `company` above, whose phone and address describe
// the Cameroon operation shown on the marketing pages.
export const privacyContact = {
  email: "support@mbolotechnologies.com",
  phone: "+44 751 9999500",
  post: "48 Leasowe Drive, Perton, Wolverhampton, WV6 7TU",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Why Mbolo", href: "#why" },
  { label: "How we work", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "5+", label: "Years of combined engineering experience" },
  { value: "2", label: "Languages supported end to end (FR / EN)" },
  { value: "24/7", label: "Monitoring on the products we run" },
];

export const trustPoints = [
  "Individuals & startups",
  "Small and medium businesses",
  "Large enterprises",
  "Public sector & NGOs",
];

export const services = [
  {
    icon: "code",
    title: "Custom software development",
    description:
      "Web platforms, internal tools and back-office systems built around how your business actually runs — not around a template.",
    tags: ["React", "Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: "mobile",
    title: "Mobile applications",
    description:
      "Android and iOS apps designed for real African network conditions: light payloads, offline tolerance and low data usage.",
    tags: ["React Native", "Flutter", "Offline-first"],
  },
  {
    icon: "wallet",
    title: "Payments & mobile money",
    description:
      "MTN Mobile Money, Orange Money and card integrations, with reconciliation and reporting your finance team can trust.",
    tags: ["MoMo", "Orange Money", "Cards"],
  },
  {
    icon: "cloud",
    title: "Cloud, DevOps & hosting",
    description:
      "Deployment pipelines, monitoring and infrastructure sized to your budget — from a single VPS to a multi-region setup.",
    tags: ["CI/CD", "Docker", "Observability"],
  },
  {
    icon: "chart",
    title: "Data & business intelligence",
    description:
      "Dashboards and reporting that turn day-to-day operations into decisions, with exports your accountants already use.",
    tags: ["Dashboards", "Reporting", "ETL"],
  },
  {
    icon: "support",
    title: "Support & maintenance",
    description:
      "Long-term care for the systems you depend on: SLAs, incident response, security updates and continuous improvement.",
    tags: ["SLA", "Training", "Upgrades"],
  },
];

export const product = {
  name: "Mbolo Eats",
  kicker: "Our own product, live in Cameroon",
  description:
    "Mbolo Eats is our food delivery platform operating in the Cameroonian market. We designed it, built it, and we run it every day — restaurants, couriers, customers and payments on one system.",
  points: [
    "Customer app, courier app and restaurant dashboard on a single platform",
    "Mobile money and cash-on-delivery, reconciled automatically",
    "Live dispatch and order tracking built for real city logistics",
    "Bilingual interface (French and English) from day one",
  ],
  note: "Running our own product keeps our engineering honest: every recommendation we make to a client is one we have already had to live with in production.",
};

export const differentiators = [
  {
    icon: "globe",
    title: "Local context, global standards",
    description:
      "We know Cameroonian payment rails, regulation and buying habits — and we hold our code to international engineering standards.",
  },
  {
    icon: "signal",
    title: "Built for real networks",
    description:
      "Low-bandwidth, intermittent connectivity and entry-level Android devices are design constraints we plan for, not surprises.",
  },
  {
    icon: "users",
    title: "One team, start to finish",
    description:
      "Product thinking, design, engineering and support come from the same team, so nothing gets lost in a hand-over.",
  },
  {
    icon: "shield",
    title: "You own what we build",
    description:
      "Source code, infrastructure and documentation are transferred to you. No lock-in, no hostage licences.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We sit with your team, map the workflow as it exists today and agree on what success will look like in numbers.",
  },
  {
    title: "Design",
    description:
      "Scope, architecture and interface prototypes — reviewed with you before a single line of production code is written.",
  },
  {
    title: "Build",
    description:
      "Two-week iterations with a working version you can click through at the end of each one. No black-box delivery.",
  },
  {
    title: "Run",
    description:
      "Deployment, training and a support agreement, so the system keeps earning its place long after launch.",
  },
];

// `value` must match the topic enum the contact API accepts; `label` is what the
// visitor sees in the form.
export const engagementOptions = [
  { value: "New Product Build", label: "New product build" },
  { value: "Existing System Upgrade", label: "Existing system upgrade" },
  { value: "Mobile Application", label: "Mobile application" },
  { value: "Payment/Mobile Money Integration", label: "Payments / mobile money integration" },
  { value: "Support and Maintenance", label: "Support & maintenance" },
  { value: "Something Else", label: "Something else" },
];

export const footerLinks = {
  Company: [
    { label: "Why Mbolo", href: "#why" },
    { label: "How we work", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Custom software", href: "#services" },
    { label: "Mobile applications", href: "#services" },
    { label: "Payments & mobile money", href: "#services" },
    { label: "Support & maintenance", href: "#services" },
  ],
  Products: [
    { label: "Mbolo Eats", href: "#products" },
    { label: "Partner with us", href: "#contact" },
  ],
  Legal: [{ label: "Privacy Policy", href: "/legal/privacy-policy" }],
};
