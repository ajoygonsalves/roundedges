"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "@/components/ui/typography-types";

export function TypographyH1({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl",
        className
      )}
      style={style}
    >
      {children}
    </h1>
  );
}
