import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-medium tracking-wider uppercase text-[var(--color-primary)] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-dark)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--color-dark)]/70 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
