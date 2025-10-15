import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const menuItems = ['Главная', 'Услуги', 'Цены', 'Вопрос-Ответ', 'Лицензии', 'Контакты'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary font-heading">КАДАСТР</h1>
          <ul className="hidden md:flex gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.toLowerCase().replace('-', ''))}
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
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-gray-700" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(item.toLowerCase().replace('-', ''))}
                    className="text-gray-700 hover:text-primary transition-colors font-medium w-full text-left py-2"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Заказать звонок
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
