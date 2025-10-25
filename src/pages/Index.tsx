import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeView, setActiveView] = useState<'front' | 'side' | 'top'>('front');

  const features = [
    {
      icon: 'Sparkles',
      title: 'Автоматическая мойка',
      description: 'Полностью автоматизированный процесс очистки за 10 минут'
    },
    {
      icon: 'Heart',
      title: 'Безопасно для питомца',
      description: 'Деликатные щетки и специальный шампунь для всех пород'
    },
    {
      icon: 'Droplets',
      title: 'Сушка и массаж',
      description: 'Теплый воздух и массажные щетки для комфорта питомца'
    },
    {
      icon: 'Shield',
      title: 'Гипоаллергенно',
      description: 'Только проверенные средства без вредных компонентов'
    },
    {
      icon: 'Timer',
      title: 'Быстро и удобно',
      description: 'Экономия времени и сил для вас и вашего питомца'
    },
    {
      icon: 'Award',
      title: 'Премиум качество',
      description: 'Профессиональный уход как в груминг-салоне'
    }
  ];

  const howItWorks = [
    { step: 1, title: 'Поместите питомца', description: 'Откройте дверцу и уложите собаку внутрь на мягкий коврик' },
    { step: 2, title: 'Выберите программу', description: 'Выберите размер питомца и тип шерсти на панели управления' },
    { step: 3, title: 'Запустите процесс', description: 'Нажмите старт — мойка, шампунь и сушка пройдут автоматически' },
    { step: 4, title: 'Заберите чистого питомца', description: 'Через 10 минут ваша собака чистая, сухая и довольная' }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Наш лабрадор обожает эту мойку! Раньше купание было стрессом, теперь он сам просится.',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      text: 'Экономлю кучу времени. После прогулки в грязь — 10 минут и пёс идеально чистый!',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      text: 'У нас йорк с длинной шерстью. Мойка справляется отлично, шерсть блестит!',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Стандарт',
      price: '89 900',
      features: ['Базовая мойка', 'Сушка теплым воздухом', '1 режим для средних пород', 'Гарантия 1 год']
    },
    {
      name: 'Премиум',
      price: '129 900',
      features: ['3 режима мойки', 'Массажные щетки', 'Сушка + ароматизация', 'Подходит для всех пород', 'Гарантия 2 года'],
      popular: true
    },
    {
      name: 'Профи',
      price: '179 900',
      features: ['5 режимов мойки', 'Премиум шампуни в комплекте', 'Озонирование', 'Приложение для управления', 'Гарантия 3 года']
    }
  ];

  const faqs = [
    {
      question: 'Безопасна ли мойка для маленьких собак?',
      answer: 'Да, устройство имеет специальные режимы для собак весом от 3 кг. Мягкие щетки и регулируемое давление воды обеспечивают безопасность.'
    },
    {
      question: 'Какой расход воды и электроэнергии?',
      answer: 'Расход воды около 15 литров за цикл, потребление электроэнергии 2 кВт/ч. Это экономичнее, чем мойка вручную.'
    },
    {
      question: 'Нужны ли специальные средства?',
      answer: 'В комплекте идет гипоаллергенный шампунь на 50 моек. Также можно использовать любые жидкие средства для собак.'
    },
    {
      question: 'Как часто нужно чистить устройство?',
      answer: 'Рекомендуется чистка фильтра раз в неделю и полная санитарная обработка раз в месяц. Это занимает 5-10 минут.'
    },
    {
      question: 'Есть ли доставка и установка?',
      answer: 'Да, доставка по России бесплатная. Установка входит в стоимость — наш специалист подключит и покажет, как пользоваться.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">PawWash Pro</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#product" className="hover:text-primary transition-colors">О продукте</a>
              <a href="#features" className="hover:text-primary transition-colors">Преимущества</a>
              <a href="#how" className="hover:text-primary transition-colors">Как работает</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Заказать звонок</Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-accent to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Автоматическая мойка для вашего питомца
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональный уход за собакой любой породы всего за 10 минут. Безопасно, быстро, комфортно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Купить сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Смотреть видео
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">10 мин</div>
                  <div className="text-sm text-muted-foreground">Полный цикл</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Безопасно</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Довольных хозяев</div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/26fd9898-e9e3-4be9-86a1-5a8a9767e12d/files/7a63e2d1-d312-4f55-9f53-d81514eeab73.jpg" 
                  alt="PawWash Pro"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 flex justify-center gap-2">
                  <Button
                    variant={activeView === 'front' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveView('front')}
                  >
                    Фронтальный вид
                  </Button>
                  <Button
                    variant={activeView === 'side' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveView('side')}
                  >
                    Боковой вид
                  </Button>
                  <Button
                    variant={activeView === 'top' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveView('top')}
                  >
                    Вид сверху
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Интерактивный просмотр устройства
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="py-20 px-4">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">О продукте</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PawWash Pro — это инновационное решение для ухода за вашим питомцем. 
            Мы объединили технологии профессионального груминга в компактном домашнем устройстве.
          </p>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-secondary/30" style={{ width: 'calc(100% - 4rem)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Цены и комплектация</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Выберите комплектацию, которая подходит именно вам
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Вопросы и ответы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Остались вопросы?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Свяжитесь с нами удобным способом — мы работаем 24/7
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" className="mx-auto mb-4 text-primary" size={32} />
                <p className="font-semibold mb-2">Телефон</p>
                <p className="text-muted-foreground">8 (800) 555-35-35</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" className="mx-auto mb-4 text-primary" size={32} />
                <p className="font-semibold mb-2">Email</p>
                <p className="text-muted-foreground">info@pawwash.ru</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" className="mx-auto mb-4 text-primary" size={32} />
                <p className="font-semibold mb-2">Telegram</p>
                <p className="text-muted-foreground">@pawwash_support</p>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="text-lg px-12">
            Заказать консультацию
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">PawWash Pro</span>
              </div>
              <p className="text-gray-400">
                Инновационный уход за вашим питомцем
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">Как работает</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PawWash Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
