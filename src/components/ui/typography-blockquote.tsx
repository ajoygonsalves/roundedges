"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyBlockquote({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <blockquote
      className={cn("pl-6 mt-6 italic border-l-2", className)}
      style={style}
    >
      {children}
    </blockquote>
  );
}
