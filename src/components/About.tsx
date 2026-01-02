import { GraduationCap, School, MapPin, Calendar, Code } from "lucide-react";
import { cva } from "class-variance-authority";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@avalon/components/ui/cards";
import { SecondaryBadge, OutlineBadge } from "@avalon/components/ui/badges";
import { educations, skillsets } from "@avalon/configs/galahad";
import { cn } from "@avalon/components/ui/utils";

const AboutEducation = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl mb-8 flex items-center">
        <GraduationCap className="mr-3 h-6 w-6 text-primary" />
        Education
      </h3>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <Card
            key={`${index}-${edu.institution}`}
            className="hover:shadow-md transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-xl">{edu.program}</CardTitle>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                <span className="flex items-center">
                  <GraduationCap className="mr-1 h-4 w-4" />
                  {edu.degree}
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center">
                  <School className="mr-1 h-4 w-4" />
                  {edu.institution}
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {edu.location}
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  {edu.period}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{edu.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-medium">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, index) => (
                    <SecondaryBadge
                      key={`${index}-${course}`}
                      className="text-xs"
                      tagName={course}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ABOUT_SKILLSET_STYLE = cva("", {
  variants: {
    variant: {
      titleContainer: "text-2xl mb-8 flex items-center",
      titleIcon: "mr-3 h-6 w-6 text-primary",
      badgeHover:
        "hover:bg-primary hover:text-primary-foreground transition-colors",
    },
  },
});

const AboutSkillset = () => {
  return (
    <div>
      <h3 className={cn(ABOUT_SKILLSET_STYLE({ variant: "titleContainer" }))}>
        <Code className={cn(ABOUT_SKILLSET_STYLE({ variant: "titleIcon" }))} />
        Skillset
      </h3>
      <Card>
        <CardContent className="p-8 space-y-6">
          {skillsets.map((category, index) => (
            <div key={index} className="space-y-3">
              <h4 className="font-medium text-foreground">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <OutlineBadge
                    key={`${index}-${skill}`}
                    className={cn(
                      ABOUT_SKILLSET_STYLE({ variant: "badgeHover" }),
                    )}
                    tagName={skill}
                  />
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

const ABOUT_STYLE = cva("", {
  variants: {
    variant: {
      section: "py-20 px-4 bg-muted/20",
      topContainer: "container mx-auto",
      contentHolder: "max-w-4xl mx-auto",
      headerContainer: "text-center mb-16",
      headerTitle: "text-3xl md:text-4xl mb-4",
      headerIntro: "text-muted-foreground text-lg max-w-2xl mx-auto",
    },
  },
});

const About = () => {
  return (
    <section id="About" className={cn(ABOUT_STYLE({ variant: "section" }))}>
      <div className={cn(ABOUT_STYLE({ variant: "topContainer" }))}>
        <div className={cn(ABOUT_STYLE({ variant: "contentHolder" }))}>
          {/* Section Header */}
          <div className={cn(ABOUT_STYLE({ variant: "headerContainer" }))}>
            <h2 className={cn(ABOUT_STYLE({ variant: "headerTitle" }))}>
              About Me
            </h2>
            <p className={cn(ABOUT_STYLE({ variant: "headerIntro" }))}>
              Get to know more about my background, education, and the skills I
              bring to every project.
            </p>
          </div>
          <AboutEducation />
          <AboutSkillset />
        </div>
      </div>
    </section>
  );
};

export default About;
