import { afterEach, describe, expect, it, vi } from "vitest";

import { scrollToSection } from "../dom";

describe("scrollToSection", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("calls scrollIntoView on the matching element with smooth behavior", () => {
    const section = document.createElement("div");
    section.id = "overview";
    const scrollSpy = vi.fn();
    section.scrollIntoView = scrollSpy;
    document.body.append(section);

    scrollToSection("#overview");

    expect(scrollSpy).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("does nothing when the selector does not match an element", () => {
    expect(() => scrollToSection("#missing")).not.toThrow();
  });
});
