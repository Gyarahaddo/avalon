import { Moon, Sun } from "lucide-react";
import { cva } from "class-variance-authority";

import { HeaderButton, ThemeButton } from "@avalon/components/ui/buttons";
import { cn } from "@avalon/components/ui/utils";
import { scrollToSection } from "@avalon/components/ui/dom";

const Header = ({
  isDark,
  switchTheme,
}: {
  isDark: boolean;
  switchTheme: () => void;
}) => {
  const HEADER_STYLE = cva([
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "z-50",
    "bg-background/60",
    "backdrop-blur-md",
    "border-b",
    "border-border",
  ]);

  const SITE_NAME: string = "Avalon";

  const NAV_ITEMS: string[] = [
    "Home",
    "About",
    "Experience",
    "Certificates",
    "Projects",
  ];

  return (
    <header className={cn(HEADER_STYLE())}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-xl font-semibold">{SITE_NAME}</h1>
          </div>
          <nav className="items-center space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <HeaderButton
                key={index}
                buttonName={item}
                onClick={() => scrollToSection(`#${item}`)}
              />
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeButton className="h-9 w-9" onClick={() => switchTheme()}>
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </ThemeButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
