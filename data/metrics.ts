export type Metric = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
};

export const dashboardMetrics: Metric[] = [
  {
    label: "Total Balance",
    value: "$1,284,920",
    change: "+4.2% vs last month",
    trend: "up",
  },
  {
    label: "Monthly Revenue",
    value: "$428,600",
    change: "+12.8% vs last month",
    trend: "up",
  },
  {
    label: "Cash Flow",
    value: "$186,240",
    change: "+6.1% net inflow",
    trend: "up",
  },
  {
    label: "Payment Volume",
    value: "$2.4M",
    change: "847 transactions",
    trend: "neutral",
  },
  {
    label: "Pending Invoices",
    value: "$94,320",
    change: "23 open invoices",
    trend: "down",
  },
  {
    label: "Financial Health",
    value: "92/100",
    change: "Strong liquidity position",
    trend: "up",
  },
];

export const analyticsCards = [
  {
    title: "Revenue Trend",
    value: "+18.4%",
    subtitle: "Quarter-over-quarter growth",
    bars: [40, 55, 48, 62, 58, 72, 68, 80, 76, 88, 84, 92],
  },
  {
    title: "Expenses Overview",
    value: "$312K",
    subtitle: "Operating spend this quarter",
    bars: [70, 65, 68, 62, 58, 55, 52, 54, 50, 48, 46, 44],
  },
  {
    title: "Payment Success Rate",
    value: "98.7%",
    subtitle: "Last 30 days",
    bars: [95, 96, 97, 96, 98, 99, 98, 97, 99, 98, 99, 99],
  },
  {
    title: "Invoice Aging",
    value: "12 days",
    subtitle: "Average time to payment",
    bars: [22, 20, 18, 16, 15, 14, 13, 12, 12, 11, 12, 12],
  },
  {
    title: "Monthly Cash Flow",
    value: "$186K",
    subtitle: "Net positive inflow",
    bars: [30, 45, 38, 52, 48, 60, 55, 68, 62, 74, 70, 82],
  },
  {
    title: "Customer Payment Behavior",
    value: "76%",
    subtitle: "On-time payment rate",
    bars: [62, 64, 66, 68, 70, 71, 72, 73, 74, 75, 76, 76],
  },
];

export const spendingCategories = [
  { name: "Payroll", amount: 142000, percent: 38 },
  { name: "Software", amount: 48000, percent: 13 },
  { name: "Operations", amount: 62000, percent: 17 },
  { name: "Marketing", amount: 36000, percent: 10 },
  { name: "Other", amount: 82000, percent: 22 },
];
