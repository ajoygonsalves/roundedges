"use client";

import { cn } from "@/lib/utils";
import { TypographyProps } from "./typography-types";

export function TypographyInlineCode({
  children,
  className = "",
  style = {},
}: TypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      style={style}
    >
      {children}
    </code>
  );
}
