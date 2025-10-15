import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary font-heading">КАДАСТР</h1>
            <ul className="hidden md:flex gap-8">
              {['Главная', 'Услуги', 'Цены', 'Вопрос-Ответ', 'Лицензии', 'Контакты'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace('-', ''))}
                    className="text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <Button className="hidden md:block bg-primary hover:bg-primary/90">
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

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

      <section id="услуги" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Предоставляем полный спектр кадастровых услуг для физических и юридических лиц
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Building2',
                title: 'Технический план зданий',
                description: 'Подготовка технического плана для постановки на кадастровый учёт'
              },
              {
                icon: 'FileCheck',
                title: 'Технический план сооружений',
                description: 'Оформление технической документации на любые сооружения'
              },
              {
                icon: 'Wrench',
                title: 'Исправление реестровых ошибок',
                description: 'Корректировка данных в государственном кадастре недвижимости'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading">Цены</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map((plan, index) => (
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

      <section id="вопросответ" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading">Часто задаваемые вопросы</h2>
          <p className="text-center text-gray-600 mb-12">
            Ответы на популярные вопросы о наших услугах
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Что такое технический план?',
                a: 'Технический план — это документ, который содержит описание объекта недвижимости и необходим для постановки на кадастровый учёт. Включает в себя чертежи, схемы и текстовую часть с характеристиками объекта.'
              },
              {
                q: 'Сколько времени занимает подготовка технического плана?',
                a: 'Стандартный срок подготовки технического плана составляет 5-7 рабочих дней с момента проведения замеров. Возможно срочное оформление за 2-3 дня за дополнительную плату.'
              },
              {
                q: 'Какие документы нужны для заказа услуги?',
                a: 'Для оформления технического плана потребуется паспорт заказчика и правоустанавливающие документы на объект недвижимости. Полный список документов мы предоставим при консультации.'
              },
              {
                q: 'Предоставляете ли вы гарантию на свои услуги?',
                a: 'Да, мы предоставляем гарантию на все наши услуги. Если Росреестр отклонит документы по нашей вине, мы бесплатно исправим все замечания и повторно подадим документы.'
              },
              {
                q: 'Работаете ли вы с юридическими лицами?',
                a: 'Да, мы работаем как с физическими, так и с юридическими лицами. Для организаций предусмотрены специальные условия и возможность заключения долгосрочных договоров.'
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="лицензии" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading">Лицензии и сертификаты</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Наша компания имеет все необходимые разрешения для оказания кадастровых услуг
          </p>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Award', title: 'Лицензия СРО', desc: 'Членство в саморегулируемой организации' },
              { icon: 'ShieldCheck', title: 'Аттестаты', desc: 'Кадастровых инженеров' },
              { icon: 'FileCheck2', title: 'Страхование', desc: 'Профессиональной ответственности' },
              { icon: 'Medal', title: 'Опыт', desc: 'Более 10 лет работы' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={40} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-heading">Контакты</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Наши контакты</h3>
              <div className="space-y-6">
                {[
                  { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67' },
                  { icon: 'Mail', title: 'Email', value: 'info@kadastr.ru' },
                  { icon: 'MapPin', title: 'Адрес', value: 'г. Москва, ул. Примерная, д. 1' },
                  { icon: 'Clock', title: 'Режим работы', value: 'Пн-Пт: 9:00 - 18:00' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{contact.title}</div>
                      <div className="text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Оставьте заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-heading">КАДАСТР</h3>
              <p className="text-gray-400">
                Профессиональные кадастровые услуги с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-heading">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                {['Услуги', 'Цены', 'FAQ', 'Контакты'].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item === 'FAQ' ? 'вопросответ' : item.toLowerCase())}
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-heading">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@kadastr.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 КАДАСТР. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
