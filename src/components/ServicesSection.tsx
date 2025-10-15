import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Service {
  id: number;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  image: string;
  features: string[];
}

interface ServicesSectionProps {
  services: Service[];
  scrollToSection: (sectionId: string) => void;
}

const ServicesSection = ({ services, scrollToSection }: ServicesSectionProps) => {
  return (
    <section id="услуги" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-heading">Наши услуги</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Предоставляем полный спектр кадастровых услуг для физических и юридических лиц
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20 flex flex-col">
              <CardHeader className="flex-grow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.shortDesc}</CardDescription>
                <div className="text-2xl font-bold text-primary mt-4 font-heading">{service.price} ₽</div>
              </CardHeader>
              <CardContent className="pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Подробнее
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-heading flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={service.icon} size={24} className="text-primary" />
                        </div>
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {service.shortDesc}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 mt-4">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Описание услуги</h3>
                        <p className="text-gray-700 leading-relaxed">{service.fullDesc}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Что входит в услугу</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-semibold">Стоимость услуги:</span>
                          <span className="text-3xl font-bold text-primary font-heading">{service.price} ₽</span>
                        </div>
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90" 
                          size="lg"
                          onClick={() => scrollToSection('контакты')}
                        >
                          Заказать услугу
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
