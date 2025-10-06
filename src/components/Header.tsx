import { Moon, Sun } from "lucide-react";
import { cva } from "class-variance-authority";

import { HeaderButton } from "@avalon/components/ui/buttons";
import { cn } from "@avalon/components/ui/utils";

const Header = () => {
  const HEADER_STYLE = cva([
    "fixed",
    "top-0",
    "left-0",
    "right-0",
    "z-50",
    "bg-background/80",
    "backdrop-blur-md",
    "border-b",
    "border-border",
  ]);

  const THEME_BUTTON_STYLE = cva([
    "size-9",
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "whitespace-nowrap",
    "rounded-md",
    "text-sm",
    "font-medium",
    "transition-all",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "[&_svg]:pointer-events-none",
    "[&_svg:not([class*='size-'])]:size-4",
    "shrink-0",
    "[&_svg]:shrink-0",
    "outline-none",
    "focus-visible:border-ring",
    "focus-visible:ring-ring/50",
    "focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20",
    "dark:aria-invalid:ring-destructive/40",
    "aria-invalid:border-destructive",
    "hover:bg-accent",
    "hover:text-accent-foreground",
    "dark:hover:bg-accent/50",
  ]);

  const SITE_NAME: string = "Avalon";

  const NAV_ITEMS: string[] = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Certificates",
  ];

  const isDarkMode = false;

  const switchTheme = () => {
    const debugMessage = {
      level: "debug",
      code_file: "Home.tsx",
      function_name: "switchTheme",
    };

    console.debug(JSON.stringify(debugMessage));
  };

  const navTo = (item: string) => {
    const debugMessage = {
      level: "debug",
      code_file: "Home.tsx",
      function_name: "navTo",
      params: [item],
    };

    console.debug(JSON.stringify(debugMessage));
  };

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
                onClick={() => navTo(item)}
              />
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <button className={cn(THEME_BUTTON_STYLE)} onClick={switchTheme}>
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
