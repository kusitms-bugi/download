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

    // Look for CTA section after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const ctaSection = document.querySelector('[data-ga-cta-section]');
      if (ctaSection) {
        observer.observe(ctaSection);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return <DownloadPage />;
}

export default App;
