// All site content and contact details live here.
// Edit this file to update text across the whole site.

export const contact = {
  email: "ilumotechnologies@gmail.com",
  phone: "+2349017471535",
  phoneDisplay: "0901 747 1535",
};

export const site = {
  name: "ilumo Technologies",
  title: "ilumo Technologies — Technology That Works for People and Businesses",
  description:
    "ilumo Technologies builds AI agents and automations that help brands and businesses work smarter, alongside education technology, custom software, digital media and practical digital skills training.",
  motto: "We build. We empower. We help you grow.",
};

export type DomainId =
  | "ai-automation"
  | "education-technology"
  | "software-development"
  | "digital-media"
  | "ai-hub"
  | "digital-skills-training";

export interface Domain {
  id: DomainId; // also the page URL: /services/<id>
  num: string;
  title: string;
  shortTitle: string;
  label: string; // short caption under the number on the services list
  tags: string[]; // short chips on the services list
  tagline: string;
  description: string;
  offers: string[];
  whoFor: string;
  cardLink: string;
  ecosystemNote: string;
  cta: { label: string; subject: string };
  // optional clip shown on the service page in place of the illustration; ratio defaults to "16 / 9"
  video?: { src: string; ratio?: string };
}

export const domains: Domain[] = [
  {
    id: "ai-automation",
    num: "01",
    title: "Agentic AI & Automation",
    shortTitle: "AI & Automation",
    label: "AI Agents",
    tags: ["AI agents", "Chatbots", "Automation", "Integrations"],
    tagline: "AI that does the work, so your team can focus on growth",
    description:
      "We design and set up AI agents and automated workflows that handle repetitive tasks, answer customers around the clock, and connect the tools your business already uses.",
    offers: [
      "AI customer-service agents and chatbots for your website, WhatsApp and Instagram",
      "Automated lead capture and follow-up",
      "AI assistants for emails, reports and document processing",
      "Workflow automation across your forms, spreadsheets, email, CRM and payments",
      "Content and social media automation",
      "Setup, monitoring and ongoing support",
    ],
    whoFor: "Brands, small businesses, startups and organisations that want to save time, cut costs and respond to customers faster.",
    cardLink: "Automate your business",
    ecosystemNote: "AI agents and business automation",
    cta: { label: "Book a free automation consult", subject: "AI automation consultation" },
  },
  {
    id: "education-technology",
    num: "02",
    title: "Education Technology",
    shortTitle: "Education Technology",
    label: "EdTech",
    tags: ["Assessment", "AI learning", "E-exams", "School software"],
    tagline: "Making education smarter with technology",
    description:
      "We build digital solutions that help schools manage assessments, automate grading, support teachers, and improve how students learn.",
    offers: [
      "School management and assessment tools",
      "AI-powered learning platforms",
      "Digital examination systems",
      "Educational software",
    ],
    whoFor: "School owners, administrators, teachers and students.",
    cardLink: "Explore EdTech",
    ecosystemNote: "Our education products",
    cta: { label: "Request a demo", subject: "School solutions demo request" },
    video: { src: "/videos/students-online-exam.mp4" },
  },
  {
    id: "software-development",
    num: "03",
    title: "Software Development & Digital Solutions",
    shortTitle: "Software Development",
    label: "Software",
    tags: ["Websites", "Web apps", "Mobile apps", "Custom software"],
    tagline: "Turning ideas into working digital products",
    description:
      "We design and develop websites, mobile applications, and custom software that help brands and businesses solve problems, serve customers, and grow.",
    offers: [
      "Business websites",
      "Web applications",
      "Mobile apps",
      "Custom business software",
    ],
    whoFor: "Businesses, startups, brands and organisations that need a custom-built solution.",
    cardLink: "Build with us",
    ecosystemNote: "Digital products for businesses",
    cta: { label: "Start your project", subject: "New software project" },
    video: { src: "/videos/tech.mp4", ratio: "1 / 1" },
  },
  {
    id: "digital-media",
    num: "04",
    title: "Digital Media & Brand Management",
    shortTitle: "Digital Media",
    label: "Media",
    tags: ["Social media", "Content", "Marketing", "Branding"],
    tagline: "Helping brands build a stronger online presence",
    description:
      "We help businesses manage their digital presence, communicate with their audience, and maintain a consistent, professional image online.",
    offers: [
      "Social media management",
      "Content creation",
      "Digital marketing",
      "Brand communication",
      "Ongoing website and application management",
    ],
    whoFor: "Brand managers, business owners and organisations that want to show up well online.",
    cardLink: "Grow your brand",
    ecosystemNote: "Brand growth and management",
    cta: { label: "Grow your brand", subject: "Brand management enquiry" },
  },
  {
    id: "ai-hub",
    num: "05",
    title: "AI & Technology Media",
    shortTitle: "ilumo AI Hub",
    label: "AI Hub",
    tags: ["AI news", "Tool reviews", "Tutorials", "Explainers"],
    tagline: "Making the latest technology easier to understand",
    description:
      "Through <strong>ilumo AI Hub</strong>, we share useful updates on artificial intelligence, emerging technologies, new digital tools, and industry trends.",
    offers: [
      "AI and tech news",
      "Tool reviews",
      "Practical tutorials",
      "Technology explainers",
      "Insights for everyday life and business",
    ],
    whoFor: "Anyone curious about AI and how new technology can be put to work.",
    cardLink: "Visit ilumo AI Hub",
    ecosystemNote: "Technology news and insights",
    cta: { label: "Follow ilumo AI Hub", subject: "ilumo AI Hub" },
  },
  {
    id: "digital-skills-training",
    num: "06",
    title: "Digital Skills Training & Capacity Building",
    shortTitle: "Digital Skills Training",
    label: "Training",
    tags: ["AI literacy", "Coding", "Workshops", "Corporate"],
    tagline: "Equipping people with skills for today's digital world",
    description:
      "We train individuals, students, schools, teams, and businesses in practical technology skills that can support learning, productivity, and career growth.",
    offers: [
      "AI literacy and prompting",
      "Software development",
      "Digital skills",
      "Technology workshops",
      "School training programmes",
      "Customised corporate training",
    ],
    whoFor: "Individuals, students, schools, teams and businesses.",
    cardLink: "Start learning",
    ecosystemNote: "For individuals, schools & organisations",
    cta: { label: "Book a training", subject: "Training enquiry" },
  },
];

export const domainHref = (id: DomainId) => `/services/${id}`;
export const getDomain = (id: DomainId) => domains.find((d) => d.id === id)!;

// Link to the contact page with the form pre-filled
export const contactHref = (interest: DomainId | "other", subject?: string) => {
  const params = new URLSearchParams({ interest });
  if (subject) params.set("subject", subject);
  return `/contact?${params}`;
};

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: domains.map((d) => ({ label: d.shortTitle, href: domainHref(d.id) })),
  },
  { label: "Products", href: "/products" },
  {
    label: "AI & Automation",
    href: domainHref("ai-automation"),
    children: [
      { label: "Agentic AI & Automation", href: domainHref("ai-automation") },
      { label: "ilumo AI Hub", href: domainHref("ai-hub") },
    ],
  },
  { label: "About", href: "/about" },
];

export const products = [
  {
    id: "resultpeak-ai",
    name: "ResultPeak AI",
    badge: "RP",
    summary: "Assessment and result management for schools.",
    description:
      "Assessment and result management that helps schools automate grading and process results faster and more accurately.",
  },
  {
    id: "jdsmartlearn-ai",
    name: "JDSmartLearn AI",
    badge: "JD",
    summary: "An AI-powered learning platform.",
    description:
      "An AI-powered learning platform that supports teachers and helps students learn in a smarter, more personal way.",
  },
];

export const steps = [
  { title: "Tell us your goal", text: "Share the problem you want to solve or the skill you want to build." },
  { title: "We plan together", text: "We recommend the right solution, timeline and approach for you." },
  { title: "We build or train", text: "We deliver the product, campaign or training — with you at every step." },
  { title: "You grow", text: "We stay with you through support, management and improvement." },
];
