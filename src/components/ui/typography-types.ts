"use client";

import { CSSProperties } from "react";

export type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

export type Column = {
  header: string;
  accessor: string; // key to access the data
  align?: "left" | "center" | "right";
};

export type RowData = {
  [key: string]: any;
};

export type TypographyTableProps = {
  columns: Column[];
  data: RowData[];
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
};

export type TypographyListProps = {
  items: string[]; // Array of list item texts
  className?: string; // Optional custom class for the entire list
  itemClassName?: string; // Optional custom class for individual list items
};
