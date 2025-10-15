import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const contacts = [
    { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67' },
    { icon: 'Mail', title: 'Email', value: 'info@kadastr.ru' },
    { icon: 'MapPin', title: 'Адрес', value: 'г. Москва, ул. Примерная, д. 1' },
    { icon: 'Clock', title: 'Режим работы', value: 'Пн-Пт: 9:00 - 18:00' }
  ];

  return (
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
              {contacts.map((contact, index) => (
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
  );
};

export default ContactSection;
