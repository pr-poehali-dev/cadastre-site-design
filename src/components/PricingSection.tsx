import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricingSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const PricingSection = ({ scrollToSection }: PricingSectionProps) => {
  const plans = [
    {
      title: 'Базовый',
      price: '15 000',
      features: [
        'Технический план здания до 100 м²',
        'Выезд специалиста',
        'Подготовка документов',
        'Консультация'
      ]
    },
    {
      title: 'Стандарт',
      price: '25 000',
      features: [
        'Технический план здания до 300 м²',
        'Выезд специалиста',
        'Подготовка документов',
        'Сопровождение в Росреестре',
        'Срочное оформление'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: 'от 40 000',
      features: [
        'Технический план здания любой площади',
        'Выезд специалиста',
        'Полное юридическое сопровождение',
        'Исправление ошибок',
        'Индивидуальные условия'
      ]
    }
  ];

  return (
    <section id="цены" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-heading">Цены</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Прозрачное ценообразование без скрытых платежей
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}
            >
              <CardHeader>
                {plan.popular && (
                  <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-2">
                    Популярный
                  </div>
                )}
                <CardTitle className="font-heading text-2xl">{plan.title}</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4 font-heading">
                  {plan.price} <span className="text-xl text-gray-500">₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => scrollToSection('контакты')}
                >
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
