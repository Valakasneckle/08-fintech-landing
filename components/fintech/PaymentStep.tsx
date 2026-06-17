import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PaymentStepProps = {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
};

export function PaymentStep({
  step,
  icon: Icon,
  title,
  description,
  isLast,
}: PaymentStepProps) {
  return (
    <div className="relative flex gap-4">
      {!isLast && (
        <div
          className="absolute left-5 top-12 h-[calc(100%-12px)] w-px bg-gradient-to-b from-accent-cyan/50 to-transparent"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan text-sm font-bold text-white shadow-lg shadow-accent-blue/20">
        {step}
      </div>
      <div className="pb-10">
        <div className="mb-2 flex items-center gap-2">
          <Icon className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
          <h3 className="font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </div>
  );
}
