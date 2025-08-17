export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  "Key Features": string[];
  images: string[];
  Links: Record<string, string>;
  stack: string[];
};
