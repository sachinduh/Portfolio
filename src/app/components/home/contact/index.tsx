"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const reset = () => {
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://formsubmit.co/ajax/sachinduhimsara06@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        number: formData.number,
        email: formData.email,
        message: formData.message,
        _subject: `New UI/UX Inquiry from ${formData.name}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.success === "true" || data.success === true) {
          setSubmitted(true);
          reset();
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Form error:", error);
      });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="no-print scroll-mt-20">
      <div className="container">
        <div className="pt-16 md:pt-28 pb-20">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-10 md:mb-16">
            <div>
              <h2>Contact Me</h2>
              <p className="text-secondary text-sm md:text-base mt-1">
                Reach out for UI/UX internships, collaboration, or to discuss design projects.
              </p>
            </div>
            <p className="text-xl text-primary font-semibold shrink-0">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Direct Interactive Form */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 rounded-3xl border border-softGray dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
                Send a Direct Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label block mb-1">
                        Your Name *
                      </label>
                      <input
                        required
                        className="input text-base text-black dark:text-white"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="number" className="label block mb-1">
                        Phone Number
                      </label>
                      <input
                        className="input text-base text-black dark:text-white"
                        id="number"
                        type="tel"
                        name="number"
                        placeholder="+1 (555) 000-0000"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="label block mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      className="input text-base text-black dark:text-white"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="label block mb-1">
                      Project Details / Internship Opportunity *
                    </label>
                    <textarea
                      required
                      className="input text-base text-black dark:text-white resize-y"
                      name="message"
                      id="message"
                      placeholder="Hi Sachindu, we are looking for a UI/UX design intern..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  {submitted && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm">
                      <Image
                        src={getImgPath("/images/icon/success-icon.svg")}
                        alt="success-icon"
                        width={24}
                        height={24}
                      />
                      <p className="text-emerald-800 dark:text-emerald-300 font-medium">
                        Thank you! Your message has been sent successfully. I will get in touch with you shortly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative overflow-hidden cursor-pointer w-fit py-3.5 px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold shadow-md active:scale-95 transition-all duration-200"
                  >
                    <span className="relative z-10 text-base">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Prominent Working Contact Links */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">
                Direct Contact & Links
              </h3>

              {/* 1. Email Working Card */}
              <a
                href="mailto:sachinduhimsara06@gmail.com"
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-softGray dark:border-zinc-800 hover:border-primary dark:hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-xl bg-primary/10 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Image
                      src={getImgPath("/images/icon/mail-icon.svg")}
                      alt="Email icon"
                      width={22}
                      height={22}
                    />
                  </span>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-secondary">
                      Email Address
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      sachinduhimsara06@gmail.com
                    </p>
                  </div>
                </div>
                <span className="text-secondary group-hover:text-primary transition-colors text-lg">
                  ↗
                </span>
              </a>

              {/* 2. Download CV Working Card */}
              <a
                href={getImgPath("/Sachindu_Himsara_Resume.pdf")}
                download="Sachindu_Himsara_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-softGray dark:border-zinc-800 hover:border-primary dark:hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-xl bg-primary/10 text-primary dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
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
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-secondary">
                      Downloadable CV
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      Sachindu_Himsara_Resume.pdf
                    </p>
                  </div>
                </div>
                <span className="text-secondary group-hover:text-primary transition-colors text-lg">
                  ↓
                </span>
              </a>

              {/* 3. LinkedIn Profile Working Card */}
              <a
                href="https://www.linkedin.com/in/sachindu-h-mendis-93666426b"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-softGray dark:border-zinc-800 hover:border-primary dark:hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Image
                      src={getImgPath("/images/icon/linkedin-icon.svg")}
                      alt="LinkedIn icon"
                      width={22}
                      height={22}
                    />
                  </span>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-wider text-secondary">
                      LinkedIn Profile
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      linkedin.com/in/sachindu-h-mendis
                    </p>
                  </div>
                </div>
                <span className="text-secondary group-hover:text-primary transition-colors text-lg">
                  ↗
                </span>
              </a>

              {/* Featured Case Study: Expenses App on Behance */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-primary/5 to-transparent border border-blue-500/20 dark:border-blue-900/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                    Featured Case Study
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-black dark:text-white">
                  Expenses App — Personal Finance Tracker
                </h4>
                <p className="text-xs sm:text-sm text-secondary font-normal">
                  Published on Behance: Mobile UI/UX design, interactive transaction flows, and financial charts.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://www.behance.net/gallery/257415005/Expenses-Personal-Finance-Mobile-App-UIUX-Design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition"
                  >
                    <span>View on Behance ↗</span>
                  </a>
                  <Link
                    href="/safeguard/"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-softGray dark:border-zinc-700 hover:border-black dark:hover:border-white text-black dark:text-white text-xs font-medium transition"
                  >
                    <span>SafeGuard Case Study →</span>
                  </Link>
                </div>
              </div>

              {/* Phone / WhatsApp direct item */}
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-softGray/50 dark:bg-zinc-800/50 text-xs sm:text-sm text-secondary">
                <span>Phone / WhatsApp:</span>
                <a
                  href="https://wa.me/94742563224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black dark:text-white hover:text-primary underline"
                >
                  +94 74 256 3224
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
