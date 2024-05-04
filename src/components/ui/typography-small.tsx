"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographySmall({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      style={style}
    >
      {children}
    </small>
  );
}
