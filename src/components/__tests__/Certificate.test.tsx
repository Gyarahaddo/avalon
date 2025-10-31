import { render, screen, within } from "@testing-library/react";

import Certificate from "../Certificate";
import { certificates } from "@avalon/configs/galahad";

describe("Certificate", () => {
  it("renders the section header and description", () => {
    render(<Certificate isDark={false} />);

    expect(
      screen.getByRole("heading", { name: /certificates & credentials/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /professional certifications and credentials that validate my expertise across various technologies and platforms\./i
      )
    ).toBeInTheDocument();
  });

  it("displays a card for each certificate with its details", () => {
    render(<Certificate isDark={false} />);

    certificates.forEach((cert) => {
      const card = screen
        .getByText(cert.name)
        .closest('[data-slot="card"]') as HTMLElement | null;

      expect(card).not.toBeNull();

      if (!card) {
        throw new Error(`Certificate card not found for ${cert.name}`);
      }

      const cardWithin = within(card);

      expect(cardWithin.getByText(cert.name)).toBeInTheDocument();
      expect(cardWithin.getByText(cert.issuer)).toBeInTheDocument();
      expect(cardWithin.getByText(/credential id/i)).toBeInTheDocument();
      expect(cardWithin.getByText(cert.credentialId)).toBeInTheDocument();
    });
  });

  it("uses the appropriate certificate badge variant depending on the theme", () => {
    const { rerender } = render(<Certificate isDark={false} />);

    certificates.forEach((cert) => {
      expect(screen.getByAltText(`${cert.name} Badge`)).toHaveAttribute(
        "src",
        cert.logoSrc
      );
    });

    rerender(<Certificate isDark />);

    certificates.forEach((cert) => {
      expect(screen.getByAltText(`${cert.name} Badge`)).toHaveAttribute(
        "src",
        cert.logoSrcDark
      );
    });
  });
});
