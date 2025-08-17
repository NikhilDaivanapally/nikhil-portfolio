import { USER } from "@/data/user";

export const SITE_INFO = {
  name: "Nikhil Daivanapally",
  url: process.env.APP_URL || "https://nikhildaivanapally.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
};
