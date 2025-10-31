import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@avalon/components/ui/utils";
import {
  secondaryBadgeVariant,
  outlineBadgeVariant,
} from "@avalon/configs/badge";

const GENERAL_BADGE_STYLE = cva([
  "inline-flex",
  "items-center",
  "justify-center",
  "rounded-md",
  "border",
  "px-2",
  "py-0.5",
  "text-xs",
  "font-medium",
  "w-fit",
  "whitespace-nowrap",
  "shrink-0",
  "[&>svg]:size-3",
  "gap-1",
  "[&>svg]:pointer-events-none",
  "focus-visible:border-ring",
  "focus-visible:ring-ring/50",
  "focus-visible:ring-[3px]",
  "aria-invalid:ring-destructive/20",
  "dark:aria-invalid:ring-destructive/40",
  "aria-invalid:border-destructive",
  "transition-[color,box-shadow]",
  "overflow-hidden",
]);

type BadgeProps = {
  className?: string;
  tagName: string;
};

export const SecondaryBadge: React.FC<BadgeProps> = ({
  className,
  tagName,
  ...props
}) => {
  return (
    <span
      data-slot="badge"
      className={cn(GENERAL_BADGE_STYLE(), secondaryBadgeVariant(), className)}
      {...props}
    >
      {tagName}
    </span>
  );
};

export const OutlineBadge: React.FC<BadgeProps> = ({
  className,
  tagName,
  ...props
}) => {
  return (
    <span
      data-slot="badge"
      className={cn(GENERAL_BADGE_STYLE(), outlineBadgeVariant(), className)}
      {...props}
    >
      {tagName}
    </span>
  );
};
