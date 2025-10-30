import { render, screen, within } from "@testing-library/react";

import Hero from "../Hero";
import { profile, links } from "@avalon/configs/galahad";

describe("Hero", () => {
  it("displays the hero profile information", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: `${profile.first_name} ${profile.last_name}`,
        level: 1,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: profile.title, level: 2 }),
    ).toBeInTheDocument();

    expect(screen.getByText(profile.introduction)).toBeInTheDocument();

    const avatar = screen.getByAltText("Profile Photo");
    expect(avatar).toHaveAttribute("src", profile.avatar_link);
  });

  it("renders a card with external links for social connections", () => {
    render(<Hero />);

    const connectHeading = screen.getByRole("heading", {
      name: "Connect with me",
      level: 3,
    });
    expect(connectHeading).toBeInTheDocument();

    const card = connectHeading.closest('[data-slot="card"]');
    expect(card).not.toBeNull();
    if (!card) {
      throw new Error("Connect card element not found");
    }

    const linkElements = within(card).getAllByRole("link");
    expect(linkElements).toHaveLength(links.length);

    links.forEach((link) => {
      const anchor = within(card).getByRole("link", { name: link.name });

      expect(anchor).toHaveAttribute("href", link.url);
      expect(anchor).toHaveAttribute("target", "_blank");
      expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
      expect(anchor).toHaveAttribute("title", link.name);
    });
  });
});
