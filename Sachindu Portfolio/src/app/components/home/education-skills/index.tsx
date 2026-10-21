"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEducationData(data?.educationData);
      } catch (error) {
        console.error("Error fetching education & skills:", error);
      }
    };

    fetchData();
  }, []);

  const defaultSkillGroups = [
    {
      category: "UX Research",
      description: "Investigating user needs, mental models, and pain points",
      skills: [
        "User Interviews (15-participant study for SafeGuard)",
        "Survey Design & Qualitative Analysis",
        "User Personas & Empathy Mapping",
        "Information Hierarchy & Task Flows",
        "Usability Evaluation & Insight Synthesis"
      ]
    },
    {
      category: "UI Design",
      description: "Building clean, accessible, and structured digital products",
      skills: [
        "Low-to-High Fidelity Wireframing",
        "Responsive Web & Mobile Layouts",
        "Design Systems & Component Libraries",
        "Typography, Color Theory & Spacing Rules",
        "Accessibility & WCAG Contrast Standards"
      ]
    },
    {
      category: "Prototyping",
      description: "Translating static interfaces into interactive experiences",
      skills: [
        "Interactive Clickable Figma Prototypes",
        "Smart Animate & Micro-interactions",
        "Mobile Navigation & Gesture Flows",
        "Iterative Flow Walkthroughs"
      ]
    },
    {
      category: "Tools",
      description: "Industry tools utilized in daily design workflows",
      skills: [
        "Figma (Auto Layout, Components, Variants, Design Tokens)",
        "FigJam (Mapping & Ideation)",
        "HTML5 & CSS3 Fundamentals (Dev Handoff)",
        "Adobe Creative Suite (Basics)"
      ]
    }
  ];

  const skillGroups = educationData?.skillGroups || defaultSkillGroups;

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="border-t border-softGray overflow-hidden py-16 md:py-28">
        <div className="container relative z-10">
          <Image
            src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")}
            alt="decorative vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2 pointer-events-none opacity-40"
          />

          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-10 md:mb-16">
            <div>
              <h2>Education & Skills</h2>
              <p className="text-secondary text-sm md:text-base mt-1">
                Formal education, certified training, and categorized design competencies.
              </p>
            </div>
            <p className="text-xl text-primary font-semibold shrink-0">( 03 )</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
            {/* Left Column: Education & Certifications */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">
                Education & Credentials
              </h3>

              <div className="space-y-6">
                {/* Degree */}
                <div className="p-6 rounded-2xl bg-softGray/60 dark:bg-zinc-900 border border-softGray dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase tracking-wide">
                      Undergraduate Degree
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 text-secondary">
                      2024 - Present
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                    BSc (Hons) in Industrial Information Technology
                  </h4>
                  <p className="text-sm font-medium text-black dark:text-zinc-300">
                    Uva Wellassa University of Sri Lanka
                  </p>
                  <p className="text-sm text-secondary leading-relaxed font-normal">
                    Combining software engineering principles, data modeling, and user-centered design methodologies to solve complex industrial and digital challenges.
                  </p>
                </div>

                {/* IBM Certificate */}
                <div className="p-6 rounded-2xl bg-softGray/60 dark:bg-zinc-900 border border-softGray dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase tracking-wide">
                      Professional Certification
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 text-secondary">
                      IBM · Coursera
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                    IBM UI/UX Design Capstone Certificate
                  </h4>
                  <p className="text-sm font-medium text-black dark:text-zinc-300">
                    Applying UI/UX Design in the Real World
                  </p>
                  <p className="text-sm text-secondary leading-relaxed font-normal">
                    Real-world hands-on training in user research protocols, low-to-high fidelity wireframing, component-driven design systems, and interactive prototyping.
                  </p>
                  <a
                    href="https://coursera.org/verify/ANS9YS7UW95W"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary dark:text-blue-400 hover:underline pt-1"
                  >
                    <span>Verify Certificate via Coursera</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Grouped Skills (UX Research, UI Design, Prototyping, Tools) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                  Categorized Skills & Proficiency
                </h3>
                <span className="text-xs text-secondary hidden sm:inline-block">
                  Accurately stated competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skillGroups.map((group: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:border-primary/30 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-black dark:text-white">
                          {group.category}
                        </h4>
                        <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 bg-primary/5 dark:bg-white/5 px-2 py-0.5 rounded">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-secondary mb-4 leading-normal">
                        {group.description}
                      </p>

                      {/* Skills List */}
                      <ul className="space-y-2">
                        {group.skills?.map((skill: string, sIdx: number) => (
                          <li
                            key={sIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-secondary font-normal"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400 mt-1.5 shrink-0"></span>
                            <span className="leading-snug">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
