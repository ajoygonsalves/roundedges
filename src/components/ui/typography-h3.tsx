"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyH3({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold tracking-tight scroll-m-20",
        className
      )}
      style={style}
    >
      {children}
    </h3>
  );
}
