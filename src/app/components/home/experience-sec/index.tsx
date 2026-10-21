import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getImgPath } from '@/utils/image';

const ExperienceSec = () => {
  const projects = [
    {
      number: "01",
      title: "SafeGuard",
      category: "Mobile UI/UX · User research · Prototyping",
      context: "Pixel Perfect Competition",
      description: "A smart emergency response application designed around user needs in emergency situations.",
      image: "/images/work/safealert-work-img.jpg",
      href: "/safeguard/",
      buttonText: "View Case Study",
      isInternal: true,
      figmaUrl: "https://www.figma.com/proto/fdQcXYYFvwWSUfl4nzQ8Qc/Smart-Emergency-Response-App?node-id=19-660&starting-point-node-id=19%3A660&t=pnqHd8ZduTAa9To3-1"
    },
    {
      number: "02",
      title: "Expenses App",
      category: "Mobile UI · Financial tracking · Data visualization",
      context: "Expenses App — Mobile App Design Project",
      description: "An expense-tracking interface for organizing transactions and presenting spending information.",
      image: "/images/work/expenses-work-img.jpg",
      href: "https://www.behance.net/gallery/257415005/Expenses-Personal-Finance-Mobile-App-UIUX-Design",
      buttonText: "View Case Study",
      isInternal: false,
      figmaUrl: "https://www.figma.com/design/uP4YaWN7kxskOxKzVIOzUP/Expenses-App?node-id=0-1&t=yc9jEyKh4RntkgUb-1"
    },
    {
      number: "03",
      title: "MS Club UWU",
      category: "Web UI/UX · Information hierarchy · Responsive design",
      context: "University Campus Web Project",
      description: "A university club landing page presenting events, learning resources and community information.",
      image: "/images/work/landingpage-work-img.jpg",
      href: "https://www.figma.com/design/8lvBKguAU48K2rRaGNCBAm/landing-page?node-id=0-1&t=SqhbCg7zrpSUsH8G-1",
      buttonText: "View Case Study",
      isInternal: false,
      figmaUrl: "https://www.figma.com/design/8lvBKguAU48K2rRaGNCBAm/landing-page?node-id=0-1&t=SqhbCg7zrpSUsH8G-1"
    }
  ];

  return (
    <section id="selected-projects" className="scroll-mt-20">
      <div id="projects" className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-10 md:mb-16">
            <div>
              <h2>Selected Projects</h2>
              <p className="text-secondary text-sm md:text-base mt-2">
                Focused UI/UX design case studies featuring research, wireframes, and interactive prototypes.
              </p>
            </div>
            <p className="text-xl text-primary font-semibold shrink-0">( 02 )</p>
          </div>

          {/* Projects List */}
          <div className="space-y-12 md:space-y-20">
            {projects.map((project) => (
              <div
                key={project.number}
                className="group p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-softGray bg-white/50 dark:bg-zinc-900/40 hover:border-primary/40 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Information */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Project Number & Title */}
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-2xl sm:text-3xl font-bold text-primary dark:text-blue-400 font-mono">
                          {project.number}
                        </span>
                        <span className="text-xl sm:text-2xl text-secondary font-light">—</span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
                          {project.title}
                        </h3>
                      </div>

                      {/* Category & Tags */}
                      <p className="text-primary dark:text-blue-300 text-sm sm:text-base font-medium tracking-wide mb-3">
                        {project.category}
                      </p>

                      {/* Context Pill */}
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-softGray dark:bg-zinc-800 text-secondary mb-4">
                        {project.context}
                      </div>

                      {/* Description */}
                      <p className="text-secondary text-base sm:text-lg leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.isInternal ? (
                        <Link
                          href={project.href}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-base font-semibold shadow-md hover:bg-primary/90 transition-all duration-200"
                        >
                          <span>{project.buttonText}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                      ) : (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-base font-semibold shadow-md hover:bg-primary/90 transition-all duration-200"
                        >
                          <span>{project.buttonText}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      )}

                      {/* Figma Prototype direct link */}
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-softGray dark:border-zinc-700 text-secondary hover:text-black dark:hover:text-white text-sm font-medium hover:border-black dark:hover:border-white transition-all duration-200"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 38 57"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                          </svg>
                          <span>Figma Prototype</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Preview */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-xl overflow-hidden shadow-lg border border-softGray dark:border-zinc-800 bg-softGray/50 aspect-video sm:aspect-[16/10] group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={getImgPath(project.image)}
                        alt={`${project.title} design preview`}
                        width={680}
                        height={425}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {project.isInternal ? (
                        <Link
                          href={project.href}
                          className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                        >
                          <span className="px-5 py-2.5 rounded-full bg-white text-primary font-semibold text-sm shadow-md">
                            Open Case Study ↗
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                        >
                          <span className="px-5 py-2.5 rounded-full bg-white text-primary font-semibold text-sm shadow-md">
                            View on Figma ↗
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;