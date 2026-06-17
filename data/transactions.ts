export type Transaction = {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  status: "completed" | "pending" | "failed";
};

export const transactions: Transaction[] = [
  {
    id: "tx-001",
    name: "Enterprise Client — Q1 Retainer",
    category: "Revenue",
    date: "Today",
    amount: 48500,
    status: "completed",
  },
  {
    id: "tx-002",
    name: "AWS Infrastructure",
    category: "Software",
    date: "Yesterday",
    amount: -8420,
    status: "completed",
  },
  {
    id: "tx-003",
    name: "Vendor Payment — Logistics Co.",
    category: "Operations",
    date: "Mar 14",
    amount: -12600,
    status: "pending",
  },
  {
    id: "tx-004",
    name: "SaaS Subscription Bundle",
    category: "Software",
    date: "Mar 12",
    amount: -3200,
    status: "completed",
  },
  {
    id: "tx-005",
    name: "Invoice #1042 — Acme Corp",
    category: "Revenue",
    date: "Mar 10",
    amount: 22400,
    status: "completed",
  },
  {
    id: "tx-006",
    name: "Payroll — March Cycle",
    category: "Payroll",
    date: "Mar 8",
    amount: -142000,
    status: "completed",
  },
];
