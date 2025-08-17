import { GraduationCap } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import { EDUCATION_ITEM } from "@/types/education";

const EducationCard = ({
  education,
  isLastEducation,
}: {
  education: EDUCATION_ITEM;
  isLastEducation: boolean;
}) => {
  return (
    <div className={"relative pl-6 pb-10"}>
      {/* ICON */}
      <div
        className="flex absolute top-0 left-0 z-10 -translate-x-1/2 size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
        aria-hidden="true"
      >
        <GraduationCap className="text-muted-foreground size-4" />
      </div>

      {/* SEPERATOR */}
      {!isLastEducation && (
        <Separator className="absolute left-0 h-full" orientation="vertical" />
      )}

      <div className="space-y-1">
        {/* INSTITUTE */}
        <h3>{education.institute}</h3>
        {/* COURSE & BRANCH */}
        <div className="space-x-2.5 text-sm text-muted-foreground">
          <span>{education.course}</span>
          <span>{education.branch}</span>
        </div>
        {/* DURATION & CGPA */}
        <div className="flex items-center gap-x-1.5 text-sm text-muted-foreground">
          <span>{education.from}</span>
          <div className="w-2.5">
            <Separator className=" bg-gray-300 border-1 rounded-md" />
          </div>
          <span>{education.to}</span>
          <div className="w-1.5 h-1.5 bg-border shrink-0 rounded-full" />
          <span>CGPA: {education.cgpa}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
