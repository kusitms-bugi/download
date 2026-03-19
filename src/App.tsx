import { useEffect } from "react";
import DownloadPage from "./pages/DownloadPage";
import { trackScrollReachCta } from "./utils/analytics";

function App() {
  useEffect(() => {
    // Track when user scrolls to CTA section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackScrollReachCta();
            // Only track once
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of CTA section is visible
      }
    );

    // Use requestAnimationFrame to ensure DOM is ready before observing
    // This is more reliable than setTimeout and faster than 1 second delay
    const rafId = requestAnimationFrame(() => {
      const ctaSection = document.querySelector('[data-ga-cta-section]');
      if (ctaSection) {
        observer.observe(ctaSection);
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return <DownloadPage />;
}

export default App;
