import { ABOUT_ITEM, SOCIAL_ITEM } from "@/types/about";
import { CodeXml, Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ABOUT_INFO: ABOUT_ITEM[] = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: (
      <CodeXml aria-hidden="true" className="text-muted-foreground size-4" />
    ),
  },
  {
    id: 2,
    title: "Hyderabad, India",
    icon: (
      <MapPin aria-hidden="true" className="text-muted-foreground size-4" />
    ),
  },
  {
    id: 3,
    title: "+91 9398808794",
    icon: <Phone aria-hidden="true" className="text-muted-foreground size-4" />,
    href: "tel:+919398808794",
  },
  {
    id: 4,
    title: "nikhildaivanapally@gamil.com",
    icon: <Mail aria-hidden="true" className="text-muted-foreground size-4" />,
    href: "mailto:nikhildaivanapally@gmail.com",
  },
];

export const SOCIALS: SOCIAL_ITEM[] = [
  {
    id: 1,
    title: "Linked in",
    icon: <Linkedin aria-hidden="true" className="size-4" />,
    variant: "outline",
    size: "icon",
    href: "https://www.linkedin.com/in/nikhil-daivanapally",
  },
  {
    id: 2,
    title: "Github",
    icon: <Download aria-hidden="true" className="size-4" />,
    variant: "outline",
    size: "icon",
    href: "https://www.linkedin.com/in/nikhil-daivanapally",
  },
];
