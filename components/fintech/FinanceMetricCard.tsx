import { cn } from "@/lib/utils";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";

type FinanceMetricCardProps = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  dark?: boolean;
};

export function FinanceMetricCard({
  label,
  value,
  change,
  trend,
  dark,
}: FinanceMetricCardProps) {
  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div
      className={cn(
        "rounded-2xl border p-5",
        dark
          ? "border-white/10 bg-white/5"
          : "border-border bg-white shadow-sm"
      )}
    >
      <p
        className={cn(
          "text-sm font-medium",
          dark ? "text-slate-400" : "text-muted-foreground"
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          "mt-2 text-2xl font-bold tabular-nums",
          dark ? "text-white" : "text-primary"
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-2 flex items-center gap-1 text-xs font-medium",
          trend === "up" && "text-accent-emerald",
          trend === "down" && "text-red-400",
          trend === "neutral" && (dark ? "text-slate-400" : "text-muted-foreground")
        )}
      >
        <TrendIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {change}
      </p>
    </div>
  );
}
