import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="главная" className="relative bg-gradient-to-br from-white to-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-heading">
              Профессиональные услуги кадастра
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Технический план зданий и сооружений. Быстро, качественно, с гарантией.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('контакты')}
              >
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('услуги')}
              >
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="animate-slide-up">
            <img 
              src="https://cdn.poehali.dev/projects/fef2a8d7-7c11-44f7-8938-5dd61f36fdf4/files/97f27bb0-28f4-4adf-b9b2-182975da9ac5.jpg"
              alt="Кадастровые услуги"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
