import { useLanguage } from "@/context/LanguageContext";
import {
  experience,
  projects,
  siteConfig,
  stats as statsData,
  stackGroups,
} from "@/lib/data";

export function useLocalizedData() {
  const { language } = useLanguage();

  return {
    experience,
    projects,
    stackGroups,
    stats: statsData,
    siteConfig,
  };
}
