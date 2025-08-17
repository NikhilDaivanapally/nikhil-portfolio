import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { Skills } from "@/types/skills";

export const SKILLS: Skills = {
  Frontend: [
    {
      id: 1,
      title: "JavaScript",
      icon: (
        <SiJavascript
          role="img"
          aria-label="JavaScript"
          className="text-yellow-400"
        />
      ),
    },
    {
      id: 2,
      title: "React.js",
      icon: (
        <SiReact role="img" aria-label="React.js" className="text-cyan-400" />
      ),
    },
    {
      id: 3,
      title: "Redux",
      icon: (
        <SiRedux role="img" aria-label="Redux" className="text-violet-400" />
      ),
    },
    {
      id: 4,
      title: "Next.js",
      icon: <TbBrandNextjs role="img" aria-label="Next.js" />,
    },
    {
      id: 5,
      title: "Tailwind Css",
      icon: (
        <SiTailwindcss
          role="img"
          aria-label="Tailwind Css"
          className="text-cyan-500"
        />
      ),
    },
    {
      id: 6,
      title: "HTML",
      icon: (
        <SiHtml5 role="img" aria-label="Html" className="text-orange-600" />
      ),
    },
    {
      id: 7,
      title: "CSS",
      icon: <SiCss3 role="img" aria-label="Css" className="text-blue-500" />,
    },
  ],
  "Backend & Databases": [
    {
      id: 1,
      title: "Node.js",
      icon: (
        <FaNodeJs role="img" aria-label="Node.js" className="text-green-600" />
      ),
    },
    {
      id: 2,
      title: "Express.js",
      icon: <SiExpress role="img" aria-label="Express.js" />,
    },
    {
      id: 3,
      title: "MongoDB",
      icon: (
        <SiMongodb role="img" aria-label="MongoDB" className="text-green-500" />
      ),
    },
    {
      id: 4,
      title: "MySQL",
      icon: <SiMysql role="img" aria-label="MySQL" className="text-sky-800" />,
    },
  ],
  "Tools & Platforms": [
    {
      id: 1,
      title: "Git",
      icon: (
        <FaGitAlt role="img" aria-label="Git" className="text-orange-500" />
      ),
    },
    {
      id: 2,
      title: "GitHub",
      icon: <FaGithub role="img" aria-label="Github" />,
    },
    {
      id: 3,
      title: "VS Code",
      icon: (
        <VscVscode role="img" aria-label="VS Code" className="text-sky-400" />
      ),
    },
    {
      id: 4,
      title: "Vercel",
      icon: <SiVercel role="img" aria-label="Vercel" />,
    },
    {
      id: 5,
      title: "Render",
      icon: (
        <SiRender
          role="img"
          aria-label="Render"
          className="text-white drop-shadow-md dark:drop-shadow-none drop-shadow-gray-300"
        />
      ),
    },
  ],
};
