import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="relative bg-softGray py-14 md:py-28">
        <div className="absolute top-0 w-full px-9 pointer-events-none opacity-40">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            {/* Section Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-10 md:mb-14">
              <div>
                <h2>About Me</h2>
                <p className="text-secondary text-sm md:text-base mt-1">
                  My background, design philosophy, and internship goals.
                </p>
              </div>
              <p className="text-xl text-primary font-semibold">( 01 )</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
              {/* Profile Avatar Banner */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative w-[280px] sm:w-[320px] rounded-3xl overflow-hidden border border-softGray dark:border-zinc-800 shadow-lg bg-white dark:bg-zinc-900 p-3">
                  <Image
                    src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                    alt="Sachindu Himsara Design Avatar"
                    width={320}
                    height={420}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                  {/* Status Badge */}
                  <div className="mt-3 p-3 rounded-xl bg-softGray dark:bg-zinc-800/80 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
                      Uva Wellassa University
                    </p>
                    <p className="text-xs text-secondary mt-0.5">
                      BSc (Hons) Industrial IT Undergraduate
                    </p>
                  </div>
                </div>
              </div>

              {/* Informative Content */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* 1. Academic & Tech Foundation */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                    Academic Background & Foundation
                  </h3>
                  <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
                    I am currently pursuing a <strong className="text-black dark:text-white font-semibold">BSc (Hons) in Industrial Information Technology</strong> at <strong className="text-black dark:text-white font-semibold">Uva Wellassa University of Sri Lanka</strong>. My degree combines technical foundations in software engineering, database modeling, and business workflows with user-centered digital design, giving me a strong perspective on how design choices translate into engineering reality.
                  </p>
                </div>

                {/* 2. Design Approach & Problems I Enjoy Solving */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                    Design Approach & Problems I Enjoy Solving
                  </h3>
                  <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
                    My approach is centered on clarity and empathy. I enjoy untangling complex, data-heavy, or high-stress workflows — such as <strong className="text-black dark:text-white font-medium">emergency alert platforms (SafeGuard)</strong>, <strong className="text-black dark:text-white font-medium">financial tracking tools (Expenses App)</strong>, and <strong className="text-black dark:text-white font-medium">community portals (MS Club UWU)</strong> — and restructuring them into calm, accessible, and intuitive user experiences. I prioritize deep user research and structural wireframes before refining aesthetic details.
                  </p>
                </div>

                {/* 3. Practical Tools & Proficiency */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                    Practical Design Tools & Proficiency
                  </h3>
                  <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
                    My primary tool is <strong className="text-black dark:text-white font-medium">Figma</strong>, where I regularly build with Auto Layout, reusable component architectures, interactive variants, and scalable design token systems. I use <strong className="text-black dark:text-white font-medium">FigJam</strong> for early user journey mapping, and leverage my knowledge of <strong className="text-black dark:text-white font-medium">HTML5 & CSS3</strong> for smooth, frictionless collaboration with developers.
                  </p>
                </div>

                {/* 4. Internship Goals & Availability */}
                <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-primary/20 dark:border-blue-900/40 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <h4 className="text-base sm:text-lg font-bold text-black dark:text-white">
                      Internship Availability & Goals
                    </h4>
                  </div>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed">
                    I am actively seeking a <strong className="text-black dark:text-white font-semibold">UI/UX Design Internship</strong> where I can collaborate with seasoned product designers, contribute to production mobile and web products, receive constructive design critiques, and help create meaningful user impact. Available for both full-time and part-time internship roles.
                  </p>
                </div>

                {/* Languages & Quick Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="language icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-sm font-semibold text-black dark:text-white">Languages:</span>
                    <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-black dark:text-white border border-softGray dark:border-zinc-700">
                      English (Professional)
                    </span>
                    <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-black dark:text-white border border-softGray dark:border-zinc-700">
                      Sinhala (Native)
                    </span>
                  </div>

                  <Link
                    href="#contact"
                    className="text-sm font-semibold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Get in touch for internships</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
