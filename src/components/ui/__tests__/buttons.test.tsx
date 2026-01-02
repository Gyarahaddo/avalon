import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { HeaderButton, ProjectButton, NavButton } from "../buttons";

describe("HeaderButton", () => {
  it("renders a header button with hover underline span and click handler", () => {
    const handleClick = vi.fn();
    render(
      <HeaderButton
        buttonName="Docs"
        onClick={handleClick}
        className="custom-underline"
      />,
    );

    const button = screen.getByRole("button", { name: "Docs" });
    expect(button).toHaveAttribute("data-slot", "header-button");
    expect(button).toHaveClass("group");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();

    const underline = button.querySelector("span");
    expect(underline).not.toBeNull();
    expect(underline).toHaveClass("absolute", "-bottom-1", "custom-underline");
  });
});

describe("ProjectButton", () => {
  it("renders as a standard button with ghost small variant classes", () => {
    render(
      <ProjectButton className="project-custom">Launch Project</ProjectButton>,
    );

    const button = screen.getByRole("button", { name: "Launch Project" });
    expect(button).toHaveAttribute("data-slot", "project-button");
    expect(button).toHaveClass("hover:bg-accent", "h-8", "project-custom");
  });

  it("can render as a child component while preserving its styling", () => {
    render(
      <ProjectButton asChild className="link-custom">
        <a href="#docs">View Docs</a>
      </ProjectButton>,
    );

    const link = screen.getByRole("link", { name: "View Docs" });
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("data-slot", "project-button");
    expect(link).toHaveClass("hover:bg-accent", "h-8", "link-custom");
  });
});

describe("NavButton", () => {
  it("renders a ghost icon button and fires click events", () => {
    const handleClick = vi.fn();
    render(
      <NavButton
        aria-label="Toggle theme"
        onClick={handleClick}
        className="theme-custom"
      />,
    );

    const button = screen.getByRole("button", { name: "Toggle theme" });
    expect(button).toHaveAttribute("data-slot", "theme-button");
    expect(button).toHaveClass("hover:bg-accent", "size-9", "theme-custom");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("supports asChild usage and forwards interactions", () => {
    const handleClick = vi.fn();
    render(
      <NavButton asChild className="link-theme" onClick={handleClick}>
        <a href="#theme" aria-label="Theme link" />
      </NavButton>,
    );

    const link = screen.getByLabelText("Theme link");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("data-slot", "theme-button");
    expect(link).toHaveClass("hover:bg-accent", "size-9", "link-theme");

    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalled();
  });
});
