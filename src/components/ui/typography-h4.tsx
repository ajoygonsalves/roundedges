"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyH4({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <h4
      className={cn(
        "text-xl font-semibold tracking-tight scroll-m-20",
        className
      )}
      style={style}
    >
      {children}
    </h4>
  );
}
