import { Briefcase, Calendar, MapPin, Contact } from "lucide-react";
import { cva } from "class-variance-authority";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@avalon/components/ui/cards";
import { OutlineBadge } from "@avalon/components/ui/badges";
import { experiences } from "@avalon/configs/galahad";
import { cn } from "@avalon/components/ui/utils";

const EXPERIENCE_CONTENT_STYLE = cva("", {
  variants: {
    variant: {
      cardHover: "hover:shadow-md transition-all duration-200 dark:bg-muted/30",
      cardHeaderContainer: "flex items-start justify-between",
      cardTitle: "text-xl flex items-center",
      cardTitleIcon: "mr-2 h-5 w-5 text-primary",
      infoRow:
        "flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground",
      dutyContainer: "text-muted-foreground flex items-start",
      dutyContent:
        "inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0",
    },
  },
});

const ExperienceContent = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className={cn(EXPERIENCE_CONTENT_STYLE({ variant: "cardHover" }))}
        >
          <CardHeader>
            <div
              className={cn(
                EXPERIENCE_CONTENT_STYLE({ variant: "cardHeaderContainer" }),
              )}
            >
              <div className="space-y-2">
                <CardTitle
                  className={cn(
                    EXPERIENCE_CONTENT_STYLE({ variant: "cardTitle" }),
                  )}
                >
                  <Briefcase
                    className={cn(
                      EXPERIENCE_CONTENT_STYLE({ variant: "cardTitleIcon" }),
                    )}
                  />
                  {exp.title}
                </CardTitle>
                <div
                  className={cn(
                    EXPERIENCE_CONTENT_STYLE({ variant: "infoRow" }),
                  )}
                >
                  <span className="font-medium">{exp.company}</span>
                  <span className="hidden sm:block">•</span>
                  <span className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {exp.location}
                  </span>
                  <span className="hidden sm:block">•</span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="hidden sm:block">•</span>
                  <span className="flex items-center">
                    <Contact className="mr-1 h-4 w-4" />
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {exp.duties.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    EXPERIENCE_CONTENT_STYLE({ variant: "dutyContainer" }),
                  )}
                >
                  <span
                    className={cn(
                      EXPERIENCE_CONTENT_STYLE({ variant: "dutyContent" }),
                    )}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <p className="text-sm font-medium">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <OutlineBadge tagName={tech} />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const EXPERIENCE_STYLE = cva("", {
  variants: {
    variant: {
      section: "py-20 px-4",
      topContainer: "container mx-auto",
      contentHolder: "max-w-4xl mx-auto",
      sectionHeader: "text-center mb-16",
      sectionTitle: "text-3xl md:text-4xl mb-4",
      sectionIntro: "text-muted-foreground text-lg max-w-2xl mx-auto",
    },
  },
});

const Experience = () => {
  return (
    <section
      id="Experience"
      className={cn(EXPERIENCE_STYLE({ variant: "section" }))}
    >
      <div className={cn(EXPERIENCE_STYLE({ variant: "topContainer" }))}>
        <div className={cn(EXPERIENCE_STYLE({ variant: "contentHolder" }))}>
          {/* Section Header */}
          <div className={cn(EXPERIENCE_STYLE({ variant: "sectionHeader" }))}>
            <h2 className={cn(EXPERIENCE_STYLE({ variant: "sectionTitle" }))}>
              Professional Experience
            </h2>
            <p className={cn(EXPERIENCE_STYLE({ variant: "sectionIntro" }))}>
              My professional journey and the impact I've made at different
              organizations.
            </p>
          </div>

          {/* Section Content */}
          <ExperienceContent />
        </div>
      </div>
    </section>
  );
};

export default Experience;
