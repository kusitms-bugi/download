import { useEffect, useState } from "react";

import type { ModeToggleValue } from "@gbgr/ui";
import { useTranslation } from "react-i18next";

import { Cta } from "./download/components/Cta";
import { FeaturesAndFaqSection } from "./download/components/FeaturesAndFaqSection";
import { Footer } from "./download/components/Footer";
import { Gnb } from "./download/components/Gnb";
import { Hero } from "./download/components/Hero";
import { KeypointsSection } from "./download/components/KeypointsSection";
import { WhySection } from "./download/components/WhySection";

export default function DownloadPage() {
  const { t } = useTranslation();
  const storageKey = "gbgr.theme";

  const [theme, setTheme] = useState<ModeToggleValue>(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");

    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const modeAriaLabel = theme === "dark" ? t("common.darkMode") : t("common.lightMode");

  return (
    <div className="min-h-screen bg-[var(--gbgr-page-bg)] text-[var(--gbgr-page-text)]">
      <Gnb modeAriaLabel={modeAriaLabel} modeValue={theme} onModeValueChange={setTheme} />
      <main>
        <Hero />
        <WhySection />
        <KeypointsSection />
        <FeaturesAndFaqSection />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
