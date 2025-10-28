import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { ComponentType } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../cards";

type Case = {
  name: string;
  Component: ComponentType<any>;
  slot: string;
  tagName: string;
  expectedClasses: string[];
};

const cases: Case[] = [
  {
    name: "Card",
    Component: Card,
    slot: "card",
    tagName: "DIV",
    expectedClasses: ["bg-card", "rounded-xl"],
  },
  {
    name: "CardHeader",
    Component: CardHeader,
    slot: "card-header",
    tagName: "DIV",
    expectedClasses: ["grid", "px-6"],
  },
  {
    name: "CardTitle",
    Component: CardTitle,
    slot: "card-title",
    tagName: "H4",
    expectedClasses: ["leading-none"],
  },
  {
    name: "CardDescription",
    Component: CardDescription,
    slot: "card-description",
    tagName: "P",
    expectedClasses: ["text-muted-foreground"],
  },
  {
    name: "CardAction",
    Component: CardAction,
    slot: "card-action",
    tagName: "DIV",
    expectedClasses: ["justify-self-end"],
  },
  {
    name: "CardContent",
    Component: CardContent,
    slot: "card-content",
    tagName: "DIV",
    expectedClasses: ["px-6"],
  },
  {
    name: "CardFooter",
    Component: CardFooter,
    slot: "card-footer",
    tagName: "DIV",
    expectedClasses: ["flex", "px-6"],
  },
];

describe("Card primitives", () => {
  cases.forEach(({ name, Component, slot, tagName, expectedClasses }) => {
    it(`renders ${name} with its slot, base classes, and forwarded props`, () => {
      const { getByTestId } = render(
        <Component
          data-testid="primitive"
          className="custom-class"
          aria-label="card-primitive"
        >
          Content
        </Component>
      );

      const element = getByTestId("primitive");
      expect(element.tagName).toBe(tagName);
      expect(element).toHaveAttribute("data-slot", slot);
      expectedClasses.forEach((className) => {
        expect(element).toHaveClass(className);
      });
      expect(element).toHaveClass("custom-class");
      expect(element).toHaveAttribute("aria-label", "card-primitive");
    });
  });
});
