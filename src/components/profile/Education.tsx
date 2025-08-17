import { EDUCATION } from "@/data/education";
import EducationCard from "../EducationCard";
const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mt-14 sm:mt-24 font-mono"
    >
      <h2
        id="education-heading"
        className="font-mono font-semibold mb-10 text-2xl"
      >
        Education
      </h2>
      <div className="pl-4">
        {EDUCATION?.map((education, i) => {
          return (
            <EducationCard
              key={i}
              education={education}
              isLastEducation={EDUCATION.length === i + 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Education;
