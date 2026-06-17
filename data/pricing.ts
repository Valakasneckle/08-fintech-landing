export type PricingPlan = {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: 0,
    period: "month",
    description: "For early-stage teams getting started with financial operations.",
    features: [
      "Up to 50 invoices / month",
      "Basic payment tracking",
      "2 team members",
      "Expense categorization",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: 79,
    period: "month",
    description: "For growing businesses managing higher payment volume.",
    features: [
      "Unlimited invoices",
      "Cash flow insights",
      "10 team members",
      "Financial analytics",
      "Role-based permissions",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: 199,
    period: "month",
    description: "For finance teams needing advanced controls and reporting.",
    features: [
      "Everything in Growth",
      "Unlimited team members",
      "Audit activity logs",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];
