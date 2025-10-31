import { render, screen, within } from "@testing-library/react";

import Experience from "../Experience";
import { experiences } from "@avalon/configs/galahad";

describe("Experience", () => {
  it("renders the section heading and introduction", () => {
    render(<Experience />);

    expect(
      screen.getByRole("heading", {
        name: "Professional Experience",
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "My professional journey and the impact I've made at different organizations.",
      ),
    ).toBeInTheDocument();
  });

  it("displays every experience card with duties and technologies", () => {
    render(<Experience />);

    const headings = screen.getAllByRole("heading", { level: 4 });
    expect(headings).toHaveLength(experiences.length);

    experiences.forEach((exp) => {
      const titleHeading = screen.getByRole("heading", { name: exp.title });
      const card = titleHeading.closest('[data-slot="card"]');
      expect(card).not.toBeNull();
      if (!card) {
        throw new Error("Experience card not found for title: " + exp.title);
      }
      const utils = within(card);

      expect(utils.getByText(exp.company)).toBeInTheDocument();
      expect(utils.getByText(exp.location)).toBeInTheDocument();
      expect(utils.getByText(exp.period)).toBeInTheDocument();
      expect(utils.getByText(exp.type)).toBeInTheDocument();

      exp.duties.forEach((duty) => {
        expect(utils.getByText(duty)).toBeInTheDocument();
      });

      exp.technologies.forEach((tech) => {
        const badge = utils.getByText(tech);
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveAttribute("data-slot", "badge");
      });
    });
  });
});
