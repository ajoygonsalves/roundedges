"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyMuted({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} style={style}>
      {children}
    </p>
  );
}
