import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqItems = [
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
  ];

  return (
    <section id="вопросответ" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-4 font-heading">Часто задаваемые вопросы</h2>
        <p className="text-center text-gray-600 mb-12">
          Ответы на популярные вопросы о наших услугах
        </p>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
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
  );
};

export default FAQSection;
