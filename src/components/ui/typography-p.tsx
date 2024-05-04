"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyP({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <p className={cn("leading-7", className)} style={style}>
      {children}
    </p>
  );
}
