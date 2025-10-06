import { Card } from "@avalon/components/ui/cards";
import { cva } from "class-variance-authority";

import { profile, links } from "@avalon/configs/galahad";
import { cn } from "@avalon/components/ui/utils";

const PROFILE_IMAGE_PATH = "src/assets/galahad.png";

const HERO_PROFILE_STYLE = cva("", {
  variants: {
    variant: {
      outerContainer:
        "w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center",
      innerContainer:
        "w-32 h-32 rounded-full bg-muted flex items-center justify-center",
      roundImage: "w-full h-full rounded-full object-cover bg-muted",
    },
  },
});

const HeroProfile = () => {
  return (
    <div className={cn(HERO_PROFILE_STYLE({ variant: "outerContainer" }))}>
      <div className={cn(HERO_PROFILE_STYLE({ variant: "innerContainer" }))}>
        <img
          src={PROFILE_IMAGE_PATH}
          alt="Profile Photo"
          className={cn(HERO_PROFILE_STYLE({ variant: "roundImage" }))}
        />
      </div>
    </div>
  );
};

const HERO_STYLE = cva("", {
  variants: {
    variant: {
      section: "min-h-screen flex items-center justify-center px-4 pt-16",
      topContainer: "container mx-auto",
      contentHolder: "max-w-4xl mx-auto text-center",
      name: "text-4xl md:text-6xl mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent",
      title: "text-xl md:text-2xl text-muted-foreground mb-6",
      introduction:
        "text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed",
    },
  },
});

const Hero = () => {
  return (
    <section id="home" className={cn(HERO_STYLE({ variant: "section" }))}>
      <div className={cn(HERO_STYLE({ variant: "topContainer" }))}>
        <div className={cn(HERO_STYLE({ variant: "contentHolder" }))}>
          <HeroProfile />

          <h1 className={cn(HERO_STYLE({ variant: "name" }))}>
            {profile.first_name} {profile.last_name}
          </h1>

          <h2 className={cn(HERO_STYLE({ variant: "title" }))}>
            {profile.title}
          </h2>

          <p className={cn(HERO_STYLE({ variant: "introduction" }))}>
            Passionate software developer with expertise in modern web
            technologies. I love creating efficient, scalable solutions and
            contributing to open-source projects. Always eager to learn and
            tackle new challenges.
          </p>

          <Card className="p-6 max-w-md mx-auto">
            <h3 className="mb-4 text-center">Connect with me</h3>
            <div className="flex justify-center space-x-6">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-all duration-200 hover:scale-110 ${link.hover_color}`}
                    title={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
