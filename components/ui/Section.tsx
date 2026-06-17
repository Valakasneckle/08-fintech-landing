import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  containerClassName?: string;
};

export function Section({
  children,
  id,
  className,
  dark,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-20 sm:px-6 lg:px-8",
        dark ? "section-dark" : "section-light",
        className
      )}
    >
      <div className={cn("mx-auto max-w-7xl", containerClassName)}>{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  dark,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {badge && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-wider",
            dark ? "text-accent-cyan" : "text-accent-blue"
          )}
        >
          {badge}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-slate-400" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
