import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@avalon/components/ui/utils";
import {
  headerButtonVariant,
  generalButtonVariant,
} from "@avalon/configs/button";

const BUTTON_HOVER_STYLES = cva("", {
  variants: {
    variant: {
      header:
        "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full",
    },
  },
});

type HeaderButtonProps = {
  buttonName: string;
  onClick: () => void;
  className?: string;
};

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  buttonName,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      data-slot="header-button"
      className={cn(headerButtonVariant())}
      onClick={onClick}
      {...props}
    >
      {buttonName}
      <span
        className={cn(BUTTON_HOVER_STYLES({ variant: "header" }), className)}
      ></span>
    </button>
  );
};

type ProjectButtonProps = {
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
};

export const ProjectButton: React.FC<ProjectButtonProps> = ({
  className,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="project-button"
      className={cn(
        generalButtonVariant({ variant: "ghost", size: "sm" }),
        className,
      )}
      {...props}
    />
  );
};

const NAV_BUTTON_HOVER_STYLES = cva("", {
  variants: {
    variant: {
      header:
        "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full",
    },
  },
});

type NavButtonProps = {
  buttonName?: string;
  className?: string;
  onClick?: () => void;
  asChild?: boolean;
  children?: React.ReactNode;
};

export const ThemeButton: React.FC<NavButtonProps> = ({
  className,
  onClick,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="theme-button"
      className={cn(
        generalButtonVariant({ variant: "ghost", size: "icon" }),
        className,
      )}
      onClick={onClick}
      {...props}
    />
  );
};
