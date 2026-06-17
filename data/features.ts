import {
  BarChart3,
  CreditCard,
  FileText,
  PieChart,
  Receipt,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: CreditCard,
    title: "Payment Management",
    description:
      "Collect, route, and reconcile payments across channels with real-time status tracking and automated notifications.",
  },
  {
    icon: FileText,
    title: "Invoice Automation",
    description:
      "Generate branded invoices, send payment requests, and sync status updates without manual follow-up.",
  },
  {
    icon: PieChart,
    title: "Cash Flow Insights",
    description:
      "Forecast runway, monitor inflows and outflows, and spot liquidity risks before they affect operations.",
  },
  {
    icon: Receipt,
    title: "Expense Tracking",
    description:
      "Categorize spending, attach receipts, and enforce policy rules across teams and departments.",
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description:
      "Visualize revenue trends, payment success rates, and invoice aging in a unified analytics view.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Encrypted workflows, activity logging, and permission controls designed for financial operations.",
  },
  {
    icon: Users,
    title: "Team Permissions",
    description:
      "Role-based access for finance, operations, and leadership with audit-friendly activity history.",
  },
  {
    icon: Zap,
    title: "Real-Time Reporting",
    description:
      "Live dashboards and exportable reports that keep stakeholders aligned on financial performance.",
  },
];
