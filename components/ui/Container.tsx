import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 md:px-8 lg:px-12",
        {
          "max-w-[1200px]": size === "default",
          "max-w-[900px]": size === "narrow",
          "max-w-[1400px]": size === "wide",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
