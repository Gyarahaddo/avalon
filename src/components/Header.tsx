import { Moon, Sun, Menu, X } from "lucide-react";
import { cva } from "class-variance-authority";
import { useState } from "react";

import { HeaderButton, NavButton } from "@avalon/components/ui/buttons";
import { cn } from "@avalon/components/ui/utils";
import { scrollToSection } from "@avalon/components/ui/dom";

const Header = ({
  isDark,
  switchTheme,
}: {
  isDark: boolean;
  switchTheme: () => void;
}) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const HEADER_STYLE = cva("", {
    variants: {
      variant: {
        headers:
          "fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border",
        topContainer: "container mx-auto px-4",
        contentHolder: "flex items-center justify-between h-16",
        sitename: "text-xl font-semibold",
        navigation: "hidden md:flex items-center space-x-8",
        desktopUtilityContainer: "flex items-center space-x-2",
        desktopUtilityButton: "h-9 w-9",
        desktopUtilityButtonIcon: "h-5 w-5",
        mobileNavContainer: "md:hidden border-t border-border bg-background",
        mobileNav: "py-4 space-y-2",
        mobileNavButton:
          "block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200",
      },
    },
  });

  const SITE_NAME: string = "Avalon";

  const NAV_ITEMS: string[] = [
    "Home",
    "About",
    "Experience",
    "Certificates",
    "Projects",
    "Portfolio",
  ];

  return (
    <header className={cn(HEADER_STYLE({ variant: "headers" }))}>
      <div className={cn(HEADER_STYLE({ variant: "topContainer" }))}>
        <div className={cn(HEADER_STYLE({ variant: "contentHolder" }))}>
          <div>
            <h1 className={cn(HEADER_STYLE({ variant: "sitename" }))}>
              {SITE_NAME}
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className={cn(HEADER_STYLE({ variant: "navigation" }))}>
            {NAV_ITEMS.map((item, index) => (
              <HeaderButton
                key={index}
                buttonName={item}
                onClick={() => {
                  scrollToSection(`#${item}`);
                  setMobileMenuIsOpen(false);
                }}
              />
            ))}
          </nav>

          {/* Utility Site */}
          <div
            className={cn(HEADER_STYLE({ variant: "desktopUtilityContainer" }))}
          >
            {/* Theme Button */}
            <NavButton
              className={cn(HEADER_STYLE({ variant: "desktopUtilityButton" }))}
              onClick={() => switchTheme()}
            >
              {isDark ? (
                <Sun
                  className={cn(
                    HEADER_STYLE({ variant: "desktopUtilityButtonIcon" }),
                  )}
                />
              ) : (
                <Moon
                  className={cn(
                    HEADER_STYLE({ variant: "desktopUtilityButtonIcon" }),
                  )}
                />
              )}
            </NavButton>

            {/* Mobile Menu */}
            <NavButton
              className={cn(
                "md:hidden",
                HEADER_STYLE({ variant: "desktopUtilityButton" }),
              )}
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            >
              {mobileMenuIsOpen ? (
                <X
                  className={cn(
                    HEADER_STYLE({ variant: "desktopUtilityButtonIcon" }),
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    HEADER_STYLE({ variant: "desktopUtilityButtonIcon" }),
                  )}
                />
              )}
            </NavButton>
          </div>
        </div>

        {/* Mobile  */}
        {mobileMenuIsOpen && (
          <div className={cn(HEADER_STYLE({ variant: "mobileNavContainer" }))}>
            <nav className={cn(HEADER_STYLE({ variant: "mobileNav" }))}>
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={`${index}-${item}`}
                  onClick={() => scrollToSection(`#${item}`)}
                  className={cn(HEADER_STYLE({ variant: "mobileNavButton" }))}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
