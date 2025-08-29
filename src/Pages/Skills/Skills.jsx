import React from "react";
import { Skills } from "../../utils/Datas";

const SkillsComponent = () => {
  return (
    <div
      id="skills-section"
      className="container mx-auto px-2 md:px-0 lg:px-32 py-6 font-figtree w-full"
    >
      <h2 className="font-bold text-3xl md:text-5xl text-[#04263e] mb-6">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3 md:gap-4">
        {Skills.map((skill, index) => {
          const Icon = skill.icon; // ✅ store the component reference
          return (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 
                         text-gray-800 text-sm md:text-base font-medium px-4 py-2 rounded-full shadow-sm"
            >
              <span className="text-xl md:text-2xl">
                 <skill.icon className="text-2xl" style={{ color: skill.color }} />
              </span>
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsComponent;
