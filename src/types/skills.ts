export type SkillItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

export type Skills = {
  Frontend: SkillItem[];
  "Backend & Databases": SkillItem[];
  "Tools & Platforms": SkillItem[];
};
