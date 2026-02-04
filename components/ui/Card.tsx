import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  highlighted?: boolean;
}

export function Card({
  className,
  hover = true,
  highlighted = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-white)] rounded-2xl p-6 md:p-8",
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        highlighted
          ? "border-2 border-[var(--color-primary)] shadow-lg"
          : "border border-[var(--color-beige)] shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
