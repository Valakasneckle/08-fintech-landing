export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "FinEdge replaced three separate tools for invoicing, payments, and reporting. Our finance team finally has one source of truth.",
    author: "Sarah Chen",
    role: "CFO",
    company: "Northline Payments",
  },
  {
    quote:
      "The payment workflow is intuitive. We cut invoice follow-up time in half and improved our on-time collection rate significantly.",
    author: "Marcus Webb",
    role: "Head of Operations",
    company: "ScaleForge SaaS",
  },
  {
    quote:
      "Security and permissions were non-negotiable for us. FinEdge gave our auditors clear activity logs without slowing down the team.",
    author: "Elena Rodriguez",
    role: "VP Finance",
    company: "Meridian Logistics",
  },
];
