"use client";

import { SKILLS } from "@/data/skills";
import { Badge } from "../ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Kill old triggers to avoid duplicates
      ScrollTrigger.getAll().forEach((t) => t.kill());

      containerRefs.current.forEach((container) => {
        if (!container) return;

        const stacks = gsap.utils.toArray<HTMLElement>(
          container.querySelectorAll(".stack")
        );
        const arrow = container.querySelector<SVGElement>(".arrow");

        // Category-specific animation positions
        let category = "";
        let startPosition = "top 80%";
        let endPosition = "bottom 50%";

        if (container.classList.contains("frontend")) {
          category = "frontend";
          startPosition = "top 85%";
          endPosition = "bottom 60%";
        } else if (container.classList.contains("backend")) {
          category = "backend";
          startPosition = "top 85%";
          endPosition = "bottom 60%";
        } else if (container.classList.contains("tools")) {
          category = "tools";
          startPosition = "top 85%";
          endPosition = "bottom 60%";
        }

        // Timeline for arrow + stacks
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              id:
                category || `container-${Math.random().toString(36).slice(2)}`,
              start: startPosition,
              end: endPosition,
              toggleActions: "play none none reverse",
              once: true,
              // markers: true, // Uncomment for debugging
            },
          })
          // Step 1: Arrow reveal
          .fromTo(
            arrow,
            { height: 0 },
            {
              height: 60,
              duration: 0.4,
              ease: "power2.out",
            }
          )
          // Step 2: Stacks reveal after arrow
          .fromTo(
            stacks,
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.1,
              duration: 0.4,
              ease: "back.out(1.5)",
            }
            // "+=0.1" // small delay after arrow
          );
      });
    }, containerRefs);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="pt-18 sm:pt-24 font-mono"
    >
      <h2 id="skills-heading" className="font-mono font-semibold mb-8 text-2xl">
        Skills
      </h2>

      <div className="space-y-6">
        {Object.entries(SKILLS).map(([category, skills], i) => (
          <div
            key={category}
            className={`${category.split("&")[0]?.toLowerCase()} space-y-4`}
            ref={(el) => {
              if (el) containerRefs.current[i] = el;
            }}
          >
            {/* CATEGORY HEADING */}
            <Badge id={`skills-${category}`}>{category}</Badge>

            <div className="h-15" aria-hidden="true">
              <svg
                width="50"
                height="60"
                viewBox="0 0 60 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow flex rotate-y-180 -mt-5 -rotate-90"
              >
                {" "}
                <g clipPath="url(#clip0_1087_2609)">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5579 30.5227C22.4725 28.623 28.2492 29.3749 33.4667 31.6508C41.3459 35.0881 47.9522 42.0005 51.8464 48.614C54.2944 52.7702 54.4502 56.7492 55.8651 61.5377C55.9225 61.7316 56.1293 61.8068 56.3272 61.7054C56.5245 61.6049 56.6391 61.3648 56.5811 61.1718C55.1497 56.3272 54.9774 52.3095 52.5011 48.1044C48.5525 41.3988 41.8496 34.3948 33.8601 30.9088C28.4988 28.57 22.5574 27.8153 16.4791 29.7675C16.2743 29.8332 16.1259 30.0549 16.1476 30.2634C16.1694 30.472 16.3531 30.5884 16.5579 30.5227Z"
                    fill="transparent"
                    stroke="#7F7F7F"
                    strokeWidth="0.5"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.0873 62.1097C57.0832 62.0921 57.0533 61.9757 57.0388 61.8734C56.9763 61.45 56.9339 60.6847 56.9361 59.7042C56.947 56.4142 57.4643 50.7129 59.6242 47.3C59.7488 47.1031 59.7164 46.8667 59.5524 46.7716C59.3884 46.6764 59.1547 46.7579 59.0301 46.9548C56.7828 50.5058 56.2014 56.4357 56.1908 59.8586C56.1897 60.317 56.1975 60.7315 56.2135 61.0885C55.5902 60.3287 54.9902 59.5491 54.3985 58.7583C52.6959 56.4811 50.6985 54.9884 48.0625 53.8966C47.8867 53.8232 47.6568 53.9314 47.5515 54.1372C47.4454 54.3425 47.5029 54.5697 47.6794 54.6422C50.2161 55.6936 52.1405 57.1294 53.7796 59.3211C54.5532 60.3542 55.342 61.3695 56.1743 62.3467C56.2571 62.444 56.4755 62.6936 56.5123 62.7223C56.7223 62.886 56.9338 62.7112 56.9791 62.6705C57.0011 62.6509 57.2635 62.3944 57.0873 62.1097ZM56.4268 62.6084C56.4318 62.6161 56.4362 62.6247 56.4419 62.6329C56.4369 62.6266 56.4325 62.618 56.4268 62.6084Z"
                    fill="transparent"
                    stroke="#7F7F7F"
                    strokeWidth="0.5"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_1087_2609">
                    {" "}
                    <rect
                      width="64.5423"
                      height="52.3374"
                      fill="white"
                      transform="translate(0 51.8329) rotate(-53.4256)"
                    ></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>

            {/* SKILLS LIST */}
            <ul
              role="list"
              aria-labelledby={`skills-${category}`}
              className="flex flex-wrap ml-5 sm:ml-10"
            >
              {skills.map(({ id, title, icon }) => (
                <li key={title}>
                  <article
                    aria-labelledby={`${category}-skill-${id}-title`}
                    className="stack flex relative size-25 sm:size-30 border-dashed border-1 flex-col justify-center items-center gap-1.5"
                  >
                    {" "}
                    <div className="w-2 h-2 absolute -top-[1px] -left-[.5px] group-hover:-top-1 group-hover:-left-1 transition-all duration-200 border border-r-0 border-b-0 border-gray-500 dark:border-gray-500"></div>{" "}
                    <div className="w-2 h-2 absolute -top-[1px] -right-[1px] group-hover:-top-1 group-hover:-right-1 transition-all duration-200 border border-l-0 border-b-0 border-gray-500 dark:border-gray-500"></div>{" "}
                    <div className="w-2 h-2 absolute -bottom-[1px] -left-[.5px] group-hover:-bottom-1 group-hover:-left-1 transition-all duration-200 border border-r-0 border-t-0 border-gray-500 dark:border-gray-500"></div>{" "}
                    <div className="w-2 h-2 absolute -bottom-[1px] -right-[1px] group-hover:-bottom-1 group-hover:-right-1 transition-all duration-200 border border-l-0 border-t-0 border-gray-500 dark:border-gray-500"></div>{" "}
                    {/* ICON */}
                    <div className="text-3xl sm:text-4xl">{icon}</div>
                    {/* TITLE */}
                    <h3
                      id={`${category}-skill-${id}-title`}
                      className="text-wrap text-center"
                    >
                      {title}
                    </h3>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
