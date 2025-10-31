import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import Footer from "../Footer";
import { links, profile } from "@avalon/configs/galahad";
import { scrollToSection } from "@avalon/components/ui/dom";

vi.mock("@avalon/components/ui/dom", () => ({
  scrollToSection: vi.fn(),
}));

const NAVIGATION_ITEMS = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Certificates", href: "#Certificates" },
];

const QUICK_LINKS = [
  { name: "AWS Console", link: "https://aws.amazon.com/" },
  { name: "GCP Console", link: "https://console.cloud.google.com/" },
  { name: "Azure Portal", link: "https://portal.azure.com/" },
  { name: "Oracle Cloud", link: "https://cloud.oracle.com/login" },
];

describe("Footer", () => {
  const scrollToSectionMock = vi.mocked(scrollToSection);

  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-01-01T00:00:00Z"));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders profile information and social links", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", {
        name: `${profile.first_name} ${profile.last_name}`,
        level: 3,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.introduction)).toBeInTheDocument();

    links.forEach((link) => {
      const socialLink = screen.getByTitle(link.name);
      expect(socialLink).toHaveAttribute("href", link.url);
      expect(socialLink).toHaveAttribute("target", "_blank");
      expect(socialLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders quick links and navigation content", () => {
    render(<Footer />);

    QUICK_LINKS.forEach((quickLink) => {
      const linkElement = screen.getByRole("link", { name: quickLink.name });
      expect(linkElement).toHaveAttribute("href", quickLink.link);
      expect(linkElement).toHaveAttribute("target", "_blank");
      expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
    });

    NAVIGATION_ITEMS.forEach((item) => {
      expect(
        screen.getByRole("button", { name: `Go to ${item.label} section` }),
      ).toBeInTheDocument();
    });
  });

  it("invokes scrollToSection with the correct section hash", async () => {
    const user = userEvent.setup();
    render(<Footer />);

    for (const item of NAVIGATION_ITEMS) {
      const button = screen.getByRole("button", {
        name: `Go to ${item.label} section`,
      });
      await user.click(button);
      expect(scrollToSectionMock).toHaveBeenLastCalledWith(item.href);
    }

    expect(scrollToSectionMock).toHaveBeenCalledTimes(NAVIGATION_ITEMS.length);
  });

  it("shows the current year and last updated text", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        (content) =>
          content.startsWith("© 2025 Galahad Zhao.") &&
          content.includes("React & Tailwind CSS."),
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Last updated: October 2025"),
    ).toBeInTheDocument();
  });
});
