import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getImgPath } from "@/utils/image";

export const metadata: Metadata = {
  title: "SafeGuard Case Study — UI/UX Design | Sachindu Himsara",
  description:
    "A deep-dive UI/UX case study into SafeGuard: a smart emergency response mobile application designed around user needs in critical situations.",
};

const SafeGuardCaseStudy = () => {
  const figmaPrototypeUrl =
    "https://www.figma.com/proto/fdQcXYYFvwWSUfl4nzQ8Qc/Smart-Emergency-Response-App?node-id=19-660&starting-point-node-id=19%3A660&t=pnqHd8ZduTAa9To3-1";

  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-gray-100 pt-28 sm:pt-36 pb-24">
      {/* Top Breadcrumb & Return Link */}
      <div className="container mb-8 sm:mb-12">
        <Link
          href="/#selected-projects"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-secondary hover:text-primary dark:hover:text-white transition-colors"
        >
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
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Selected Projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="container mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            UI/UX CASE STUDY · PIXEL PERFECT COMPETITION
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white leading-[1.15]">
            SafeGuard — Smart Emergency Response Application
          </h1>
          <p className="text-lg sm:text-xl text-secondary leading-relaxed font-normal">
            Designing a calm, high-efficiency mobile interface for people facing
            high-stress crises, active danger zones, and emergency dispatch delays.
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-b border-softGray dark:border-zinc-800 py-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-secondary font-medium">Role</p>
              <p className="text-sm sm:text-base font-semibold text-black dark:text-white mt-1">
                UI/UX Designer (Solo)
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-secondary font-medium">Timeline</p>
              <p className="text-sm sm:text-base font-semibold text-black dark:text-white mt-1">
                12 Days Sprint
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-secondary font-medium">Tools</p>
              <p className="text-sm sm:text-base font-semibold text-black dark:text-white mt-1">
                Figma, FigJam
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-secondary font-medium">Prototype</p>
              <a
                href={figmaPrototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-semibold text-primary dark:text-blue-400 hover:underline inline-flex items-center gap-1 mt-1"
              >
                <span>Figma Proto</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Case Study Hero Banner */}
        <div className="mt-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-softGray dark:border-zinc-800 bg-zinc-950">
          <Image
            src={getImgPath("/images/work/safealert-work-img.jpg")}
            alt="SafeGuard UI/UX Case Study Overview and Mobile Screens"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* Case Study Table of Contents Bar */}
      <div className="container mb-16">
        <div className="p-4 sm:p-6 rounded-2xl bg-softGray/60 dark:bg-zinc-900/50 border border-softGray dark:border-zinc-800">
          <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">
            Case Study Navigation
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium">
            <a href="#overview" className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:text-primary dark:hover:text-blue-400 border border-softGray dark:border-zinc-700 transition">
              1. Project Overview
            </a>
            <a href="#research" className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:text-primary dark:hover:text-blue-400 border border-softGray dark:border-zinc-700 transition">
              2. 15-Participant Research
            </a>
            <a href="#user-flow" className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:text-primary dark:hover:text-blue-400 border border-softGray dark:border-zinc-700 transition">
              3. User Flow
            </a>
            <a href="#wireframes" className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:text-primary dark:hover:text-blue-400 border border-softGray dark:border-zinc-700 transition">
              4. Wireframe Structure
            </a>
            <a href="#final-designs" className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:text-primary dark:hover:text-blue-400 border border-softGray dark:border-zinc-700 transition">
              5. Final Designs & Decisions
            </a>
            <a href="#prototype" className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:text-primary dark:hover:text-blue-400 border border-softGray dark:border-zinc-700 transition">
              6. Prototype & Testing
            </a>
            <a href="#reflection" className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:text-primary dark:hover:text-blue-400 border border-softGray dark:border-zinc-700 transition">
              7. Reflection & Next Steps
            </a>
          </div>
        </div>
      </div>

      <div className="container space-y-20 sm:space-y-28 max-w-5xl">
        {/* ==========================================================================
            1. PROJECT OVERVIEW
           ========================================================================== */}
        <section id="overview" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3 border-b border-black dark:border-zinc-800 pb-4">
            <span className="text-2xl font-mono font-bold text-primary dark:text-blue-400">01</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Project Overview</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black dark:text-white">The Problem</h3>
              <p className="text-secondary leading-relaxed font-normal">
                During acute emergencies such as flash flooding, urban hazards, localized fires, or security lockdowns, individuals experience intense adrenaline and cognitive overload.
              </p>
              <p className="text-secondary leading-relaxed font-normal">
                Standard communication channels (social media feeds, scattered news bulletins, or long SMS broadcasts) force users to read through text-heavy updates while trying to navigate danger. Users struggle to identify whether their exact location is compromised and hesitate when dialing emergency services out of panic or uncertainty.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black dark:text-white">Intended Users</h3>
              <p className="text-secondary leading-relaxed font-normal">
                University students, daily commuters, and local residents who need rapid, reliable, and verified crisis alerts with zero cognitive friction.
              </p>
              <div className="p-4 rounded-xl bg-softGray/50 dark:bg-zinc-900 border border-softGray dark:border-zinc-800 space-y-2">
                <p className="text-sm font-semibold text-black dark:text-white">Key User Contexts:</p>
                <ul className="text-sm text-secondary space-y-1 list-disc list-inside">
                  <li>One hand occupied while moving or holding belongings.</li>
                  <li>Low connectivity or high-stress panic conditions.</li>
                  <li>Urgent need to transmit coordinates to responders in seconds.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h4 className="text-base font-bold text-black dark:text-white mb-1">My Role</h4>
              <p className="text-sm text-secondary">
                End-to-end UI/UX Designer: conducting user research with 15 participants, information architecture, wireframing, UI design, and interactive prototyping.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h4 className="text-base font-bold text-black dark:text-white mb-1">Timeline & Context</h4>
              <p className="text-sm text-secondary">
                12-Day Design Sprint for the Pixel Perfect competition, followed by iterative refinement of user flows and component states.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h4 className="text-base font-bold text-black dark:text-white mb-1">Key Deliverables</h4>
              <p className="text-sm text-secondary">
                Research findings matrix, task user flows, responsive mobile wireframes, dark-mode design system, and a high-fidelity interactive Figma prototype.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. RESEARCH WITH 15 PARTICIPANTS
           ========================================================================== */}
        <section id="research" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3 border-b border-black dark:border-zinc-800 pb-4">
            <span className="text-2xl font-mono font-bold text-primary dark:text-blue-400">02</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Research with 15 Participants</h2>
          </div>

          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            To build a solution grounded in real human behavior rather than assumptions, I conducted qualitative research with <strong className="text-black dark:text-white font-semibold">15 participants</strong> (including 10 university students and 5 local community members) who had experienced severe weather alerts or campus safety advisories.
          </p>

          {/* Research Questions Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-softGray/50 dark:bg-zinc-900 border border-softGray dark:border-zinc-800">
            <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-4">
              Core Questions Investigated
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-softGray dark:border-zinc-700">
                <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase">Question 01</span>
                <p className="text-sm text-black dark:text-white font-medium mt-2">
                  "Where do you currently look for emergency warnings, and what causes friction?"
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-softGray dark:border-zinc-700">
                <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase">Question 02</span>
                <p className="text-sm text-black dark:text-white font-medium mt-2">
                  "In an active crisis, what is the single most critical action you must take within 10 seconds?"
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-softGray dark:border-zinc-700">
                <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase">Question 03</span>
                <p className="text-sm text-black dark:text-white font-medium mt-2">
                  "What causes hesitation or fear when using mobile emergency or SOS tools?"
                </p>
              </div>
            </div>
          </div>

          {/* Actual Findings */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black dark:text-white">Actual Research Findings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <h4 className="text-base font-bold text-black dark:text-white">
                    1. Information Overload Causes Paralysis
                  </h4>
                </div>
                <p className="text-sm text-secondary leading-relaxed">
                  Participants consistently noted that traditional disaster warnings arrive as long paragraphs of text. During stressful moments, users are unable to read lengthy descriptions to understand if their street is in danger.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <h4 className="text-base font-bold text-black dark:text-white">
                    2. Strong Preference for Visual Map Geo-Fencing
                  </h4>
                </div>
                <p className="text-sm text-secondary leading-relaxed">
                  12 out of the 15 participants stated that seeing a colored boundary on a live map immediately communicates danger faster than any textual description of district boundaries.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <h4 className="text-base font-bold text-black dark:text-white">
                    3. Fear of Accidental Trigger vs. Urgent Need for SOS
                  </h4>
                </div>
                <p className="text-sm text-secondary leading-relaxed">
                  Users wanted an instant SOS button, but several participants expressed anxiety about accidentally notifying police or ambulances while handling their phone. This dictated a press-and-confirm or cancel countdown pattern.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <h4 className="text-base font-bold text-black dark:text-white">
                    4. The Need for Immediate Dispatch Feedback
                  </h4>
                </div>
                <p className="text-sm text-secondary leading-relaxed">
                  When calling or signaling in an emergency, silent loading screens heighten anxiety. Participants required immediate on-screen proof that their distress signal and exact coordinates were successfully acknowledged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. USER FLOW
           ========================================================================== */}
        <section id="user-flow" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3 border-b border-black dark:border-zinc-800 pb-4">
            <span className="text-2xl font-mono font-bold text-primary dark:text-blue-400">03</span>
            <h2 className="text-2xl sm:text-3xl font-bold">User Flow & Task Architecture</h2>
          </div>

          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Based on the research findings, the user flow was strictly optimized for three primary emergency tasks, minimizing clicks and keeping primary actions within single-hand thumb reach:
          </p>

          <div className="space-y-6">
            {/* Task 1 */}
            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase">
                Task Flow 01
              </span>
              <h3 className="text-lg font-bold text-black dark:text-white mt-1 mb-3">
                Emergency Alert Reception & Danger Zone Verification
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Push / Critical Alert
                </span>
                <span className="text-secondary">→</span>
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Active Crisis Screen
                </span>
                <span className="text-secondary">→</span>
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Interactive Map with Red Hazard Polygon
                </span>
                <span className="text-secondary">→</span>
                <span className="px-3.5 py-2 rounded-xl bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 font-semibold">
                  Avoid Dangerous Zone
                </span>
              </div>
            </div>

            {/* Task 2 */}
            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase">
                Task Flow 02
              </span>
              <h3 className="text-lg font-bold text-black dark:text-white mt-1 mb-3">
                Single-Tap Emergency SOS Trigger & Confirmation
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Tap Central SOS Button
                </span>
                <span className="text-secondary">→</span>
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Tactile State + 3s Cancel Window
                </span>
                <span className="text-secondary">→</span>
                <span className="px-3.5 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold">
                  Dispatch Confirmed (911 Contacted & Live GPS Transmitted)
                </span>
              </div>
            </div>

            {/* Task 3 */}
            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <span className="text-xs font-mono font-bold text-primary dark:text-blue-400 uppercase">
                Task Flow 03
              </span>
              <h3 className="text-lg font-bold text-black dark:text-white mt-1 mb-3">
                Categorized Hazard Exploration & Safety Guidelines
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm">
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Bottom Hazard Dashboard
                </span>
                <span className="text-secondary">→</span>
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Filter Category (Flooding, Lockdown, Fire)
                </span>
                <span className="text-secondary">→</span>
                <span className="px-3.5 py-2 rounded-xl bg-softGray dark:bg-zinc-800 font-medium">
                  Step-by-step verified action checklist
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            4. WIREFRAMES & STRUCTURAL HIERARCHY
           ========================================================================== */}
        <section id="wireframes" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3 border-b border-black dark:border-zinc-800 pb-4">
            <span className="text-2xl font-mono font-bold text-primary dark:text-blue-400">04</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Wireframes & Structural Architecture</h2>
          </div>

          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Before applying visual styling and color, I developed low-fidelity layout wireframes to test the spatial hierarchy and thumb-reach ergonomic zones on mobile screens.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-softGray/50 dark:bg-zinc-900 border border-softGray dark:border-zinc-800 space-y-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="text-base font-bold text-black dark:text-white">Top Alert Zone</h4>
              <p className="text-sm text-secondary">
                Dedicated exclusively to high-priority alert status, severity classification, and active timer countdown so users know immediately if they are in an active hazard zone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-softGray/50 dark:bg-zinc-900 border border-softGray dark:border-zinc-800 space-y-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="text-base font-bold text-black dark:text-white">Central Map & SOS</h4>
              <p className="text-sm text-secondary">
                The visual danger polygon is positioned in the upper center, directly above the prominent, circular SOS button placed in the natural thumb sweep area for fast one-handed activation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-softGray/50 dark:bg-zinc-900 border border-softGray dark:border-zinc-800 space-y-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="text-base font-bold text-black dark:text-white">Modular Bottom Sheet</h4>
              <p className="text-sm text-secondary">
                Secondary incident modules (Flooding, Lockdown, Fire) are organized into structured chips, keeping non-urgent information organized without cluttering the primary SOS screen.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            5. FINAL DESIGNS & KEY DESIGN DECISIONS
           ========================================================================== */}
        <section id="final-designs" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3 border-b border-black dark:border-zinc-800 pb-4">
            <span className="text-2xl font-mono font-bold text-primary dark:text-blue-400">05</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Final Designs & Key Decisions</h2>
          </div>

          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            The final interface integrates a high-contrast dark aesthetic with explicit visual hierarchy, reducing eye strain during night emergencies and maximizing battery efficiency on OLED screens.
          </p>

          {/* Design Decisions Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                Decision 1: High-Contrast Emergency Red & Glow Rationale
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Emergency actions use a high-visibility crimson red (`#E53E3E`) with a soft glow effect. In testing with simulated blurred vision and low light, this ensured the SOS trigger remained unmistakably identifiable within 0.5 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                Decision 2: Clear Dispatch Status Confirmation
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Immediately below the SOS button, prominent confirmation badges indicate: <em>"911 Contacted"</em> and <em>"Emergency Services Dispatched"</em> with green indicators to eliminate uncertainty during a panic attack.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                Decision 3: Real-Time Geo-Fenced Dangerous Zone
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Instead of street-by-street text notices, a highlighted red polygon clearly illustrates the perimeter of the active hazard (e.g. <em>"Flooding: Zone A - High Risk, Avoid Area"</em>) relative to the user's current GPS location.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                Decision 4: Categorized Danger Badges
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                A streamlined dashboard organizes concurrent local events into standardized cards: Flooding (Active), Lockdown (Severe), Fire (Near), and High Risk Area, enabling quick situation assessment without cognitive overload.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            6. PROTOTYPE AND TESTING
           ========================================================================== */}
        <section id="prototype" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3 border-b border-black dark:border-zinc-800 pb-4">
            <span className="text-2xl font-mono font-bold text-primary dark:text-blue-400">06</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Prototype & Usability Testing</h2>
          </div>

          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            The complete flow was implemented as a clickable, interactive prototype in Figma, incorporating Smart Animate transitions and realistic timer animations.
          </p>

          {/* Interactive Figma Callout Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
                Experience the Interactive Prototype
              </h3>
              <p className="text-secondary text-sm sm:text-base max-w-lg">
                Click through the live emergency response flow, test the SOS trigger mechanism, and examine the danger zone map transitions directly in Figma.
              </p>
            </div>
            <a
              href={figmaPrototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all text-base inline-flex items-center gap-2 shrink-0"
            >
              <span>Launch Figma Prototype</span>
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Authentic Testing Feedback & Honest Future Steps */}
          <div className="p-6 sm:p-8 rounded-2xl bg-softGray/50 dark:bg-zinc-900 border border-softGray dark:border-zinc-800 space-y-4">
            <h3 className="text-lg font-bold text-black dark:text-white">
              Prototype Feedback & Planned Usability Testing
            </h3>
            <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
              In preliminary walk-through sessions with student peers, participants successfully located the SOS trigger and understood the danger zone map in under 5 seconds. Feedback emphasized that the live dispatch status bar provided immediate reassurance.
            </p>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-sm">
              <strong className="font-semibold">Future Testing Milestone:</strong> Formal usability lab testing with emergency responders, dispatchers, and older adults has not yet been conducted and is planned as an upcoming evaluation phase to measure task completion speed during live drill simulations.
            </div>
          </div>
        </section>

        {/* ==========================================================================
            7. REFLECTION & NEXT STEPS
           ========================================================================== */}
        <section id="reflection" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3 border-b border-black dark:border-zinc-800 pb-4">
            <span className="text-2xl font-mono font-bold text-primary dark:text-blue-400">07</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Reflection & What I Would Improve Next</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-lg font-bold text-black dark:text-white">What I Learned</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Designing for emergency contexts requires extreme discipline. Unlike typical consumer apps that optimize for engagement or retention, emergency UX requires eliminating every ounce of cognitive friction. A button that is hard to find or confusing can have real-world safety implications.
              </p>
              <p className="text-sm text-secondary leading-relaxed">
                The research phase reinforced that user mental models during panic are drastically simplified; visual feedback and single-tap accessibility must always supersede complex navigational hierarchies.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-softGray dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3">
              <h3 className="text-lg font-bold text-black dark:text-white">What I Would Improve Next</h3>
              <ul className="text-sm text-secondary space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-black dark:text-white font-medium">Offline SMS Fallback:</strong> Enabling automated SMS and Bluetooth mesh broadcast for areas where cellular data infrastructure is down.
                </li>
                <li>
                  <strong className="text-black dark:text-white font-medium">Multilingual Accessibility:</strong> Providing one-tap audio instructions and Sinhalese and Tamil localization tailored to emergency needs in Sri Lanka.
                </li>
                <li>
                  <strong className="text-black dark:text-white font-medium">Wearable Companion App:</strong> Creating a watch interface for wrist-worn one-tap SOS and haptic pulse alerts during active crises.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Navigation & Case Study Footer */}
        <div className="pt-12 border-t border-softGray dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/#selected-projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-softGray dark:border-zinc-700 text-secondary hover:text-black dark:hover:text-white text-sm font-medium hover:border-black dark:hover:border-white transition"
          >
            ← Back to All Projects
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="mailto:sachinduhimsara06@gmail.com"
              className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition shadow-sm"
            >
              Contact Sachindu for Opportunities
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SafeGuardCaseStudy;
