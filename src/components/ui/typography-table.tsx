"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Column, RowData, TypographyTableProps } from "./typography-types";

export function TypographyTable({
  columns,
  data,
  className = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = "",
}: TypographyTableProps) {
  return (
    <div className={cn("my-6 w-full overflow-y-auto", className)}>
      <table className="w-full">
        <thead>
          <tr className={cn("m-0 border-t p-0 even:bg-muted", headerClassName)}>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className={cn(
                  "border px-4 py-2 font-bold",
                  `text-${column.align || "left"}`,
                  cellClassName
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn("m-0 border-t p-0 even:bg-muted", rowClassName)}
            >
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.accessor}`}
                  className={cn(
                    "border px-4 py-2",
                    `text-${column.align || "left"}`,
                    cellClassName
                  )}
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
