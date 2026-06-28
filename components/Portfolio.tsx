import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar — desktop only */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Right side */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Mobile header + nav */}
        <div className="md:hidden sticky top-0 z-10">
          <div className="px-5 py-4 bg-surface border-b border-subtle">
            <p
              className="text-[13px] font-bold text-fore"
              style={{ fontFamily: "var(--font-grotesk)" }}
            >
              Дмитрий Бородин
            </p>
            <p
              className="text-[9px] text-accent tracking-widest mt-0.5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              // Senior Frontend Dev
            </p>
          </div>
          <MobileNav />
        </div>

        {/* One-page content */}
        <main className="flex-1 px-8 md:px-14 py-12 md:py-16">
          <div className="max-w-2xl space-y-24">
            <HeroSection />
            <ExperienceSection />
            <StackSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
}
