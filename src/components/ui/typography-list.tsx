"use client";

import { cn } from "@/lib/utils";
import { TypographyListProps } from "./typography-types";

export function TypographyList({
  items,
  className = "",
  itemClassName = "",
}: TypographyListProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc", className)}>
      {items.map((item, index) => (
        <li key={index} className={cn("[&>li]:mt-2", itemClassName)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
