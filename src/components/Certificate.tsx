import { cva } from "class-variance-authority";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@avalon/components/ui/cards";
import { cn } from "@avalon/components/ui/utils";
import { certificates } from "@avalon/configs/galahad";

const CERT_GRID_STYLE = cva("", {
  variants: {
    variant: {
      gridContainer: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
      cardHover: "hover:shadow-lg transition-all duration-200 group",
      certBadgeContainer: "w-30 h-30 mx-auto mb-4",
      certTitle:
        "text-lg leading-tight mb-2 group-hover:text-primary transition-colors",
      certIssuer: "text-sm text-muted-foreground font-medium",
      credentialContainer: "mb-4 p-3 bg-muted/50 rounded-lg",
      credentialText: "text-xs text-muted-foreground mb-1",
      credentialCode: "text-xs font-mono break-all",
    },
  },
});

const CertificateGrid = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className={cn(CERT_GRID_STYLE({ variant: "gridContainer" }))}>
      {certificates.map((cert, index) => (
        <Card
          key={index}
          className={cn(CERT_GRID_STYLE({ variant: "cardHover" }))}
        >
          <CardHeader className="text-center">
            <div
              className={cn(CERT_GRID_STYLE({ variant: "certBadgeContainer" }))}
            >
              {isDark ? (
                <img src={cert.logoSrcDark} alt={`${cert.name} Badge`} />
              ) : (
                <img src={cert.logoSrc} alt={`${cert.name} Badge`} />
              )}
            </div>
            <CardTitle
              className={cn(CERT_GRID_STYLE({ variant: "certTitle" }))}
            >
              {cert.name}
            </CardTitle>
            <p className={cn(CERT_GRID_STYLE({ variant: "certIssuer" }))}>
              {cert.issuer}
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <div
              className={cn(
                CERT_GRID_STYLE({ variant: "credentialContainer" }),
              )}
            >
              <p className={cn(CERT_GRID_STYLE({ variant: "credentialText" }))}>
                Credential ID
              </p>
              <p className={cn(CERT_GRID_STYLE({ variant: "credentialCode" }))}>
                {cert.credentialId}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const CERTIFICATE_STYLE = cva("", {
  variants: {
    variant: {
      section: "py-20 px-4 bg-muted/20",
      topContainer: "container mx-auto",
      contentHolder: "max-w-6xl mx-auto",
      headerContainer: "text-center mb-16",
      headerTitle: "text-3xl md:text-4xl mb-4",
      headerIntro: "text-muted-foreground text-lg max-w-2xl mx-auto",
    },
  },
});

const Certificate = ({ isDark }: { isDark: boolean }) => {
  return (
    <section
      id="Certificates"
      className={cn(CERTIFICATE_STYLE({ variant: "section" }))}
    >
      <div className={cn(CERTIFICATE_STYLE({ variant: "topContainer" }))}>
        <div className={cn(CERTIFICATE_STYLE({ variant: "contentHolder" }))}>
          {/* Section Header */}
          <div
            className={cn(CERTIFICATE_STYLE({ variant: "headerContainer" }))}
          >
            <h2 className={cn(CERTIFICATE_STYLE({ variant: "headerTitle" }))}>
              Certificates & Credentials
            </h2>
            <p className={cn(CERTIFICATE_STYLE({ variant: "headerIntro" }))}>
              Professional certifications and credentials that validate my
              expertise across various technologies and platforms.
            </p>
          </div>

          {/* Section Content */}
          <CertificateGrid isDark={isDark} />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
