import { CheckCircle2, Clock, XCircle } from "lucide-react";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Transaction } from "@/data/transactions";

const statusConfig = {
  completed: { icon: CheckCircle2, label: "Completed", className: "text-accent-emerald" },
  pending: { icon: Clock, label: "Pending", className: "text-amber-500" },
  failed: { icon: XCircle, label: "Failed", className: "text-red-500" },
};

type TransactionCardProps = {
  transaction: Transaction;
  dark?: boolean;
};

export function TransactionCard({ transaction, dark }: TransactionCardProps) {
  const { icon: StatusIcon, label, className } = statusConfig[transaction.status];
  const isPositive = transaction.amount > 0;

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 rounded-xl border px-4 py-3",
        dark ? "border-white/10 bg-white/5" : "border-border bg-muted/30"
      )}
    >
      <div className="min-w-0 flex-1">
        <p className={cn("truncate text-sm font-medium", dark ? "text-white" : "text-primary")}>
          {transaction.name}
        </p>
        <p className={cn("text-xs", dark ? "text-slate-400" : "text-muted-foreground")}>
          {transaction.category} · {transaction.date}
        </p>
      </div>
      <div className="text-right">
        <p
          className={cn(
            "text-sm font-semibold tabular-nums",
            isPositive ? "text-accent-emerald" : dark ? "text-slate-200" : "text-primary"
          )}
        >
          {formatCurrency(transaction.amount)}
        </p>
        <p className={cn("flex items-center justify-end gap-1 text-xs", className)}>
          <StatusIcon className="h-3 w-3" aria-hidden="true" />
          {label}
        </p>
      </div>
    </div>
  );
}
