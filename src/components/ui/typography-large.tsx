"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyLarge({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <div className={cn("text-lg font-semibold", className)} style={style}>
      {children}
    </div>
  );
}
