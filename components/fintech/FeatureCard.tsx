import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  dark?: boolean;
};

export function FeatureCard({ icon: Icon, title, description, dark }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5",
        dark
          ? "border-white/10 bg-white/5 hover:border-accent-cyan/30"
          : "border-border bg-white shadow-sm hover:shadow-md"
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
          dark
            ? "bg-accent-cyan/10 text-accent-cyan"
            : "bg-accent-blue/10 text-accent-blue"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className={cn("font-semibold", dark ? "text-white" : "text-primary")}>
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          dark ? "text-slate-400" : "text-muted-foreground"
        )}
      >
        {description}
      </p>
    </div>
  );
}
