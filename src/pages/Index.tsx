import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TechnologySection from "@/components/TechnologySection";
import CybersecuritySection from "@/components/CybersecuritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";
import CookieConsent from "@/components/CookieConsent";
import { CookieConsentProvider } from "@/hooks/useCookieConsent";

const Index = () => {
  return (
    <CookieConsentProvider>
      <div className="min-h-screen relative">
        <Watermark />
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <HowItWorksSection />
            <AdvantagesSection />
            <TechnologySection />
            <CybersecuritySection />
            <ContactSection />
          </main>
          <Footer />
        </div>
        <CookieConsent />
      </div>
    </CookieConsentProvider>
  );
};

export default Index;
