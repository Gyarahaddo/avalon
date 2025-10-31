import { cva } from "class-variance-authority";
import { Heart } from "lucide-react";

import { cn } from "@avalon/components/ui/utils";
import { scrollToSection } from "@avalon/components/ui/dom";
import { profile, links } from "@avalon/configs/galahad";

// Component styles.
const FOOTER_STYLE = cva(["bg-muted/20", "border-t", "border-border"]);
const FOOTER_BORDER_STYLE = cva([
  "border-t",
  "border-border",
  "mt-8",
  "pt-8",
  "flex",
  "flex-col",
  "md:flex-row",
  "justify-between",
  "items-center",
]);
const FOOTER_HOVER_STYLE = cva([
  "text-muted-foreground",
  "hover:text-foreground",
  "transition-colors",
  "duration-200",
  "text-sm",
]);
const PROFILE_HOVER_STYLE = cva([
  "text-muted-foreground",
  "hover:text-foreground",
  "transition-colors",
  "duration-200",
]);

// Component static data.
const QUICK_LINKS = [
  { name: "AWS Console", link: "https://aws.amazon.com/" },
  { name: "GCP Console", link: "https://console.cloud.google.com/" },
  { name: "Azure Portal", link: "https://portal.azure.com/" },
  { name: "Oracle Cloud", link: "https://cloud.oracle.com/login" },
];
const FOOTER_CONTENT = [
  { label: "Home", href: "#Home" },
  { label: "About", href: "#About" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Certificates", href: "#Certificates" },
];

const FooterLinks = () => {
  return (
    <div>
      <h4 className="font-medium mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {QUICK_LINKS.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(FOOTER_HOVER_STYLE())}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterContent = () => {
  return (
    <div>
      <h4 className="font-medium mb-4">Content</h4>
      <ul className="space-y-2">
        {FOOTER_CONTENT.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              onClick={() => scrollToSection(item.href)}
              aria-label={`Go to ${item.label} section`}
              className={cn(FOOTER_HOVER_STYLE())}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterCopyright = ({ year }: { year: number }) => {
  return (
    <div className={cn(FOOTER_BORDER_STYLE())}>
      <p className="text-muted-foreground text-sm flex items-center">
        © {year} Galahad Zhao. Made with{" "}
        <Heart className="h-4 w-4 mx-1 text-red-500" aria-hidden="true" /> using
        React & Tailwind CSS.
      </p>
      <p className="text-muted-foreground text-sm mt-2 md:mt-0">
        Last updated: October 2025
      </p>
    </div>
  );
};

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={cn(FOOTER_STYLE())} aria-label="Site Footer">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">
                {profile.first_name} {profile.last_name}
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                {profile.introduction}
              </p>

              <div className="flex space-x-4">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(PROFILE_HOVER_STYLE())}
                      title={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <FooterLinks />
            <FooterContent />
          </div>
          <FooterCopyright year={currentYear} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
