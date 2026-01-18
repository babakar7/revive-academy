"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97]",
          {
            "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25":
              variant === "primary",
            "bg-[var(--color-beige)] text-[var(--color-dark)] hover:bg-[var(--color-cream)] focus:ring-[var(--color-beige)] hover:shadow-md":
              variant === "secondary",
            "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)] hover:shadow-lg hover:shadow-[var(--color-primary)]/25":
              variant === "outline",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
