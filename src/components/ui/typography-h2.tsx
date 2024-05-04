"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyH2({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <h2
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0",
        className
      )}
      style={style}
    >
      {children}
    </h2>
  );
}
