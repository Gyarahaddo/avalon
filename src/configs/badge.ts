import { cva } from "class-variance-authority";

export const secondaryBadgeVariant = cva([
  "border-transparent",
  "bg-secondary",
  "text-secondary-foreground",
  "[a&]:hover:bg-secondary/90",
]);

export const outlineBadgeVariant = cva([
  "text-foreground",
  "[a&]:hover:bg-accent",
  "[a&]:hover:text-accent-foreground",
]);
