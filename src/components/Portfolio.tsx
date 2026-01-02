import { TrendingUp, ExternalLink, AlertCircle } from "lucide-react";
import { SecondaryBadge } from "@avalon/components/ui/badges";
import { holdings } from "@avalon/configs/galahad";
import { cn } from "@avalon/components/ui/utils";
import { cva } from "class-variance-authority";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@avalon/components/ui/cards";

const PORTFOLIO_CONTENT_STYLE = cva("", {
  variants: {
    variant: {
      gridContainer: "grid lg:grid-cols-2 gap-8",
      portfolioItem: "w-full h-8 bg-muted rounded-lg overflow-hidden flex",
      allocationContainer:
        "w-full h-8 bg-muted rounded-lg overflow-hidden flex",
      allocationItem:
        "transition-all duration-500 ease-out flex items-center justify-center hover:opacity-80 cursor-pointer group relative",
      assetLink: "h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity",
      assetLegend:
        "flex items-center gap-2 hover:text-primary transition-colors group",
      sectorLegend: "w-4 h-4 rounded shrink-0",
    },
  },
});

const PortfolioContent = () => {
  return (
    <div className={PORTFOLIO_CONTENT_STYLE({ variant: "gridContainer" })}>
      {/* Asset Allocation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Asset Allocation
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Single Asset Allocation Bar */}
          <div className="mb-6">
            <div
              className={PORTFOLIO_CONTENT_STYLE({
                variant: "allocationContainer",
              })}
            >
              {holdings.assetAllocation.map((asset, index) => (
                <div
                  key={index}
                  className={cn(
                    PORTFOLIO_CONTENT_STYLE({ variant: "allocationItem" }),
                    asset.color,
                  )}
                  style={{ width: `${asset.percentage}%` }}
                  title={`${asset.code}: ${asset.percentage}%`}
                >
                  {asset.percentage >= 10 && (
                    <span className="text-white text-xs font-medium">
                      {asset.percentage}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {holdings.assetAllocation.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`${asset.color} `} />
                  <a
                    href={asset.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={PORTFOLIO_CONTENT_STYLE({
                      variant: "assetLegend",
                    })}
                  >
                    <span>{asset.code}</span>
                    <ExternalLink
                      className={PORTFOLIO_CONTENT_STYLE({
                        variant: "assetLink",
                      })}
                    />
                  </a>
                </div>
                <SecondaryBadge tagName={`${asset.percentage}%`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sector Allocation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Sector Allocation
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Single Sector Allocation Bar */}
          <div className="mb-6">
            <div className="w-full h-8 bg-muted rounded-lg overflow-hidden flex">
              {holdings.sectorAllocation.map((sector, index) => (
                <div
                  key={index}
                  className={cn(
                    PORTFOLIO_CONTENT_STYLE({ variant: "allocationItem" }),
                    sector.color,
                  )}
                  style={{ width: `${sector.percentage}%` }}
                  title={`${sector.name}: ${sector.percentage}%`}
                >
                  {sector.percentage >= 10 && (
                    <span className="text-white text-xs font-medium">
                      {sector.percentage}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {holdings.sectorAllocation.map((sector, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      PORTFOLIO_CONTENT_STYLE({ variant: "sectorLegend" }),
                      sector.color,
                    )}
                  />
                  <span className="text-sm">{sector.name}</span>
                </div>
                <SecondaryBadge tagName={`${sector.percentage}%`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const PORTFOLIO_DISCLAIMER_STYLE = cva("", {
  variants: {
    variant: {
      disclaimerContainer:
        "mb-12 p-4 border border-amber-500/20 bg-amber-500/5 rounded-lg flex items-start gap-3",
      disclaimerIcon: "h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5",
      disclaimerText: "text-sm text-muted-foreground",
    },
  },
});

const DisclaimerInfo = () => {
  return (
    <div
      className={PORTFOLIO_DISCLAIMER_STYLE({
        variant: "disclaimerContainer",
      })}
    >
      <AlertCircle
        className={PORTFOLIO_DISCLAIMER_STYLE({
          variant: "disclaimerIcon",
        })}
      />
      <div>
        <p
          className={PORTFOLIO_DISCLAIMER_STYLE({
            variant: "disclaimerText",
          })}
        >
          <strong className="text-foreground">Disclaimer:</strong> This
          information is shared for personal interests and educational purposes
          only. It is not financial advice, investment recommendation, or an
          endorsement of any securities.
        </p>
      </div>
    </div>
  );
};

const PORTFOLIO_STYLE = cva("", {
  variants: {
    variant: {
      section: "py-20 px-4 bg-muted/30",
      topContainer: "container mx-auto",
      contentHolder: "max-w-6xl mx-auto",
      headerContainer: "text-center mb-16",
      headerTitle: "text-5xl md:text-4xl mb-4",
      headerIntro: "text-muted-foreground text-lg max-w-2xl mx-auto",
    },
  },
});

const Portfolio = () => {
  return (
    <section
      id="Portfolio"
      className={cn(PORTFOLIO_STYLE({ variant: "section" }))}
    >
      <div className={PORTFOLIO_STYLE({ variant: "topContainer" })}>
        <div className={PORTFOLIO_STYLE({ variant: "contentHolder" })}>
          {/* Section Header */}
          <div className={PORTFOLIO_STYLE({ variant: "headerContainer" })}>
            <h2 className={PORTFOLIO_STYLE({ variant: "headerTitle" })}>
              Investment Portfolio
            </h2>
            <p className={PORTFOLIO_STYLE({ variant: "headerIntro" })}>
              A quick look at my current investment holdings and sector
              allocation.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Last updated: {holdings.lastUpdate}
            </p>
          </div>

          {/* Disclaimer */}
          <DisclaimerInfo />

          {/* Section Body */}
          <PortfolioContent />

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Portfolio values are shown as percentage allocations. Individual
              holdings may vary over time due to market movements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
