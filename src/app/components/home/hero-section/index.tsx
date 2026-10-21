import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-32 md:pt-40 pb-12 lg:pb-24 xl:pt-48">
      {/* Background Watermark */}
      <div 
        aria-hidden="true" 
        className="no-print absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.035] dark:opacity-[0.045] text-[90px] sm:text-[140px] md:text-[200px] font-black tracking-tighter uppercase whitespace-nowrap text-black dark:text-white"
      >
        SACHINDU HIMSARA
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-5 md:gap-6 max-w-2xl">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white text-xs sm:text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for UI/UX Design Internships
            </div>

            <div>
              <div className="flex items-center gap-4 sm:gap-6">
                <h1>Hi, I'm Sachindu</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={52}
                    height={52}
                    className="w-10 h-10 sm:w-13 sm:h-13"
                  />
                </div>
              </div>
              <h1 className="text-primary dark:text-blue-400">UI/UX Designer</h1>
            </div>

            {/* Introduction Copy */}
            <div className="space-y-3.5 text-secondary text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Hi, I'm Sachindu — a <strong className="font-semibold text-black dark:text-white">Junior UI/UX Designer</strong> and <strong className="font-semibold text-black dark:text-white">Industrial Information Technology undergraduate</strong> at Uva Wellassa University.
              </p>
              <p>
                I design intuitive digital experiences through user research, wireframing, interface design and interactive prototyping. My projects include a smart emergency response application, a university club website and a mobile expense-tracking app.
              </p>
              <p className="text-black dark:text-gray-200 font-medium">
                I'm looking for a UI/UX design internship where I can learn from experienced designers, collaborate with a team and contribute to meaningful digital products.
              </p>
            </div>

            {/* Call to Actions - View My Work is the most prominent action */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              {/* Primary Button: View My Work */}
              <Link
                href="#selected-projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-primary text-white text-base sm:text-lg font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              </Link>

              {/* Secondary Button: Download CV */}
              <a
                href={getImgPath("/Sachindu_Himsara_Resume.pdf")}
                download="Sachindu_Himsara_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border border-black dark:border-white/30 text-black dark:text-white text-base sm:text-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download CV</span>
              </a>

              {/* Tertiary Button: Contact Me */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border border-softGray dark:border-zinc-700 text-secondary hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white text-base sm:text-lg font-medium transition-all duration-200"
              >
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-blue-400/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <Image
                src={getImgPath("/images/home/banner/Picture1.jpg")}
                alt="Sachindu Himsara - UI/UX Designer"
                width={685}
                height={650}
                className="relative w-full max-w-[480px] xl:max-w-[580px] h-auto object-cover rounded-2xl shadow-xl border border-white/20 dark:border-zinc-800"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
