import { Button } from "@/components/ui/Button";
import type { PricingPlan } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type PricingCardProps = {
  plan: PricingPlan;
  annual?: boolean;
};

export function PricingCard({ plan, annual }: PricingCardProps) {
  const price =
    plan.price === 0
      ? "Free"
      : annual
        ? `$${Math.round(plan.price * 0.8)}`
        : `$${plan.price}`;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8",
        plan.highlighted
          ? "border-accent-cyan/40 bg-gradient-to-b from-accent-blue/10 to-accent-cyan/5 shadow-xl shadow-accent-blue/10"
          : "border-border bg-white shadow-sm"
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-primary">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold tabular-nums text-primary">{price}</span>
        {plan.price > 0 && (
          <span className="text-muted-foreground">/{plan.period}</span>
        )}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-primary">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-emerald" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href="/contact"
        variant={plan.highlighted ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}
