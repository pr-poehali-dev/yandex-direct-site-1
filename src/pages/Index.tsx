import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Настройка Яндекс.Директ",
      description: "Создание и запуск эффективных рекламных кампаний с нуля",
      icon: "Settings",
      price: "от 15 000 ₽"
    },
    {
      title: "Ведение рекламных кампаний",
      description: "Полное управление и оптимизация ваших рекламных кампаний",
      icon: "TrendingUp",
      price: "от 25 000 ₽"
    },
    {
      title: "Создание лендингов",
      description: "Разработка высококонверсионных посадочных страниц",
      icon: "Globe",
      price: "от 30 000 ₽"
    },
    {
      title: "Оптимизация существующих РК",
      description: "Улучшение показателей и снижение стоимости клика",
      icon: "Target",
      price: "от 20 000 ₽"
    },
    {
      title: "Аудит рекламных кампаний",
      description: "Детальный анализ эффективности и рекомендации",
      icon: "Search",
      price: "от 10 000 ₽"
    },
    {
      title: "Настройка аналитики",
      description: "Внедрение систем отслеживания конверсий и метрик",
      icon: "BarChart3",
      price: "от 12 000 ₽"
    }
  ];

  const cases = [
    {
      title: "Интернет-магазин одежды",
      result: "Увеличение продаж на 340%",
      period: "за 3 месяца",
      metrics: "CTR: 8.2% | CPC: снижен на 45%"
    },
    {
      title: "Медицинский центр",
      result: "Рост записей на 280%",
      period: "за 2 месяца", 
      metrics: "Конверсия: 12.5% | CPA: снижен на 60%"
    },
    {
      title: "IT-услуги",
      result: "Увеличение лидов на 420%",
      period: "за 4 месяца",
      metrics: "ROI: 650% | Качество трафика: +85%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange to-blue rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent">
                ЯНДЕКС.ДИРЕКТ СПЕЦИАЛИСТ
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange transition-colors">Услуги</a>
              <a href="#cases" className="text-gray-700 hover:text-orange transition-colors">Кейсы</a>
              <a href="#contact" className="text-gray-700 hover:text-orange transition-colors">Контакты</a>
              <Button className="bg-gradient-to-r from-orange to-orange-light hover:from-orange-dark hover:to-orange text-white px-6">
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue/10 to-orange/10 animate-float"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue to-orange bg-clip-text text-transparent">
                ЭКСПЕРТ
              </span>
              <br />
              <span className="text-gray-900">Яндекс.Директ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-in-left">
              Увеличиваю продажи через контекстную рекламу.<br />
              <span className="font-semibold text-orange">ROI от 300%</span> уже в первый месяц работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange to-orange-light hover:from-orange-dark hover:to-orange text-white px-8 py-4 text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Получить расчет стоимости
              </Button>
              <Button variant="outline" size="lg" className="border-blue text-blue hover:bg-blue hover:text-white px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть кейсы
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-orange mb-2">5+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue mb-2">200+</div>
                <div className="text-gray-600">успешных проектов</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange mb-2">15М+</div>
                <div className="text-gray-600">рублей прибыли клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue to-orange bg-clip-text text-transparent">
                Услуги
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по настройке и ведению контекстной рекламы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange to-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange">{service.price}</span>
                    <Button variant="outline" size="sm" className="border-blue text-blue hover:bg-blue hover:text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent">
                Кейсы
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные результаты моих клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-orange mb-1">{caseItem.result}</div>
                    <div className="text-gray-600">{caseItem.period}</div>
                  </div>
                  <div className="text-sm text-gray-500 p-3 bg-gray-50 rounded-lg">
                    {caseItem.metrics}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue to-orange bg-clip-text text-transparent">
                  Контакты
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Готов обсудить ваш проект. Консультация бесплатно!
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card className="border-0 shadow-lg h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Оставьте заявку</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="border-gray-200 focus:border-orange" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" className="border-gray-200 focus:border-orange" />
                    </div>
                    <div>
                      <Input placeholder="Email" className="border-gray-200 focus:border-orange" />
                    </div>
                    <div>
                      <Textarea placeholder="Расскажите о вашем проекте" className="border-gray-200 focus:border-orange min-h-32" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange to-orange-light hover:from-orange-dark hover:to-orange text-white py-3">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue to-orange rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Телефон</div>
                    <div className="text-gray-600">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange to-blue rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">expert@yandex-direct.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue to-orange rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telegram</div>
                    <div className="text-gray-600">@yandex_direct_expert</div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Время работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange to-blue rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">ЯНДЕКС.ДИРЕКТ СПЕЦИАЛИСТ</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональная настройка и ведение контекстной рекламы.<br />
                Гарантированный результат с первого месяца работы.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Настройка Яндекс.Директ</li>
                <li>Ведение кампаний</li>
                <li>Аудит РК</li>
                <li>Аналитика</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>expert@yandex-direct.ru</li>
                <li>@yandex_direct_expert</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Яндекс.Директ Специалист. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}