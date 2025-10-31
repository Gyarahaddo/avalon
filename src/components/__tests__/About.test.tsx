import { render, screen, within } from "@testing-library/react";

import About from "../About";
import { educations, skillsets } from "@avalon/configs/galahad";

describe("About", () => {
  it("renders the section header and introductory copy", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /get to know more about my background, education, and the skills i bring to every project\./i
      )
    ).toBeInTheDocument();
  });

  it("lists every education entry with its coursework badges", () => {
    render(<About />);

    educations.forEach((education) => {
      expect(screen.getByText(education.program)).toBeInTheDocument();
      expect(screen.getByText(education.institution)).toBeInTheDocument();
      education.courses.forEach((course) => {
        expect(screen.getByText(course)).toBeInTheDocument();
      });
    });
  });

  it("shows each skill category alongside its skills", () => {
    render(<About />);

    skillsets.forEach((category) => {
      const categoryHeading = screen.getByRole("heading", {
        name: category.category,
      });
      const categorySection = categoryHeading.closest("div");
      expect(categorySection).not.toBeNull();

      category.skills.forEach((skill) => {
        const skillBadge = within(categorySection as HTMLElement).getByText(skill);
        expect(skillBadge).toBeInTheDocument();
      });
    });

    const totalCourseBadges = educations.reduce(
      (count, education) => count + education.courses.length,
      0
    );
    const totalSkillBadges = skillsets.reduce(
      (count, category) => count + category.skills.length,
      0
    );
    const badgeCount = document.querySelectorAll('[data-slot="badge"]').length;
    expect(badgeCount).toBe(totalCourseBadges + totalSkillBadges);
  });
});
