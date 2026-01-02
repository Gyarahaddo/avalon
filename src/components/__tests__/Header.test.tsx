import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

vi.mock("@avalon/components/ui/dom", () => ({
  scrollToSection: vi.fn(),
}));

import Header from "../Header";
import { scrollToSection } from "@avalon/components/ui/dom";

describe("Header", () => {
  const navItems = ["Home", "About", "Experience", "Certificates", "Projects"];
  const scrollToSectionMock = vi.mocked(scrollToSection);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the site name and navigation items", () => {
    render(<Header isDark={false} switchTheme={vi.fn()} />);

    expect(screen.getByRole("heading", { name: "Avalon" })).toBeInTheDocument();
    navItems.forEach((item) => {
      expect(screen.getByRole("button", { name: item })).toBeInTheDocument();
    });
  });

  it("scrolls to the section matching each navigation button", async () => {
    const user = userEvent.setup();
    render(<Header isDark={false} switchTheme={vi.fn()} />);

    for (const item of navItems) {
      await user.click(screen.getByRole("button", { name: item }));
      expect(scrollToSectionMock).toHaveBeenLastCalledWith(`#${item}`);
    }
    expect(scrollToSectionMock).toHaveBeenCalledTimes(navItems.length);
  });

  it("invokes the theme switcher and swaps the icon", async () => {
    const user = userEvent.setup();
    const switchTheme = vi.fn();
    const { rerender } = render(<Header isDark={false} switchTheme={switchTheme} />);

    const themeButton = screen
      .getAllByRole("button")
      .find((button) => button.dataset.slot === "nav-button");
    expect(themeButton).toBeDefined();
    if (!themeButton) {
      throw new Error("Theme button not found");
    }

    const getThemeIcon = () => themeButton.querySelector("svg");

    const initialIcon = getThemeIcon();
    expect(initialIcon).not.toBeNull();
    expect(initialIcon).toHaveClass("lucide-moon");

    await user.click(themeButton);
    expect(switchTheme).toHaveBeenCalledTimes(1);

    rerender(<Header isDark={true} switchTheme={switchTheme} />);

    const updatedIcon = getThemeIcon();
    expect(updatedIcon).not.toBeNull();
    expect(updatedIcon).toHaveClass("lucide-sun");
  });
});
