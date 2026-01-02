import { render, screen } from "@testing-library/react";

import Portfolio from "../Portfolio";
import { holdings } from "@avalon/configs/galahad";

describe("Portfolio", () => {
  it("renders the section header and metadata", () => {
    render(<Portfolio />);

    expect(
      screen.getByRole("heading", { name: "Investment Portfolio", level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A quick look at my current investment holdings and sector allocation.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Last updated: ${holdings.lastUpdate}`),
    ).toBeInTheDocument();
  });

  it("renders the disclaimer copy", () => {
    render(<Portfolio />);

    expect(screen.getByText("Disclaimer:")).toBeInTheDocument();
    expect(
      screen.getByText(
        "This information is shared for personal interests and educational purposes only. It is not financial advice, investment recommendation, or an endorsement of any securities.",
      ),
    ).toBeInTheDocument();
  });

  it("shows asset allocation legend entries with links and percentages", () => {
    render(<Portfolio />);

    holdings.assetAllocation.forEach((asset) => {
      const assetLink = screen.getByRole("link", { name: asset.code });
      expect(assetLink).toHaveAttribute("href", asset.link);
      expect(assetLink).toHaveAttribute("target", "_blank");
      expect(assetLink).toHaveAttribute("rel", "noopener noreferrer");
      expect(
        screen.getByText(`${asset.percentage}%`),
      ).toBeInTheDocument();
      expect(
        screen.getByTitle(`${asset.code}: ${asset.percentage}%`),
      ).toBeInTheDocument();
    });
  });

  it("shows sector allocation legend entries with percentages", () => {
    render(<Portfolio />);

    holdings.sectorAllocation.forEach((sector) => {
      expect(screen.getByText(sector.name)).toBeInTheDocument();
      expect(
        screen.getByText(`${sector.percentage}%`),
      ).toBeInTheDocument();
      expect(
        screen.getByTitle(`${sector.name}: ${sector.percentage}%`),
      ).toBeInTheDocument();
    });
  });
});
