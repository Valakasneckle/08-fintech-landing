import {
  Building2,
  Eye,
  KeyRound,
  Lock,
  ScrollText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type SecurityFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const securityFeatures: SecurityFeature[] = [
  {
    icon: Lock,
    title: "Encrypted financial workflows",
    description:
      "TLS encryption in transit and encrypted storage for sensitive financial data at rest.",
  },
  {
    icon: KeyRound,
    title: "Role-based permissions",
    description:
      "Granular access controls for finance, operations, and admin roles across every module.",
  },
  {
    icon: ShieldCheck,
    title: "Secure payment operations",
    description:
      "PCI-ready workflow structure with tokenized payment handling and secure API patterns.",
  },
  {
    icon: ScrollText,
    title: "Audit-friendly activity logs",
    description:
      "Immutable event logs for payments, invoice changes, and permission updates.",
  },
  {
    icon: Eye,
    title: "Privacy-focused product design",
    description:
      "Data minimization principles and clear visibility into what information is collected.",
  },
  {
    icon: Building2,
    title: "Compliance-ready structure",
    description:
      "Architecture designed to support SOC 2, GDPR, and financial reporting requirements.",
  },
];
