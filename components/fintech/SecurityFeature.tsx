import type { LucideIcon } from "lucide-react";

type SecurityFeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function SecurityFeature({ icon: Icon, title, description }: SecurityFeatureProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-emerald/10 text-accent-emerald">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}
