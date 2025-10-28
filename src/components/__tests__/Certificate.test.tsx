import { render, screen } from "@testing-library/react";

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
      expect(screen.getByText(cert.name)).toBeInTheDocument();
      expect(screen.getByText(cert.issuer)).toBeInTheDocument();
      expect(screen.getByText(cert.credentialId)).toBeInTheDocument();
    });

    expect(screen.getAllByText(/credential id/i)).toHaveLength(
      certificates.length
    );
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
