import Icon from '@/components/ui/icon';

const LicensesSection = () => {
  const licenses = [
    { icon: 'Award', title: 'Лицензия СРО', desc: 'Членство в саморегулируемой организации' },
    { icon: 'ShieldCheck', title: 'Аттестаты', desc: 'Кадастровых инженеров' },
    { icon: 'FileCheck2', title: 'Страхование', desc: 'Профессиональной ответственности' },
    { icon: 'Medal', title: 'Опыт', desc: 'Более 10 лет работы' }
  ];

  return (
    <section id="лицензии" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-heading">Лицензии и сертификаты</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Наша компания имеет все необходимые разрешения для оказания кадастровых услуг
        </p>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {licenses.map((item, index) => (
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
  );
};

export default LicensesSection;
