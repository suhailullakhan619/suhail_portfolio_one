import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils"; // Assuming you have a cn utility for merging class names
import { Chip } from "./avatar-chips";

// Define the props interface for type safety and clarity
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  liveLink:string,
  gitRepoLink:string,
  tech?: (string | { label: string, icon: string | null })[]
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View Project", tech,liveLink,gitRepoLink, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
          className
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-muted-foreground">{description}</p>

          {tech && tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((item, index) => {
                const isObject = typeof item !== "string";
                const label = isObject ? item.label : item;
                const icon = isObject ? item.icon : undefined;

                return (
                  <Chip key={index} variant="outline" size="sm">
                    {icon && (
                      <img src={icon} alt={label} className="w-3 h-3 mr-1" />
                    )}
                    {label}
                  </Chip>
                );
              })}
            </div>
          )}
          {/* Card Link/CTA */}
         {/* Buttons */}
<div className="mt-4 flex gap-3 flex-wrap">

  {/* Live Button */}
  {liveLink && (
    <a
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary/10 transition-all duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      Live
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </a>
  )}

  {/* GitHub Button */}
  {gitRepoLink && (
    <a
      href={gitRepoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-neutral-600 text-black rounded-md hover:bg-neutral-800 hover:text-neutral-300 transition-all duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      Git Repo
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </a>
  )}

</div>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };