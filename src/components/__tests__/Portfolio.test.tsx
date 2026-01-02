import { render, screen, within } from "@testing-library/react";

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

      const assetRow = assetLink.closest("div")?.parentElement;
      if (!assetRow) {
        throw new Error(`Asset legend row not found for ${asset.code}`);
      }

      const assetRowUtils = within(assetRow);
      expect(
        assetRowUtils.getByText(`${asset.percentage}%`),
      ).toBeInTheDocument();
      expect(
        screen.getByTitle(`${asset.code}: ${asset.percentage}%`),
      ).toBeInTheDocument();
    });
  });

  it("shows sector allocation legend entries with percentages", () => {
    render(<Portfolio />);

    holdings.sectorAllocation.forEach((sector) => {
      const sectorName = screen.getByText(sector.name);
      const sectorRow = sectorName.closest("div")?.parentElement;
      if (!sectorRow) {
        throw new Error(`Sector legend row not found for ${sector.name}`);
      }

      const sectorRowUtils = within(sectorRow);
      expect(
        sectorRowUtils.getByText(`${sector.percentage}%`),
      ).toBeInTheDocument();
      expect(
        screen.getByTitle(`${sector.name}: ${sector.percentage}%`),
      ).toBeInTheDocument();
    });
  });
});
