import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-primary">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
