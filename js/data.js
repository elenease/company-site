///////////////////// ГЛАВНАЯ //////////////////////

// Данные для блоков с фичами отделов

// Данные для списка фичей отдела Код
const features_software = [
  {
    icon: `<i class="fas fa-columns fa-lg red-text"></i>`,
    title: `Всё в комплексе`,
    description: `Оборудование, серверная часть, веб-сервис, адаптивный сайт и мобильные приложения - разработаем полный программно-аппаратный комплекс для любых ваших целей.`
  },
  {
    icon: `<i class="fas fa-fire-alt fa-lg red-text"></i>`,
    title: `В тренде`,
    description: `Используем самые современные технологии разработки программного обеспечения: NodeJS и JavaScript, Kotlin, Web-sockets, Flex, Less, адаптивные сетки, - всё, чтобы ваши приложения и сайты были доступными, быстрыми и надёжными.`
  },
  {
    icon: `<i class="fas fa-child fa-lg red-text"></i>`,
    title: `Для людей`,
    description: `Мы любим свою работу, поэтому делаем проекты удобными и понятными для использования. Тщательно прорабатываем архитектуру и пользовательские сценарии и делаем всё, чтобы приложения выполняли ваши бизнес-цели.`
  }
];

// Данные для списка фичей отдела Железо
const features_hardware = [
  {
    icon: `<i class="fas fa-cogs fa-lg red-text"></i>`,
    title: `Прототипирование с нуля`,
    description: `Разработка схемотехнического решения с согласованием элементной базы, конструктивных особенностей и температурных режимов работы.`
  },
  {
    icon: `<i class="fas fa-fire-alt fa-lg red-text"></i>`,
    title: `Микропрограммирование`,
    description: `Разработка программного обеспечения для контроллеров семейств STM32 с использованием IDE Keil на языке С/C++, FPGA Altera и Xilinx на языке Verilog.`
  },
  {
    icon: `<i class="fas fa-file-alt fa-lg red-text"></i>`,
    title: `Техническая документация`,
    description: `Подготовка пакета документов и GERBER-файлов для последующей передачи заводу-изготовителю в требуемом формате.`
  }
];

// Данные для списка фичей отдела Мастерская
const features_workbench = [
  {
    icon: `<i class="fas fa-tools fa-lg red-text"></i>`,
    title: `Штучная работа`,
    description: `Выполняем индивидуальные заказы на работу с деревом, металлом и множеством других материалов. Изготавливаем вывески, подарки, сувениры, оборудование для квест-румов, предметы интерьера и т.д. Используем фрезеровку и 3D-печать.`
  },
  {
    icon: `<i class="fas fa-gifts fa-lg red-text"></i>`,
    title: `Украшение`,
    description: `Украшаем изделия позолотой, лазерной гравировкой и росписью по эскизу или вашим пожеланиям. Сделаем любой подарок неповторимым и запоминающимся.`
  },
  {
    icon: `<i class="fas fa-truck fa-lg red-text"></i>`,
    title: `Доставка`,
    description: `Иногородним клиентам осуществляем доставку с помощью транспортных компаний.`
  }
];

// Массив с данными карточек проектов
const projects = [{
    badge: `software`,
    img: `img/gllacy/gllacy-index.jpg`,
    details_link: `software.html#gllacy-project`,
    title: `Gllacy Shop`,
    tooltip: `Сайт магазина мороженого GllacyShop`,
    alt: `Скриншот главного экрана проекта Gllacy Shop`,
    description: `Вёрстка статического сайта онлайн-магазина мороженого. Множество декоративных элементов, всплывающее окно корзины, форма обратной связи.`,
    show_animation: `fadeInLeft`,
    photo_effect: `zoom`,
    more_screens_link: `https://drive.google.com/open?id=1YYDpdVTYX5S7yuW-4c5rWyPcAn0o8zcq`
  },
  {
    badge: `hardware`,
    img: `img/pac-robert/pac-index-1.jpg`,
    details_link: `hardware.html`,
    title: `Программно-аппаратный комплекс ROBERT`,
    tooltip: `Программно-аппаратный комплекс ROBERT`,
    alt: `Скриншот схемы программно-аппаратного комплекса ROBERT`,
    description: `Система домашней автоматизации умного дома ROBERT. Оборудование и программное обеспечение для веб-управления.`,
    show_animation: `fadeInLeft`,
    photo_effect: `zoom`,
    more_screens_link: `hardware.html`
  },
  {
    badge: `workbench`,
    img: `img/container/cont-index.jpg`,
    details_link: `workbench.html`,
    title: `Барный органайзер`,
    tooltip: `Барный органайзер`,
    alt: `Фото барного органайзера для кофейни`,
    description: `Деревянный органайзер для трубочек и салфеток по заказу кофейни "ROAST-N-GRIND". С вырезанным логотипом компании по сторонам.`,
    show_animation: `fadeInLeft`,
    photo_effect: `zoom`,
    more_screens_link: `workbench.html`
  },
  {
    badge: `software`,
    img: `img/robert/robert-index.jpg`,
    details_link: `software.html#robert-project`,
    title: `Цифровой консьерж ROBERT`,
    tooltip: `Мобильное приложение ROBERT`,
    alt: `Скриншот экрана мобильного приложения ROBERT`,
    description: `Мобильное приложение для пользователей системы умного дома ROBERT. Доступно в Google Play.`,
    show_animation: `fadeInRight`,
    photo_effect: `zoom`,
    more_screens_link: `software.html#robert-project`
  },
  {
    badge: `hardware`,
    img: `img/shelflabels/shelf-index.jpg`,
    details_link: `hardware.html`,
    title: `Электронные ценники CleverTag`,
    tooltip: `Электронные ценники CleverTag`,
    alt: `Фото электронных ценников в магазине`,
    description: `Система электронных ценников: устройства собственного изготовления, программное обеспечение и интеграция.`,
    show_animation: `fadeInRight`,
    photo_effect: `zoom`,
    more_screens_link: `hardware.html`
  },
  {
    badge: `workbench`,
    img: `img/signboards/signs-index.jpg`,
    details_link: `workbench.html`,
    title: `Вывески-флажки`,
    tooltip: `Вывески-флажки для кофейни ROAST-N-GRIND`,
    alt: `Фото вывесок-флажков`,
    description: `Деревянные вывески для кофейни "ROAST-N-GRIND" в ирландском стиле. Со светодиодной контурной подсветкой. По индивидуальному заказу.`,
    show_animation: `fadeInRight`,
    photo_effect: `zoom`,
    more_screens_link: `workbench.html`
  },
  {
    badge: `software`,
    img: `img/route-config/config-index.png`,
    details_link: `software.html`,
    title: `Конфигуратор маршрутов автотранспорта`,
    tooltip: `Конфигуратор маршрутов общественного транспорта`,
    alt: `Скриншот экрана конфигуратора маршрутов`,
    description: `Приложение для выстраивания маршрутов общественного транспорта с озвучкой остановок и бегущей строкой.`,
    show_animation: `fadeInLeft`,
    photo_effect: `zoom`,
    more_screens_link: `software.html`
  },
  {
    badge: `software`,
    img: `img/robert-house/rob-house-2.png`,
    details_link: `software.html`,
    title: `Умный дом ROBERT для загородного особняка`,
    tooltip: `Умный дом ROBERT для загородного особняка`,
    alt: `Скриншот экрана веб-приложения Robert House`,
    description: `Система управления умным домом ROBERT HOUSE для загородного особняка. Индивидуальный заказ.`,
    show_animation: `fadeInLeft`,
    photo_effect: `zoom`,
    more_screens_link: `software.html`
  },
  {
    badge: `workbench`,
    img: `img/clever/clever-index.jpg`,
    details_link: `workbench.html`,
    title: `Вывеска для цветочного магазина`,
    tooltip: `Вывеска для цветочного магазина Clever`,
    alt: `Фото вывески для цветочного магазина`,
    description: `Вывеска по индивидуальному заказу для цветочного магазина в ТЦ "Башкортостан". Светодиодная подсветка.`,
    show_animation: `fadeInLeft`,
    photo_effect: `zoom`,
    more_screens_link: `https://drive.google.com/open?id=1S45alA7Rtq79IXAb0w561bzgAxpz_7gQ`
  },
  {
    badge: `hardware`,
    img: `img/avtoinform/avtoinform-index.jpg`,
    details_link: `hardware.html`,
    title: `Автоинформатор маршрутов`,
    tooltip: `Автоинформатор`,
    alt: `Фото Автоинформатора`,
    description: `Система для выстраивания маршрута с привязкой озвучки остановок для общественного транспорта.`,
    show_animation: `fadeInRight`,
    photo_effect: `zoom`,
    more_screens_link: `hardware.html#avtoinform-ankor`
  },
  {
    badge: `hardware`,
    img: `img/autophone/autophone-index.jpg`,
    details_link: `hardware.html`,
    title: `Номер телефона под стекло авто`,
    tooltip: `Номер телефона под стекло автомобиля`,
    alt: `Фото номера телефона под стекло`,
    description: `Показывает номер телефона владельца авто при звуковом или механическом воздействии снаружи.`,
    show_animation: `fadeInRight`,
    photo_effect: `zoom`,
    more_screens_link: `hardware.html#autophone-ankor`
  }
];

// Массив с данными иконок клиентов
const clients = [{
    link: `https://tretiitrest.ru/`,
    img: `img/clients/trest.png`,
    title: `ГК &laquo;Третий трест&raquo;`,
    tooltip: `Группа компаний &laquo;Третий трест&raquo;`,
    alt: `Логотип Третьего треста`,
    width: 77
  },
  {
    link: `https://kartavoditelya.bitrix24.site/`,
    img: `img/clients/maximum.jpg`,
    title: `Maximum`,
    tooltip: `MAXIMUM`,
    alt: `Логотип компании MAXIMUM`,
    width: 180
  },
  {
    link: `https://vk.com/steamclub_ufa`,
    img: `img/clients/steam.png`,
    title: `Steam Club`,
    tooltip: `Steam Club`,
    alt: `Логотип компании SteamClub`,
    width: 130
  },
  {
    link: `https://www.parsec.ru/`,
    img: `img/clients/parsec_logo.png`,
    title: `Parsec`,
    tooltip: `Parsec`,
    alt: `Логотип компании Parsec`,
    width: 150
  },
  {
    link: `http://controlauto.ru/`,
    img: `img/clients/standart-logo.png`,
    title: `Standart`,
    tooltip: `Standart`,
    alt: `Логотип компании Standart`,
    width: 150
  },
  {
    link: `http://ufa.mir-kvestov.ru/companies/questik-ufa`,
    img: `img/clients/questik.jpg`,
    title: `Questic Ufa`,
    tooltip: `Questic Ufa`,
    alt: `Логотип компании Questic Ufa`,
    width: 150
  },
  {
    link: `https://www.instagram.com/klever_flowers_ufa/`,
    img: `img/clients/clever-flowers.png`,
    title: `Clever`,
    tooltip: `Студия цветов Clever`,
    alt: `Логотип компании Clever`,
    width: 90
  },
  {
    link: `http://ufa-rozet.ru/`,
    img: `img/clients/rozet.png`,
    title: `Розет`,
    tooltip: `Интерьерные материалы Розет`,
    alt: `Логотип компании Розет`,
    width: 150
  }
];

// Массив с описанием преимуществ
const advantages = [{
    title: `Надёжно`,
    description: `Заключение договора и гарантия на электронику.`
  },
  {
    title: `Качественно`,
    description: `Серьезный подход к каждому заказу.`
  },
  {
    title: `Под ключ`,
    description: `Комплексные решения. Всё в одном месте.`
  },
  {
    title: `Свои наработки`,
    description: `Разработка, внедрение, производство.`
  },
  {
    title: `Опыт`,
    description: `От концепта до мелкосерийного производства.`
  },
  {
    title: `Сопровождение`,
    description: `Доработки, улучшения, развитие.`
  }
];

///////////////////// КОД //////////////////////

// Список software-предложений
const software_offers = [{
    icon: `fa-file-invoice`,
    icon_color: `indigo`,
    title: `Сайты`,
    description: `Корпоративные сайты, промо-сайты, интернет-магазины, сайты-визитки, лендинги - множество используемых технологий и лёгкость в поддержке.`,
    animation: `fadeIn`,
    animation_delay: 0.1
  },
  {
    icon: `fa-mobile-alt`,
    icon_color: `pink`,
    title: `Мобильные приложения`,
    description: `Красивые, удобные, функциональные бизнес-приложения для Android- и Apple-устройств. Есть активные аккаунты разработчика для обеих платформ.`,
    animation: `fadeIn`,
    animation_delay: 0.4
  },
  {
    icon: `fa-laptop`,
    icon_color: `green`,
    title: `Web-приложения`,
    description: `Создаём собственные программно-аппаратные комплексы и интегрируем их с написанными специально для них web-приложениями и сервисами.`,
    animation: `fadeIn`,
    animation_delay: 0.7
  },
  {
    icon: `fa-tv`,
    icon_color: `red`,
    title: `ПО для терминалов`,
    description: `Разработаем приложения для сенсорных терминалов: с поддержкой Multitouch, нескольких панелей в сети, с системой управления контентом и т.д.`,
    animation: `fadeIn`,
    animation_delay: 1
  }
];

// Список используемых технологий
const code_techns = [{
    title: `JavaScript`,
    img: `<i class="fab fa-js-square fa-6x"></i>`
  },
  {
    title: `JQuery`,
    img: `<img class="d-flex" src="img/techns-icons/jquery.png" width="84" alt="Лого JQuery">`
  },
  {
    title: `NodeJS`,
    img: `<i class="fab fa-node-js fa-6x"></i>`
  },
  {
    title: `Swift`,
    img: `<img class="d-flex" src="img/techns-icons/swift.png" width="84" alt="Лого Swift">`
  },
  {
    title: `Kotlin`,
    img: `<img class="d-block" src="img/techns-icons/kotlin.png" width="84" alt="Лого Kotlin"`
  },
  {
    title: `PHP`,
    img: `<i class="fab fa-php fa-6x"></i>`
  },
  {
    title: `PostgreSQL`,
    img: `<img class="d-flex" src="img/techns-icons/postgresql.png" width="84" alt="Лого PostgreSQL">`
  },
  {
    title: `MySQL`,
    img: `<img class="d-flex" src="img/techns-icons/mysql.png" width="84" alt="Лого MySQL">`
  },
  {
    title: `Git`,
    img: `<i class="fab fa-git-square fa-6x"></i>`
  },
  {
    title: `Web-sockets`,
    img: `<img class="d-flex" src="img/techns-icons/websockets.png" width="84" alt="Лого Web-sockets">`
  },
  {
    title: `HTML5`,
    img: `<i class="fab fa-html5 fa-6x"></i>`
  },
  {
    title: `БЭМ`,
    img: `<svg width="84" height="84" class="logo__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.7 84"><path d="M0 13h23.8v7H0zM0 0h23.8v7H0zm42.7 25.9H0v7h41.1c4.5 0 15 .1 18.9 6.4v-3.9c-1.9-6.2-7.5-9.5-17.3-9.5zm.1 13H0v7h41.1c10 0 16.3.4 18.9 1.8v-3.1c-2-4.9-10.4-5.7-17.2-5.7zm-.1 33H0v-7h41.1c4.5 0 15-.1 18.9-6.4v3.9c-1.9 6.2-7.5 9.5-17.3 9.5zm.1-13H0v-7h41.1c10 0 16.3-.4 18.9-1.8v3.1c-2 4.9-10.4 5.7-17.2 5.7zM70.4 84h31.4v-4.3H71.3c-2.7 0-9.1-.1-11.4-3.8v2.4C61 82 64.4 84 70.4 84zm-.1-7.9h31.4v-4.3H71.3c-6.1 0-9.9-.2-11.4-1.1v1.9c1.2 3 6.3 3.5 10.4 3.5z"></path></svg>`
  },
  {
    title: `CSS3`,
    img: `<i class="fab fa-css3 fa-6x"></i>`
  },
  {
    title: `Less`,
    img: `<i class="fab fa-less fa-6x"></i>`
  },
  {
    title: `Sass`,
    img: `<i class="fab fa-sass fa-6x"></i>`
  },
  {
    title: `Bootstrap`,
    img: `<img class="d-flex" src="img/techns-icons/bootstrap.png" width="84" alt="Лого Bootstrap">`
  },
  {
    title: `Grid`,
    img: `<img class="d-flex" src="img/techns-icons/grid.png" width="84" alt="Лого Grid">`
  },
  {
    title: `npm`,
    img: `<i class="fab fa-npm fa-6x"></i>`
  },
  {
    title: `Gulp`,
    img: `<i class="fab fa-gulp fa-6x"></i>`
  },
  {
    title: `Vue`,
    img: `<i class="fab fa-vuejs fa-6x"></i>`
  },
  {
    title: `C#`,
    img: `<img class="d-flex" src="img/techns-icons/c-sharp.png" width="84" alt="Лого C#">`
  },
  {
    title: `MongoDB`,
    img: `<img class="d-flex" src="img/techns-icons/mongodb.png" width="84" alt="Лого MongoDB">`
  },
  {
    title: `FireBase`,
    img: `<img class="d-flex" src="img/techns-icons/firebase.png" width="84" alt="Лого Firebase">`
  },
  {
    title: `Webpack`,
    img: `<img class="d-flex" src="img/techns-icons/webpack.png" width="84" alt="Лого Webpack">`
  }
];

///////////////////// ЖЕЛЕЗО //////////////////////

// Данные для аккордеона
const hard_accord_data = [
  //
];

// Слайдеры страницы Железо

// Данные для слайдера Домофон
const intercom = [
    {
      img: `img/hardware/intercom/intercom-1.jpg`,
      alt: `First slide`,
      tooltip: ``,
      active: true
    },
    {
      img: `img/hardware/intercom/intercom-2.jpg`,
      alt: `Second slide`,
      tooltip: ``,
      active: true
    },
    {
      img: `img/hardware/intercom/intercom-3.jpg`,
      alt: `Third slide`,
      tooltip: ``,
      active: true
    }
  ];

// Данные для слайдера Производственная линия
const prod_line = [
    {
      img: `img/hardware/prodline/prodline-1.jpg`,
      alt: `First slide`,
      tooltip: ``,
      active: true
    },
    {
      img: `img/hardware/prodline/prodline-2.jpg`,
      alt: `Second slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/prodline/prodline-3.jpg`,
      alt: `Third slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/prodline/prodline-4.jpg`,
      alt: `Fourth slide`,
      tooltip: ``,
      active: false
    }
  ];

// Данные для слайдера паяльное оборудование
const soldering = [
    {
      img: `img/hardware/soldering/sold-1.jpg`,
      alt: `First slide`,
      tooltip: ``,
      active: true
    },
    {
      img: `img/hardware/soldering/sold-2.jpg`,
      alt: `Second slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/soldering/sold-3.jpg`,
      alt: `Third slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/soldering/sold-4.jpg`,
      alt: `Fourth slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/soldering/sold-5.jpg`,
      alt: `Fifth slide`,
      tooltip: ``,
      active: false
    }
  ];

// Данные для слайдера ЧПУ-станок
const cnc_machine = [
    {
      img: `img/hardware/chpu/chpu-1.jpg`,
      alt: `First slide`,
      tooltip: ``,
      active: true
    },
    {
      img: `img/hardware/chpu/chpu-2.jpg`,
      alt: `Second slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/chpu/chpu-3.jpg`,
      alt: `Third slide`,
      tooltip: ``,
      active: false
    }
  ];

// Данные для слайдера DLP-принтер
const dlp_printer = [
    {
      img: `img/hardware/dlp/dlp-1.jpg`,
      alt: `First slide`,
      tooltip: ``,
      active: true
    },
    {
      img: `img/hardware/dlp/dlp-2.jpg`,
      alt: `Second slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/dlp/dlp-3.jpg`,
      alt: `Third slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/dlp/dlp-4.jpg`,
      alt: `Fourth slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/dlp/dlp-5.jpg`,
      alt: `Fifth slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/dlp/dlp-6.jpg`,
      alt: `Sixth slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/dlp/dlp-7.jpg`,
      alt: `Seventh slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/dlp/dlp-8.jpg`,
      alt: `Eigth slide`,
      tooltip: ``,
      active: false
    }
  ];

// Данные для слайдера электронных ценников
const shelflabels = [
    {
      img: `img/hardware/shelflabels/label-1.jpg`,
      alt: `First slide`,
      tooltip: ``,
      active: true
    },
    {
      img: `img/hardware/shelflabels/label-2.jpg`,
      alt: `Second slide`,
      tooltip: ``,
      active: false
    },
    {
      img: `img/hardware/shelflabels/label-3.jpg`,
      alt: `Third slide`,
      tooltip: ``,
      active: false
    }
  ];

// Список данных для карточек блока Выполненных заказов
const orders_done_data = [{
    img_id: 1,
    alt: `Изображение выполненной работы`,
    tooltip: `Пайка элементов по эталонной плате-образцу.`,
    title: `Пайка элементов по эталонной плате-образцу.`
  },
  {
    img_id: 2,
    alt: `Изображение выполненной работы`,
    tooltip: `Пайка элементов по эталонной плате-образцу.`,
    title: `Пайка элементов по эталонной плате-образцу.`
  },
  {
    img_id: 3,
    alt: `Изображение выполненной работы`,
    tooltip: `Мелкосерийное производство устройства`,
    title: `Мелкосерийное производство устройства (разработка опытного образца платы, подбор компонентов, корпусирование).`
  },
  {
    img_id: 4,
    alt: `Изображение выполненной работы`,
    tooltip: `Разработка печатной платы, подбор элементной базы, изготовление образца.`,
    title: `Разработка печатной платы, подбор элементной базы по требуемым параметрам, изготовление опытного образца.`
  },
  {
    img_id: 5,
    alt: `Изображение выполненной работы`,
    tooltip: `Разработка печатной платы, подбор элементной базы, изготовление образца. Производство`,
    title: `Разработка печатной платы, подбор элементной базы по требуемым параметрам, изготовление опытного образца. Мелкосерийное производство.`
  },
  {
    img_id: 6,
    alt: `Изображение выполненной работы`,
    tooltip: `Мелкосерийное производство печатных плат.`,
    title: `Мелкосерийное производство печатных плат.`
  }
];

// Список данных для карточек блока мелкосерийное производство
const small_serial_data = [{
    img: `batch-8.jpg`,
    alt: `MainBoard IP домофонной трубки`,
    tooltip: `MainBoard IP домофонной трубки`,
    title: `MainBoard IP домофонной трубки`
  },
  {
    img: `batch-2.jpg`,
    alt: `6-канальный диммируемый твердотельный коммутатор нагрузки 220В`,
    tooltip: `6-канальный диммируемый твердотельный коммутатор нагрузки 220В`,
    title: `6-канальный диммируемый твердотельный коммутатор нагрузки 220В`
  },
  {
    img: `batch-7.jpg`,
    alt: `MainBoard "квартирного модуля" умного дома`,
    tooltip: `MainBoard "квартирного модуля" умного дома`,
    title: `MainBoard "квартирного модуля" умного дома`
  },
  {
    img: `batch-6.jpg`,
    alt: `Корпуса "квартирного модуля" с интегрированным блоком питания`,
    tooltip: `Корпуса "квартирного модуля" с интегрированным блоком питания`,
    title: `Специально подготовленные корпуса "квартирного модуля" с интегрированным блоком питания`
  },
  {
    img: `batch-5.jpg`,
    alt: `Модуль коммутации света на 220В недиммируемый`,
    tooltip: `Модуль коммутации света на 220В недиммируемый`,
    title: `Твердотельный модуль коммутации света на 220В недиммируемый. Возможность установки на DIN-рейку в электрощитовой`
  },
  {
    img: `batch-9.jpg`,
    alt: `3-портовый Ethernet-switch модуль`,
    tooltip: `3-портовый Ethernet-switch модуль`,
    title: `Специально разработанный 3-портовый Ethernet-switch модуль с отдельным RM-II портом.`
  }
];

// Список используемых технологий
const hard_techns = [{
    title: `PuTTY`
  },
  {
    title: `WinSCP`
  },
  {
    title: `CRC calc`
  },
  {
    title: `UART Terminal`
  },
  {
    title: `Keil`
  },
  {
    title: `Sound-FORGE`
  },
  {
    title: `Hercules Terminal`
  },
  {
    title: `Quartus Prime`
  }
];

///////////////////// МАСТЕРСКАЯ //////////////////////

/**
 * [wb_accord_data Данные для отрисовки аккордеона в мастерской]
 * @type {Array}
 * id {number} id соотв-щей вкладки в аккордеоне, должен быть уникальным в массиве
 * title {string} заголовок вкладки, виден снаружи
 * subtitle {string} подзоголовок вкладки, находится внутри
 * img {string} название изображения внутри папки
 * alt {string} альтернативный текст, отображается, когда картинка по какой-то причине не загружена
 * description {string} разметка(!) текста внутри вкладки, может содержать теги
 * show {boolean} должна ли быть открыта вкладка или нет, если true, то да
 */
const wb_accord_data = [{
    id: 96,
    title: `Изделия из дерева`,
    subtitle: `Индивидуальные заказы`,
    img: `wood.jpg`,
    tooltip: `Изделия из дерева`,
    alt: `Изображение пончика, вырезанного из дерев`,
    description: `<p class="">Изготавливаем деревянные подставки, коробочки, контейнеры, вывески, бейджики, органайзеры, магниты, большие объемные буквы, чаши, подарочные разделочные доски, интерьерные композиции из дерева, настенные часы и т.д.</p>
    <p class="mb-0">Готовые изделия, при необходимости, можем подвергнуть дальнейшей обработке: окрашиванию, лакировке, лазерной гравировке.</p>`,
    show: true
  },
  {
    id: 97,
    title: `ЧПУ фрезеровка`,
    subtitle: `Фрезерная обработка`,
    img: `freser.jpg`,
    tooltip: `ЧПУ фрезеровка`,
    alt: `Процесс фрезеровки`,
    description: `<p class="">3D-фрезеровка композита, дерева, фанеры, пластика, оргстекла, ПВХ, МДФ. Выполняем работы в сжатые сроки, по приемлемой цене и на профессиональном уровне.</p>
    <p class="mb-0">Изготавливаем фигуры различной сложности с высокой точностью и идеально ровными краями.</p>`,
    show: false
  },
  {
    id: 98,
    title: `Лазерная гравировка`,
    subtitle: `Гравировка лазером`,
    img: `laser.jpg`,
    tooltip: `Лазерная гравировка`,
    alt: `Изображение картины, выполненной лазером`,
    description: `<p class="">Гравировка сувенирной продукции и подарков на любых "мягких" поверхностях: пластик, окрашенная и лакированная поверхность, дерево, фанера, акрил, картон, кожа, кожзам, резина, некоторые виды камней.</p>
    <p class="mb-0">Выполнение изображений любой сложности с самыми тонкими, мелкими деталями и штрихами. Гарантируем высокую точность резки и гладкие края.</p>`,
    show: false
  },
  {
    id: 99,
    title: `Золочение`,
    subtitle: `Ювелирная инкрустация золотом`,
    img: `pozolota.jpg`,
    tooltip: `Золочение`,
    alt: `iPhone с позолоченным корпусом`,
    description: `<p class="">Электрохимическое осаждение металлов золотосодержащим гелем 24kt или 14kt с подслоем никеля или меди. Данным способом покываются любые металлы и сплавы, в т.ч. алюминий.</p>
    <p class="mb-0">Изготовим для вас именные ложки с гравировкой, инкрустируем оружейные клинки, элементы корпусов телефонов на металлической основе, перья и элементы ручек класса Люкс.</p>`,
    show: false
  },
  {
    id: 100,
    title: `Деревянные конструкторы`,
    subtitle: `Изготовление деревянных пазлов`,
    img: `ugears.jpg`,
    tooltip: `Деревянные конструкторы`,
    alt: `Собранный пазл UGEARS`,
    description: `<p class="">Знаете, что такое UGEAR и любите деревянные конструкторы так же, как и мы?</p>
    <p class="">Если у вас уже есть интересующая вас модель, мы сделаем её для вас.</p>
    <p class="mb-0">Если же вы хотите что-то необычное и индивидуальное, наши специалисты предложат вам несколько эскизов по вашему запросу, и вскоре ваш деревянный конструктор уже будет у вас на руках.</p>`,
    show: false
  },
  {
    id: 101,
    title: `Кинематические модели`,
    subtitle: `Движущиеся модели`,
    img: `kinetic.jpg`,
    tooltip: ``,
    alt: `Изображение части кинематической модели`,
    description: `<p class="">Поможем вам воплотить ваши идеи и оживить любую модель, будь то она из дерева или из металла. Настольное колесо обозрения, движущийся поезд, настенные часы, деревянный манипулятор - все это реальность.</p>
    <p class="mb-0">Кинематические изделия будут идеальным подарком, как для детей, так и для взрослых.</p>`,
    show: false
  },
  {
    id: 102,
    title: `Оборудование для квестов`,
    subtitle: `Изготовление и наладка`,
    img: `quest.jpg`,
    tooltip: `Оборудование для квестов`,
    alt: `Пример декораций для квеста`,
    description: `<p class="">Изготовление электроники, оборудования, декораций, реквизита для квест-румов. От простого до сложного. Реализуем все ваши фантазий. Под любые задачи и сценарии.</p>
    <p class="mb-0">Мы знаем о квестах все, поэтому проконсультируем и объясним, как использовать оборудование на практике.</p>`,
    show: false
  },
  {
    id: 103,
    title: `3D-печать`,
    subtitle: `Изготовление 3D-моделей`,
    img: `print.jpg`,
    tooltip: `3D-печать`,
    alt: `3D-принтер`,
    description: `<p class="">Создадим поломанные детали механизмов или детали, которые нельзя купить, прототипы или макеты каких-либо изделий, объектов, оригинальные подарки, корпусные изделия и т.д.</p>
    <p>Печать производится по предоставленной 3D-модели.</p>
    <p>Размер камеры(x:y:z): 200х200х180мм.</p>
    <p class="mb-0">Поддерживается 2 цвета.</p>`,
    show: false
  }
];

/**
 * [wb_techs Список технологий]
 * @type {Array}
 * title {string} название
 * img {string} название картинки в папке
 * tooltip {string} всплывающий при наведении на изображене текст
 * animation {string} класс анимации появления иконки (бутстрап)
 */
const wb_techs = [{
    title: `SketchUp`,
    img: `tech-2.png`,
    tooltip: `SketchUp - программа для моделирования относительно простых трёхмерных объектов.`,
    animation: `slideInLeft`
  },
  {
    title: `Mach3`,
    img: `tech-10.png`,
    tooltip: `Mach3 - программное обеспечение для управления станком с ЧПУ.`,
    animation: `slideInLeft`
  },
  {
    title: `Ultimaker Cura`,
    img: `tech-7.png`,
    tooltip: `Ultimaker Cura - программа для нарезки 3D–моделей на слои.`,
    animation: `slideInLeft`
  },
  {
    title: `SolidWorks`,
    img: `tech-1.png`,
    tooltip: `SolidWorks - программный комплекс САПР для разработки изделий любой степени сложности и назначения.`,
    animation: `zoomIn`
  },
  {
    title: `3ds Max`,
    img: `tech-6.png`,
    tooltip: `Autodesk 3ds Max - программное обеспечение для 3D-моделирования, анимации и визуализации при проектировании.`,
    animation: `zoomIn`
  },
  {
    title: `MakerBot`,
    img: `tech-8.png`,
    tooltip: `MakerBot`,
    animation: `slideInRight`
  },
  {
    title: `Artcam`,
    img: `tech-4.jpg`,
    tooltip: `Autodesk Artcam - CAD/CAM-система для 3D-моделирования и производства художественных изделий`,
    animation: `slideInRight`
  },
  {
    title: `Photoshop`,
    img: `tech-5.png`,
    tooltip: `Adobe Photoshop`,
    animation: `slideInRight`
  }
];

/**
  * [wb_works Список готовых работ на странице мастерской]
  * @type {Array}
  * img {string} ссылка на изображение в папке img
  * link {string} ссылка на отдельную папку в гуглодоках, где могут находиться другие фото данной работы
  * title {string} название работы
  * tooltip {string} всплывающая надпись при наведении курсора на изображение, пояснение
  * description {string} более подробное, чем название, описание работы
  */
const wb_works = [{
    img: `img/pozolota/zoloto-card.jpg`,
    link: ``,
    title: `Позолота телефона`,
    tooltip: `Телефон с позолоченными элементами`,
    description: `Золочение металлических элементов корпуса телефона.`
  },
  {
    img: `img/signboards/project/project.jpg`,
    link: ``,
    title: `Вывески-флажки`,
    tooltip: `Вывески-флажки`,
    description: `Пара деревянных вывесок в ирландском стиле для кофейни "ROAST-N-GRIND".`
  },
  {
    img: `img/quest/box.jpg`,
    link: ``,
    title: `Оборудование для квеста`,
    tooltip: `Оборудование для квеста`,
    description: `Весь набор оборудования/электроники для квест-рума.`
  },
  {
    img: `img/container/container.jpg`,
    link: ``,
    title: `Барный органайзер`,
    tooltip: `Барный органайзер`,
    description: `Барный органайзер по заказу кофейни "ROAST-N-GRIND". С логотипом компании.`
  },
  {
    img: `img/voroning/voroning.jpg`,
    link: ``,
    title: `Воронёный клинок`,
    tooltip: `Клиник с воронением`,
    description: `Нож в подарок, украшенный с помощью воронения стали`
  },
  {
    img: `img/trifle/trifle.jpg`,
    link: ``,
    title: `Монетница простая`,
    tooltip: `Мелочница простая`,
    description: `Деревянная монетница для кофейни "ROAST-N-GRIND".`
  },
  {
    img: `img/trifle/trifle-3.jpg`,
    link: `https://drive.google.com/open?id=1C_wwWCG8gG0AB_Y6W0GvnY1ssxSiHzo5`,
    title: `Монетница`,
    tooltip: `Монетница для кофейни "ROAST-N-GRIND"`,
    description: `Лакированная деревянная монетница для кофейни "ROAST-N-GRIND".`
  },
  {
    img: `img/lancet/lancet.jpg`,
    link: ``,
    title: `Позолоченный скальпель`,
    tooltip: `Позолоченный скальпель`,
    description: `Позолоченный скальпель для подарка на юбилей.`
  },
  {
    img: `img/badges/badge.jpg`,
    link: ``,
    title: `Деревянный бейдж`,
    tooltip: `Деревянный бейдж`,
    description: `Деревянный бейдж для персонала кафе "Steam Club". Крепление - магнит.`
  },
  {
    img: `img/signboards/front-board.jpg`,
    link: ``,
    title: `Вывеска для кафе`,
    tooltip: `Вывеска для кафе ROAST-N-GRIND`,
    description: `Деревянная вывеска для кафе "ROAST-N-GRIND" со светодиодной подсветкой.`
  },
  {
    img: `img/clever/clever-4.jpg`,
    link: `https://drive.google.com/open?id=1S45alA7Rtq79IXAb0w561bzgAxpz_7gQ`,
    title: `Вывеска студии цветов`,
    tooltip: `Вывеска для студии цветов Clever`,
    description: `Вывеска для студии цветов со светодиодной подсветкой.`
  }
];

/////////////////// ВИДЕО-ГАЛЕРЕЯ ////////////////////

/**
 * [video_tracks Данные для отрисовки списка карточек видеороликов]
 * @type {Array}
 * badge {string} один из отделов: software, hardware, workbench
 * icon {string} HTML-код иконки бутстрап для обозначения отдела
 * link {string} ссылка на загруженный в utube видеоролик
 * date_icon {string} HTML-код иконки бутстрап для символа перед датой
 * date {string} дата записи видео
 * title {string} заголовок
 * description {string} описание видео-ролика: что демонстрируется
 */
const video_tracks = [
  {
    badge: `workbench`,
    icon: `<i class="fas fa-tools pr-2"></i>`,
    link: `https://www.youtube.com/embed/_uLgqopNDLk`,
    date_icon: `<i class="fa fa-clock-o pr-2">`,
    date: `15-02-2019`,
    title: `Изготовление панели домофона 1`,
    description: `Изготовление панели домофона методом фрезеровки по металлу. Вырезана часть символов панели.`
  },
  {
    badge: `workbench`,
    icon: `<i class="fas fa-tools pr-2"></i>`,
    link: `https://www.youtube.com/embed/TFK2uF1kM0U`,
    date_icon: `<i class="fa fa-clock-o pr-2">`,
    date: `15-02-2019`,
    title: `Изготовление панели домофона 2`,
    description: `Изготовление панели домофона методом фрезеровки по металлу. Вырезали остальные цифры.`
  },
  {
    badge: `workbench`,
    icon: `<i class="fas fa-tools pr-2"></i>`,
    link: `https://www.youtube.com/embed/DjcsALBHJAc`,
    date_icon: `<i class="fa fa-clock-o pr-2">`,
    date: `15-02-2019`,
    title: `Барный органайзер уже в кафе`,
    description: `Выполнили заказ кофейни Roast'n'Grind на изготовление деревянного органайзера для салфеток и трубочек.`
  },
  {
    badge: `workbench`,
    icon: `<i class="fas fa-tools pr-2"></i>`,
    link: `https://www.youtube.com/embed/FUOVySPoo4o`,
    date_icon: `<i class="fa fa-clock-o pr-2">`,
    date: `15-02-2019`,
    title: `Фрезеровка по дереву`,
    description: `Пример использования ЧПУ фрезеровки для вырезания символов по дереву.`
  }
];

/////////////////// СОЦ. ИКОНКИ ////////////////////

const socials = [
  {
    tooltip: `Напишите нам в Telegram`,
    link: `https://telegram.im/@work_masters`,
    icon: `<i class="fab fa-telegram-plane fa-2x white-text"></i>`
  },
  {
    tooltip: `Напишите нам в Whatsup`,
    link: `https://wa.me/79373190594`,
    icon: `<i class="fab fa-whatsapp fa-2x white-text"></i>`
  },
  {
    tooltip: `Напишите нам во ВКонтакте`,
    link: `https://vk.com/rek_elektronic`,
    icon: `<i class="fab fa-vk fa-2x white-text"></i>`
  },
  {
    tooltip: `Подписывайтесь на наш Utube-канал`,
    link: `https://www.youtube.com/channel/UCxA1Wd-g61gX7cuRD9mAaJQ`,
    icon: `<i class="fab fa-youtube fa-2x white-text"></i>`
  },
  {
    tooltip: `Подписывайтесь на наш Telegram-канал`,
    link: `https://www.instagram.com/work_masters_ufa`,
    icon: `<i class="fab fa-instagram fa-2x white-text"></i>`
  },
  {
    tooltip: `Напишите нам на почту`,
    link: `mailto:zakaz@work-masters.ru`,
    icon: `<i class="fas fa-envelope fa-2x white-text"></i>`
  }
];

// Данные для новостей

/**
 * [news Данные для отрисовки списка новостей]
 * @type {Array}
 * badge {string} один из отделов: software, hardware, workbench
 */
const news = [
  {
    title: `Очередной проект закончен!`,
    text: `Ура! Мы закончили очередной проект - конфигуратор маршрутов для общественного транспорта. Ключевые особенности проекта - тут. Теперь все водители будут довольны. Несколько фоток прилагаются.`,
    date: `1555051236498`,
    badge: ``,
    images: [`http://www.trance-detal.ru/images/tn/product/autoinformator/34.jpg`, `http://ural-telematica.ru/wp-content/uploads/2012/02/%D1%81%D1%82%D0%B0%D1%82%D1%82-3.jpg`, `http://www.spy-land.ru/components/com_virtuemart/shop_image/product/_________________5475c227c93b6.jpg`]
  },
  {
    title: `Номера телефонов для автовладельцеы`,
    text: `Начали делать номера телефонов для автовладельцев. Первый клиент - Шкода.`,
    date: `1555051236498`,
    badge: ``,
    images: [`http://www.trance-detal.ru/images/tn/product/autoinformator/34.jpg`]
  }
];
