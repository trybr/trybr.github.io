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
          <MobileNav />
        </div>

        {/* One-page content */}
        <main className="flex-1 px-8 md:px-14 py-12 md:py-16 pb-32">
          <div className="space-y-24">
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
