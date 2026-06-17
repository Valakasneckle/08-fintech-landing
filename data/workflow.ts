import {
  FileText,
  Send,
  Activity,
  CheckCircle2,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type WorkflowStep = {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    icon: FileText,
    title: "Create invoice",
    description:
      "Build branded invoices with line items, tax rules, and client details in minutes.",
  },
  {
    step: 2,
    icon: Send,
    title: "Send payment request",
    description:
      "Deliver secure payment links via email with automated reminders and due-date tracking.",
  },
  {
    step: 3,
    icon: Activity,
    title: "Track payment status",
    description:
      "Monitor pending, partial, and completed payments with real-time status updates.",
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: "Reconcile transaction",
    description:
      "Match incoming payments to invoices automatically and flag exceptions for review.",
  },
  {
    step: 5,
    icon: BarChart3,
    title: "Generate financial report",
    description:
      "Export cash flow summaries, aging reports, and reconciliation logs for stakeholders.",
  },
];
