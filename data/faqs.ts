export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Is FinEdge suitable for fintech startups?",
    answer:
      "Yes. FinEdge is designed for fintech startups, SaaS companies, and growing businesses that need payment management, invoicing, and financial analytics in one platform.",
  },
  {
    question: "How does FinEdge handle payment security?",
    answer:
      "FinEdge uses encrypted financial workflows, role-based permissions, and a PCI-ready payment structure. Activity logs provide audit-friendly visibility into every transaction.",
  },
  {
    question: "Can I integrate FinEdge with existing tools?",
    answer:
      "Growth and Business plans support API access and custom integrations. Starter includes core export features for accounting workflows.",
  },
  {
    question: "What financial reports are available?",
    answer:
      "Revenue trends, expense overviews, cash flow summaries, invoice aging, and payment success rates are available in the analytics dashboard with export options.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Starter is free for core features. Growth and Business plans include a 14-day trial with full access to analytics and team permissions.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most teams complete setup in under an hour. Create your account, connect payment methods, and start sending invoices the same day.",
  },
];

export const siteConfig = {
  name: "FinEdge",
  tagline:
    "Modern financial operations for growing businesses — payments, invoices, cash flow, and analytics in one platform.",
  url: "https://fintech-landing-website-5jg8wso3o-valakasneckles-projects.vercel.app",
  email: "hello@finedge.example.com",
};

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
];
