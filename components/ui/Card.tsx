import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function Card({ children, className, dark }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        dark
          ? "border-white/10 bg-surface-dark-elevated text-slate-100"
          : "border-border bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
