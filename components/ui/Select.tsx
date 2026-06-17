import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
};

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-primary">
        {label}
      </label>
      <select
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/20",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
