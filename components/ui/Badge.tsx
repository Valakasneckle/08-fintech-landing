import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "gold" | "dark";
  className?: string;
};

const variants = {
  default: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  success: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20",
  gold: "bg-accent-gold/10 text-amber-700 border-accent-gold/30",
  dark: "bg-white/10 text-accent-cyan border-white/10",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
