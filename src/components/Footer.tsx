interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const menuItems = ['Услуги', 'Цены', 'FAQ', 'Контакты'];

  return (
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
              {menuItems.map((item, index) => (
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
  );
};

export default Footer;
