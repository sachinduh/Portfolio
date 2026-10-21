"use client";

import { useEffect, useState } from "react";
import Logo from "../logo";
import { getImgPath } from "@/utils/image";
import Link from "next/link";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-5 sm:py-7">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            <div className="flex items-center gap-6 sm:gap-8">
              <Logo />

              {/* Navigation Links (Desktop) */}
              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link
                  href="/#selected-projects"
                  className="text-secondary hover:text-primary dark:hover:text-white transition"
                >
                  Selected Projects
                </Link>
                <a
                  href="https://www.behance.net/gallery/257415005/Expenses-Personal-Finance-Mobile-App-UIUX-Design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Expenses App Case Study</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-primary/10 dark:bg-white/10">
                    Featured
                  </span>
                  <span className="text-xs">↗</span>
                </a>
                <Link
                  href="/#about"
                  className="text-secondary hover:text-primary dark:hover:text-white transition"
                >
                  About
                </Link>
                <Link
                  href="/#skills"
                  className="text-secondary hover:text-primary dark:hover:text-white transition"
                >
                  Skills
                </Link>
                <Link
                  href="/#contact"
                  className="text-secondary hover:text-primary dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4">
              {/* Email quick link */}
              <a
                href="mailto:sachinduhimsara06@gmail.com"
                aria-label="Email Sachindu"
                className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-full border border-softGray dark:border-zinc-800 text-secondary hover:text-primary dark:hover:text-white hover:border-primary transition"
                title="Email Sachindu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>

              {/* LinkedIn quick link */}
              <a
                href="https://www.linkedin.com/in/sachindu-h-mendis-93666426b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sachindu's LinkedIn Profile"
                className="inline-flex items-center justify-center p-2.5 rounded-full border border-softGray dark:border-zinc-800 text-secondary hover:text-primary dark:hover:text-white hover:border-primary transition"
                title="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>

              {/* Behance quick link */}
              <a
                href="https://www.behance.net/gallery/257415005/Expenses-Personal-Finance-Mobile-App-UIUX-Design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sachindu's Behance Case Study"
                className="inline-flex items-center justify-center p-2.5 rounded-full border border-softGray dark:border-zinc-800 text-secondary hover:text-primary dark:hover:text-white hover:border-primary transition"
                title="Behance Case Study: Expenses App"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.357 0-6.625-2.909-6.625-6.625 0-4.048 2.628-6.375 6.475-6.375 3.518 0 5.625 2.115 5.625 5.765 0 .543-.075 1.135-.075 1.135h-8.85c.105 2.227 1.575 3.3 3.525 3.3 1.5 0 2.55-.75 2.85-1.2h2.176zm-5.176-5.55c-.075-1.575-1.125-2.55-2.775-2.55-1.725 0-2.625 1.05-2.775 2.55h5.55zm-12.55-7.45h5.1c2.85 0 4.5 1.5 4.5 3.6 0 1.275-.75 2.4-1.95 2.925 1.65.525 2.55 1.8 2.55 3.375 0 2.55-2.025 4.1-5.1 4.1h-5.1v-14zm3 5.4h1.875c1.125 0 1.95-.525 1.95-1.575s-.825-1.575-1.95-1.575h-1.875v3.15zm0 6.3h2.175c1.275 0 2.175-.6 2.175-1.8 0-1.2-.9-1.8-2.175-1.8h-2.175v3.6z"/>
                </svg>
              </a>

              {/* Dark mode button */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Dark or Light Mode"
                className="theme-toggle-btn no-print relative p-2.5 rounded-full border border-primary text-black dark:text-white hover:bg-primary/10 flex items-center justify-center w-10 h-10 cursor-pointer shadow-sm overflow-hidden"
              >
                {darkMode ? (
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
                    className="text-amber-400"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                ) : (
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
                    className="text-gray-800"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                )}
              </button>

              {/* Download CV CTA */}
              <a
                href={getImgPath("/Sachindu_Himsara_Resume.pdf")}
                download="Sachindu_Himsara_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden cursor-pointer py-2 sm:py-2.5 px-3.5 sm:px-5 border border-primary rounded-full group inline-flex items-center justify-center bg-transparent hover:bg-primary transition-all duration-300"
              >
                <span className="relative z-10 text-xs sm:text-sm font-semibold text-primary group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
