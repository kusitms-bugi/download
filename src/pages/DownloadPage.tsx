import { Cta } from './download/components/Cta';
import { FeaturesAndFaqSection } from './download/components/FeaturesAndFaqSection';
import { Footer } from './download/components/Footer';
import { Gnb } from './download/components/Gnb';
import { Hero } from './download/components/Hero';
import { KeypointsSection } from './download/components/KeypointsSection';
import { WhySection } from './download/components/WhySection';

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#f9f8f7] text-[#212121]">
      <Gnb />
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

