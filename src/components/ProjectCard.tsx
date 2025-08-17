"use client";

import { ProjectItem } from "@/types/project";
import { CodeXml, ExternalLink, Github, Link } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LinksIcon: Record<string, ReactNode> = {
  Live: <Link className="w-4" />,
  Repo: <Github className="w-4" />,
};

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  project,
  isLastProject,
}: {
  project: ProjectItem;
  isLastProject: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projectCard",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
            id: `Project-${project.title}`, // unique marker
            once: true,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert(); // cleanup
  }, [project.title]);

  return (
    <article
      ref={cardRef}
      className="relative pl-5 sm:pl-6 pb-14"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* ICON */}
      <div
        className="flex absolute top-0 left-0 z-10 -translate-x-1/2 size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
        aria-hidden="true"
      >
        <CodeXml className="text-muted-foreground size-4" />
      </div>

      {/* SEPERATOR */}
      {!isLastProject && (
        <Separator className="absolute left-0 h-full" orientation="vertical" />
      )}

      <div className="space-y-4">
        {/* PROJECT TITLE & LINKS */}
        <div className="flex justify-between items-start">
          <h3 id={`project-${project.id}-title`} className="font-semibold">
            {project.title}
          </h3>
          <div className="flex sm:gap-4">
            {Object.entries(project.Links)?.map(([key, value]) => {
              const isExternal = value.startsWith("http");
              return (
                <Button key={key} asChild variant={"link"} size={"sm"}>
                  <a
                    href={value}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={`${key} link for ${project.title}`}
                    className="flex items-center justify-center text-sm gap-1"
                  >
                    {LinksIcon[key]}
                    {key}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>

        {/* PROJECT DESCRIPTION */}
        <p className="text-sm">{project.description}</p>

        <div className="projectCard flex max-md:flex-col flex-row gap-3">
          {/* IMAGE */}
          <div className="relative w-full group max-h-60 p-1 aspect-video border rounded-md shadow-md overflow-hidden">
            {/* Image */}
            <Image
              src={project.images[0]}
              width={440}
              height={340}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-cover rounded-md"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />

            {/* Link icon */}
            <a
              href={project.Links["Live"]}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ExternalLink className="size-6 text-white drop-shadow-lg" />
            </a>
          </div>

          <div className="w-full space-y-4">
            {/* PROJECT KEY FEATURE */}
            <div className="space-y-1.5">
              <p className="font-semibold text-sm">Key Features :</p>

              <ul className="text-[13px] space-y-1 ">
                {project["Key Features"]?.map((feature, index) => {
                  return (
                    <li key={index} className="flex gap-3 items-center">
                      <div className="w-1.5 h-1.5 bg-border rounded-full shrink-0" />
                      <p>{feature}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* PROJECT STACK */}
            <div>
              <p className="font-semibold text-sm sr-only">Tech stack:</p>
              <ul className="flex flex-wrap gap-1.5">
                {project.stack?.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className="inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
