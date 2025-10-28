import { describe, expect, it } from "vitest";

import { cn } from "../utils";

describe("cn", () => {
  it("combines truthy class names and flattens arrays", () => {
    expect(
      cn("text-sm", null, ["font-semibold", ["tracking-tight"]], {
        hidden: false,
        block: true,
      })
    ).toBe("text-sm font-semibold tracking-tight block");
  });

  it("merges tailwind classes using tailwind-merge", () => {
    expect(cn("px-2", "px-4", "px-4")).toBe("px-4");
  });
});
