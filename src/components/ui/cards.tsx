import * as React from "react";

import { cva } from "class-variance-authority";
import { cn } from "@avalon/components/ui/utils";

const CARD_STYLE = cva([
  "bg-card",
  "text-card-foreground",
  "flex",
  "flex-col",
  "gap-6",
  "rounded-xl",
  "border",
]);

const Card = React.memo(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <div
        data-slot="card"
        className={cn(CARD_STYLE(), className)}
        {...props}
      />
    );
  },
);

const CARD_HEADER_STYLE = cva([
  "@container/card-header",
  "grid",
  "auto-rows-min",
  "grid-rows-[auto_auto]",
  "items-start",
  "gap-1.5",
  "px-6",
  "pt-6",
  "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
  "[.border-b]:pb-6",
]);

const CardHeader = React.memo(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <div
        data-slot="card-header"
        className={cn(CARD_HEADER_STYLE(), className)}
        {...props}
      />
    );
  },
);

const CARD_TITLE_STYLE = cva(["leading-none"]);

const CardTitle = React.memo(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <h4
        data-slot="card-title"
        className={cn(CARD_TITLE_STYLE(), className)}
        {...props}
      />
    );
  },
);

const CARD_DESCRIPTION_STYLE = cva(["text-muted-foreground"]);

const CardDescription = React.memo(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <p
        data-slot="card-description"
        className={cn(CARD_DESCRIPTION_STYLE(), className)}
        {...props}
      />
    );
  },
);

const CARD_ACTION_STYLE = cva([
  "col-start-2",
  "row-span-2",
  "row-start-1",
  "self-start",
  "justify-self-end",
]);

const CardAction = React.memo(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <div
        data-slot="card-action"
        className={cn(CARD_ACTION_STYLE(), className)}
        {...props}
      />
    );
  },
);

const CARD_CONTENT_STYLE = cva(["px-6", "[&:last-child]:pb-6"]);

const CardContent = React.memo(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <div
        data-slot="card-content"
        className={cn(CARD_CONTENT_STYLE(), className)}
        {...props}
      />
    );
  },
);

const CARD_FOOTER_STYLE = cva([
  "flex",
  "items-center",
  "px-6",
  "pb-6",
  "[&:last-child]:pt-6",
]);

const CardFooter = React.memo(
  ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
      <div
        data-slot="card-footer"
        className={cn(CARD_FOOTER_STYLE(), className)}
        {...props}
      />
    );
  },
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
