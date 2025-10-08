import { ExternalLink } from "lucide-react";
import { cva } from "class-variance-authority";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@avalon/components/ui/cards";
import { ProjectButton } from "@avalon/components/ui/buttons";
import { OutlineBadge } from "@avalon/components/ui/badges";
import { cn } from "@avalon/components/ui/utils";
import { projects } from "@avalon/configs/galahad";

const PROJECT_CONTENT_STYLE = cva("", {
  variants: {
    variant: {
      gridContainer: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
      cardHover: "group hover:shadow-md transition-all duration-200",
      projectHeaderContainer: "flex items-center justify-between text-lg",
      projectTitleContainer: "flex items-center space-x-3",
      projectIconContainer:
        "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
      projectIcon: "h-10.5 w-10.5 rounded-lg text-primary",
      projectDescription: "text-muted-foreground text-sm mb-4",
      projectLabels: "flex flex-wrap gap-1 mb-4",
    },
  },
});

const ProjectContent = () => {
  return (
    <div className="mb-16">
      <div className={cn(PROJECT_CONTENT_STYLE({ variant: "gridContainer" }))}>
        {projects.map((project, index) => (
          <Card
            key={index}
            className={cn(PROJECT_CONTENT_STYLE({ variant: "cardHover" }))}
          >
            <CardHeader>
              <CardTitle
                className={cn(
                  PROJECT_CONTENT_STYLE({ variant: "projectHeaderContainer" }),
                )}
              >
                <div
                  className={cn(
                    PROJECT_CONTENT_STYLE({
                      variant: "projectTitleContainer",
                    }),
                  )}
                >
                  <div
                    className={cn(
                      PROJECT_CONTENT_STYLE({
                        variant: "projectIconContainer",
                      }),
                    )}
                  >
                    <img
                      src={project.image}
                      className={cn(
                        PROJECT_CONTENT_STYLE({ variant: "projectIcon" }),
                      )}
                    />
                  </div>
                  <span>{project.name}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={cn(
                  PROJECT_CONTENT_STYLE({ variant: "projectDescription" }),
                )}
              >
                {project.description}
              </p>
              <div
                className={cn(
                  PROJECT_CONTENT_STYLE({ variant: "projectLabels" }),
                )}
              >
                {project.technologies.slice(0, 3).map((tech) => (
                  <OutlineBadge key={tech} className="text-xs" tagName={tech} />
                ))}
                {project.technologies.length > 3 && (
                  <OutlineBadge
                    className="text-xs"
                    tagName={"+".concat(
                      (project.technologies.length - 3).toString(),
                    )}
                  />
                )}
              </div>
              <div className="flex space-x-2">
                <ProjectButton asChild>
                  <a
                    href={project.codebaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </ProjectButton>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const PROJECT_STYLE = cva("", {
  variants: {
    variant: {
      section: "py-20 px-4",
      topContainer: "container mx-auto",
      contentHolder: "max-w-6xl mx-auto",
      headerContainer: "text-center mb-16",
      headerTitle: "text-5xl md:text-4xl mb-4",
      headerIntro: "text-muted-foreground text-lg max-w-2xl mx-auto",
    },
  },
});

const Project = () => {
  return (
    <section
      id="Projects"
      className={cn(PROJECT_STYLE({ variant: "section" }))}
    >
      <div className={cn(PROJECT_STYLE({ variant: "topContainer" }))}>
        <div className={cn(PROJECT_STYLE({ variant: "contentHolder" }))}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects I've worked on, ranging from web
              applications to data analysis solutions.
            </p>
          </div>

          {/* Section Body */}
          <ProjectContent />
        </div>
      </div>
    </section>
  );
};

export default Project;
