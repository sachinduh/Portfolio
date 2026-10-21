"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const ContactBar = () => {
  return (
    <section className="border-t border-b border-softGray dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-5 md:py-6">
          {/* Direct Working Contact Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 lg:gap-8">
            {/* 1. Working Email Link */}
            <a
              href="mailto:sachinduhimsara06@gmail.com"
              className="flex items-center gap-2 text-sm sm:text-base font-medium text-black dark:text-zinc-200 hover:text-primary dark:hover:text-blue-400 transition-colors group"
            >
              <span className="p-1.5 rounded-full bg-softGray dark:bg-zinc-800 group-hover:bg-primary/10 transition-colors">
                <Image
                  src={getImgPath("/images/icon/mail-icon.svg")}
                  alt="Email icon"
                  width={18}
                  height={18}
                  className="min-w-[18px] min-h-[18px]"
                />
              </span>
              <span>sachinduhimsara06@gmail.com</span>
            </a>

            {/* 2. Working Phone / WhatsApp Link */}
            <a
              href="tel:+94742563224"
              className="flex items-center gap-2 text-sm sm:text-base font-medium text-black dark:text-zinc-200 hover:text-primary dark:hover:text-blue-400 transition-colors group"
            >
              <span className="p-1.5 rounded-full bg-softGray dark:bg-zinc-800 group-hover:bg-primary/10 transition-colors">
                <Image
                  src={getImgPath("/images/icon/call-icon.svg")}
                  alt="Phone icon"
                  width={18}
                  height={18}
                  className="min-w-[18px] min-h-[18px]"
                />
              </span>
              <span>+94 74 256 3224</span>
            </a>

            {/* 3. Downloadable CV Working Link */}
            <a
              href={getImgPath("/Sachindu_Himsara_Resume.pdf")}
              download="Sachindu_Himsara_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base font-medium text-primary dark:text-blue-400 hover:underline group"
            >
              <span className="p-1.5 rounded-full bg-primary/10 dark:bg-blue-400/10">
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </span>
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Social & Strongest Project Case Study Link */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            {/* Featured Case Study Link - Expenses App on Behance */}
            <a
              href="https://www.behance.net/gallery/257415005/Expenses-Personal-Finance-Mobile-App-UIUX-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold transition"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span>Expenses App on Behance ↗</span>
            </a>

            {/* 5. Working LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/sachindu-h-mendis-93666426b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-softGray dark:border-zinc-800 hover:border-primary text-black dark:text-white text-xs sm:text-sm font-medium hover:text-primary transition"
            >
              <Image
                src={getImgPath("/images/icon/linkedin-icon.svg")}
                alt="LinkedIn"
                width={16}
                height={16}
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
