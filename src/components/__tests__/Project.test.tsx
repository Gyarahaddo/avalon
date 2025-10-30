import { render, screen, within } from "@testing-library/react";

import Project from "../Project";
import { projects } from "@avalon/configs/galahad";

describe("Project", () => {
  it("renders the project section heading and introduction", () => {
    render(<Project />);

    expect(
      screen.getByRole("heading", { name: "Projects", level: 2 }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "A collection of projects I've worked on, ranging from web applications to data analysis solutions.",
      ),
    ).toBeInTheDocument();
  });

  it("renders project cards with description, technologies and code links", () => {
    render(<Project />);

    projects.forEach((project) => {
      const cardHeading = screen.getByRole("heading", {
        name: project.name,
        level: 4,
      });

      const card = cardHeading.closest('[data-slot="card"]');
      expect(card).not.toBeNull();
      if (!card) {
        throw new Error("Project card element not found");
      }

      expect(
        within(card).getByText(project.description, { exact: false }),
      ).toBeInTheDocument();

      project.technologies.slice(0, 3).forEach((technology) => {
        expect(within(card).getByText(technology)).toBeInTheDocument();
      });

      if (project.technologies.length > 3) {
        const extraBadgeLabel = `+${project.technologies.length - 3}`;
        expect(within(card).getByText(extraBadgeLabel)).toBeInTheDocument();

        project.technologies.slice(3).forEach((technology) => {
          expect(within(card).queryByText(technology)).not.toBeInTheDocument();
        });
      } else {
        expect(
          within(card).queryByText((_, element) =>
            (element?.textContent ?? "").startsWith("+"),
          ),
        ).not.toBeInTheDocument();
      }

      const codeLink = within(card).getByRole("link");
      expect(codeLink).toHaveAttribute("href", project.codebaseUrl);
      expect(codeLink).toHaveAttribute("target", "_blank");
      expect(codeLink).toHaveAttribute("rel", "noopener noreferrer");

      const image = card.querySelector("img");
      expect(image).not.toBeNull();
      if (!image) {
        throw new Error("Project image element not found");
      }

      expect(image).toHaveAttribute("src", project.image);
    });
  });
});
