import { ProjectItem } from "@/types/project";

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Byte Bubbble",
    description:
      "Developed a real-time chat application using React and Express, supporting both 1-on-1 and group conversations. The app includes media and file sharing, along with integrated voice messaging for seamless communication.",
    // "A Real-time chat application with React, powered by Express, includes features like 1-on-1 and group messaging and media, file sharing and also voice messaging",
    "Key Features": [
      "Real-time messaging with typing indicators and read receipts",
      "Seamless sharing of files, images, and voice messages",
      "User presence tracking and group collaboration tools",
      "Smart and customizable notifications",
    ],
    images: ["/projects/bytebubble.png"],
    Links: {
      Live: "https://bytebubble.vercel.app/",
      Repo: "https://github.com/NikhilDaivanapally/ByteBubble",
    },
    stack: [
      "HTML",
      "CSS",
      "JS",
      "React.js",
      "Redux",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Redis",
    ],
  },
  {
    id: 2,
    title: "WearClothings",
    description:
      "Built a full-stack e-commerce clothing application with product browsing and purchasing functionality. Includes product listing, an admin dashboard, and features for managing users and products.",
    // "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, at nobis! Tempora dicta corporis repudiandae sed provident iusto itaque aliquid",
    "Key Features": [
      "Secure role-based authentication with Google OAuth, Express sessions, and Redis",
      "Comprehensive admin dashboard for seamless product and user management",
      "Advanced product filtering for faster and easier discovery",
      "One-time password (OTP) based local authentication for enhanced security",
      "Dynamic and responsive product listing for a smooth browsing experience",
    ],
    images: ["/projects/wearclothings.png"],
    Links: {
      Live: "https://wearclothings.vercel.app/",
      Repo: "https://github.com/NikhilDaivanapally/WearClothing_Ecommerce",
    },
    stack: [
      "HTML",
      "CSS",
      "JS",
      "React.js",
      "Redux",
      "Express.js",
      "Postgress",
      "Redis",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Designed and developed a personal portfolio using Next.js with smooth, interactive animations powered by GSAP and Framer Motion. Integrated a functional contact form to allow users to send messages seamlessly",
    "Key Features": [
      "Interactive homepage animations powered by Framer Motion for smooth and engaging transitions",
      "Modern, clean, and fully responsive UI built with Tailwind CSS",
      "Seamless theme toggle with support for light and dark modes",
      "Consistent design system using Shadcn UI components",
    ],
    images: ["/projects/portfolio.png"],
    Links: {
      Live: "https://nikhildaivanapally.vercel.app/",
      Repo: "",
    },
    stack: ["HTML", "CSS", "JS", "Next.js", "Gsap", "Motion"],
  },
];
