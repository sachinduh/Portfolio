import Logo from "../logo";
import Link from "next/link";
import { getImgPath } from "@/utils/image";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-14 border-t border-softGray dark:border-zinc-800 bg-white dark:bg-[#121212]">
      <div className="container">
        <div className="flex flex-col gap-8">
          {/* Logo Divider */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-softGray dark:bg-zinc-800" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-softGray dark:bg-zinc-800" />
          </div>

          {/* Quick Contact & Working Links Bar */}
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs sm:text-sm text-secondary">
            {/* Left Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="mailto:sachinduhimsara06@gmail.com"
                className="hover:text-primary dark:hover:text-white transition font-medium"
              >
                sachinduhimsara06@gmail.com
              </a>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
              <a
                href={getImgPath("/Sachindu_Himsara_Resume.pdf")}
                download="Sachindu_Himsara_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-white transition font-medium"
              >
                Download CV (PDF)
              </a>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
              <a
                href="https://www.linkedin.com/in/sachindu-h-mendis-93666426b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-white transition font-medium"
              >
                LinkedIn Profile
              </a>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
              <a
                href="https://www.behance.net/gallery/257415005/Expenses-Personal-Finance-Mobile-App-UIUX-Design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-white text-primary dark:text-blue-400 font-semibold transition"
              >
                Expenses App on Behance ↗
              </a>
            </div>

            {/* Copyright */}
            <p className="text-secondary text-center sm:text-right">
              © {new Date().getFullYear()}{" "}
              <span className="text-primary dark:text-blue-400 font-medium">Sachindu Himsara</span>
              . UI/UX Designer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
