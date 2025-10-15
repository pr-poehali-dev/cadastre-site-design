import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import LicensesSection from '@/components/LicensesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/servicesData';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection services={servicesData} scrollToSection={scrollToSection} />
      <PricingSection scrollToSection={scrollToSection} />
      <FAQSection />
      <LicensesSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;
