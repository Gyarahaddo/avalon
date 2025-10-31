import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OutlineBadge, SecondaryBadge } from "../badges";

describe("SecondaryBadge", () => {
  it("renders the badge with its slot, default classes, and merged className", () => {
    render(<SecondaryBadge tagName="TypeScript" className="custom-secondary" />);

    const badge = screen.getByText("TypeScript");
    expect(badge).toHaveAttribute("data-slot", "badge");
    expect(badge).toHaveClass("inline-flex", "border-transparent", "bg-secondary");
    expect(badge).toHaveClass("custom-secondary");
  });
});

describe("OutlineBadge", () => {
  it("applies the outline styling and keeps additional classes", () => {
    render(<OutlineBadge tagName="React" className="custom-outline" />);

    const badge = screen.getByText("React");
    expect(badge).toHaveAttribute("data-slot", "badge");
    expect(badge).toHaveClass("inline-flex", "text-foreground");
    expect(badge).toHaveClass("custom-outline");
  });
});
