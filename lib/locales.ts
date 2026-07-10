// lib/locales.ts

export type Language = "ru" | "en";

export const translations = {
  ru: {
    // Site config
    name: "Дмитрий Бородин",
    nameEn: "Dmitry Borodin",
    role: "Senior Frontend Developer",
    headline: "Строю продукты,\nкоторые работают.",
    bio: "13+ лет в коммерческой разработке. Создаю масштабируемые продукты на React, TypeScript и Next.js — в fintech, dating, B2B и других сферах.",
    cms: "При необходимости закрываю задачи на бэкенде (Node.js, PHP) и работаю с CMS (Bitrix, WordPress и другие) — без привлечения дополнительных специалистов.",
    additional:
      "Умею доводить сложные проекты до стабильного работающего результата.",
    available: "Открыт к предложениям",

    // Navigation
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      stack: "Стек",
      projects: "Проекты",
      contact: "Контакты",
    },

    // Stats
    stats: {
      years: "лет опыта",
      projects: "проектов",
      technologies: "технологий",
    },

    // Experience
    experience: {
      title: "Опыт работы",
      period: "период",
      company: "компания",
      role: "Обязанности",
      achievements: "Достижения",
      projectWork: "Проектная работа",
      // Переводы названий компаний и ролей
      companies: {
        "Проектная работа": "Проектная работа",
        Twinby: "Twinby",
        "K&K TEAM": "K&K TEAM",
        Unlimco: "Unlimco",
        Dextra: "Dextra",
        "Арб-Консалтинг": "Арб-Консалтинг",
        "Дабл Ю": "Дабл Ю",
        "Anlas / Supra.pro": "Anlas / Supra.pro",
      },
      roles: {
        "Senior Frontend-разработчик": "Senior Frontend-разработчик",
        "Frontend-разработчик": "Frontend-разработчик",
        "Fullstack-разработчик": "Fullstack-разработчик",
      },
      // Переводы описаний обязанностей
      desc: {
        "2026 — настоящее время_0":
          "Разработка UI-компонентов и функциональных модулей на React и Vue для E-commerce-платформы;",
        "2026 — настоящее время_1":
          "Развитие личного кабинета продавцов и дашбордов: проектирование новых модулей, рефакторинг и миграция legacy;",
        "2023 — 2025_0":
          "Разработка и поддержка клиентской части dating-платформы с реальной аудиторией (React / Next.js, Redux Toolkit, Styled Components, MUI);",
        "2023 — 2025_1":
          "Работа с несколькими JS-фреймворками в рамках одного проекта: React / Next.js — основной стек, Vue и Angular — по требованиям легаси-модулей;",
        "2023 — 2025_2":
          "Рефакторинг компонентной базы, внедрение юнит- и интеграционных тестов;",
        "2023 — 2025_3":
          "Разработка промо-лендингов под маркетинговые кампании платформы;",
        "2021 — 2023_0":
          "Разработка UI-компонентов и функциональных модулей на React + TypeScript для двух продуктов: b2c.by (маркетплейс красоты) и wisp.game (турнирная платформа с NFT-механиками);",
        "2021 — 2023_1":
          "Поддержка и развитие корпоративных сайтов и промо-лендингов;",
        "2020 — 2021_0":
          "Разработка UI для fintech-продуктов компании с высокими требованиями к безопасности и точности финансовых данных;",
        "2020 — 2021_1":
          "Развитие личного кабинета мерчантов: проектирование новых модулей, рефакторинг и оптимизация legacy-кода;",
        "2020 — 2021_2":
          "Разработка кроссплатформенного мобильного приложения на React Native (iOS / Android);",
        "2018 — 2020_0":
          "Разработка, доработка и поддержка интерфейсов и функциональных модулей для клиентских проектов различной сложности;",
        "2018 — 2020_1": "Полный цикл разработки: от UI/UX до backend-логики;",
      },
      // Переводы достижений
      ach: {
        "2026_0":
          "Провёл zero-downtime миграцию legacy-дашборда на Next.js за 8 недель, сохранив доступность на уровне 99.9% и не остановив продакшен ни на минуту;",
        "2026_1":
          "Выстроил архитектуру и разработал новый дашборд для 3000+ активных продавцов, сократив время загрузки ключевых страниц на 40% (по данным Core Web Vitals);",
        "2026_2":
          "Внедрил чёткое разделение серверных данных и UI-состояния: TanStack Query с автоматическим кэшированием и фоновой синхронизацией — для данных, Zustand — для UI-состояния (тема, модальные окна, настройки). Результат: частота багов из-за рассинхрона данных снизилась на 60%, а скорость разработки новых фич выросла на 30% за счёт предсказуемой архитектуры;",
        "2026_3":
          "Поддерживал и развивал модули на Vue 2/3 параллельно с основным стеком на React, обеспечивая единый пользовательский опыт и унифицируя подходы к работе с API и состояниями;",
        "2023_0":
          "Оптимизировал производительность через Lazy loading, code splitting, tree shaking: bundle size снизился на 27% (по данным webpack-bundle-analyzer), а LCP (Largest Contentful Paint) улучшился на ~2.2 секунды, что сократило процент отказов на первых экранах;",
        "2023_1":
          "Провёл масштабный рефакторинг компонентной базы: сократил дублирование кода на 38%, что ускорило разработку типовых экранов в 2 раза (с 2 дней до 1 дня на экран);",
        "2023_2":
          "Реализовал 15+ сложных динамических форм с многоуровневой валидацией (React Hook Form + Yup) для флоу регистрации, онбординга и создания личных кабинетов;",
        "2023_3":
          "Строгая валидация снизила количество ошибок пользовательского ввода на 23%, что сократило число брошенных регистраций и повысило конверсию в активных пользователей;",
        "2023_4":
          "Поддерживал и развивал модули на React, Vue и Angular в рамках единого монорепозитория, обеспечивая единые стандарты качества и согласованность пользовательского опыта между частями платформы;",
        "2023_5":
          "Внедрил юнит и интеграционное тестирование (Jest + React Testing Library), покрыв критическую бизнес-логику на 70% и сократив количество регрессий при релизах;",
        "2021_0":
          "Рефакторинг каталога и фильтрация: переработал систему фильтрации по множеству параметров (локация, услуги, рейтинг, цена), сократив путь пользователя до нужного мастера с 6 до 3 шагов. Результат: конверсия в запись увеличилась на ~15%;",
        "2021_1":
          "Система рейтингов и отзывов: разработал с нуля модуль оценок и отзывов исполнителей — ключевой запрос пользователей. Внедрил валидацию на спам и модерацию контента, что повысило вовлечённость (средний процент пользователей, оставляющих отзывы, вырос на 20% за 2 месяца);",
        "2021_2":
          "Стабилизация продакшена: провёл аудит фронтенда, выявил и устранил 15+ критических и накопившихся дефектов (в т.ч. утечки памяти, проблемы с рендерингом больших списков). Частота падений в продакшене снизилась на 40%;",
        "2021_3":
          "Ускоренный MVP: реализовал фронтенд-часть MVP за 3 месяца вместо плановых 6 за счет использования готовой дизайн-системы и агрессивной приоритизации фич с продактом. Платформа успешно запущена;",
        "2021_4":
          "Аутентификация и безопасность: спроектировал и внедрил полную JWT-аутентификацию (регистрация, логин, refresh-токены, защищённые маршруты) с хранением токенов в httpOnly cookies. Результат: 0 security-инцидентов за весь период работы платформы;",
        "2021_5":
          "Турнирный модуль (WebSocket): самостоятельно разработал полноценный раздел турниров — от UI до интеграции: лобби, запись участников, система подбора игроков, лайв-статусы и реалтайм-обновления через WebSockets. Обеспечил синхронизацию состояния турнира между десятками одновременно подключённых пользователей;",
        "2021_6":
          "NFT-интеграция: интегрировал фронтенд с умными контрактами через Web3-библиотеки (отображение NFT-наград, привязка к кошелькам MetaMask);",
        "2020_0":
          "Разработал с нуля и запустил кроссплатформенное приложение для iOS/Android: спроектировал архитектуру, настроил CI/CD сборку и выпустил релизы в магазины приложений;",
        "2020_1":
          "Реализовал биометрическую аутентификацию и механизм автосохранения черновиков платежей, обеспечив бесшовный пользовательский опыт даже при нестабильном соединении;",
        "2020_2":
          "Спроектировал архитектуру управления состояниями на MobX для сложных форм выплат с динамическими полями, гарантируя консистентность данных между компонентами и предотвращая потерю введённых сумм при переключении вкладок;",
        "2020_3":
          "Разработал новый модуль выбора платежных методов, упростив мерчантам подключение к эквайрингу — время активации нового клиента сократилось на 20%;",
        "2020_4":
          "Внедрил интерактивные дашборды аналитики с фильтрами по датам и валютам, позволив мерчантам в 2 раза быстрее находить проблемные транзакции;",
        "2020_5":
          "Вывел в продакшен 10 высоконагруженных лендингов (Эквайринг, Антифрод, Трансграничные выплаты) в сжатые сроки — 3–5 дней на страницу;",
        "2020_6":
          "Собрал и поддерживал библиотеку переиспользуемых UI-компонентов для продуктов финтеха, что сократило время разработки типовых страниц на 40% и унифицировало стиль всех сервисов компании;",
        "2020_7":
          "Обеспечил стабильность фронтенда финансовых интерфейсов: 0 критических UI-инцидентов за 5 месяцев, а рефакторинг legacy-кода снизил количество обращений в техподдержку на 30%;",
        "2020_8":
          "Внедрил Snapshot-тестирование (Jest + React Testing Library) для критических финансовых компонентов, покрыв ключевой функционал на 75% и сократив количество регрессий при релизах;",
        "2018_0":
          "Разработал интерфейсы для 10+ клиентов федерального уровня (включая e-commerce, логистику и финтех-сектор) в агентстве, входящем в топ-рейтинги Рунета. Работал с React, Vue и Angular одновременно, переключаясь между проектами без потери качества;",
        "2018_1":
          "Управлял 3–4 проектами параллельно, внедрив систему приоритизации задач и чёткий тайм-менеджмент, что позволило сдавать все этапы в срок без авралов;",
        "2018_2":
          "Закрывал fullstack-задачи: от вёрстки по макету (Pixel Perfect) до деплоя backend-логики на PHP, обеспечивая полную автономность на проектах и снижая зависимость от бэкенд-разработчиков;",
        "2016_0":
          "Самостоятельно разработал и запустил B2B-платформу корпоративного обучения: фронтенд на React/Vue, бэкенд на Node.js/PHP, интеграция платежей и аналитики. Реализовал полный цикл — от архитектуры до деплоя. Платформа внедрена в 5+ компаниях, 300+ обученных сотрудников.",
        "2014_0":
          "Fullstack-разработка + менторинг junior-разработчиков, code review, выстраивание процессов команды",
        "2012_0":
          "Разработка клиентских веб-проектов (PHP, JS/jQuery, WordPress). Снизил количество критических багов на 45% через рефакторинг legacy-кода.",
      },
    },

    // Stack
    stack: {
      title: "Технологический стек",
      description:
        "Основа — React / TypeScript / Next.js. Всё остальное применял в реальных проектах.",
      groups: {
        core: "Основа",
        styling: "UI / Styling",
        additional: "Дополнительно",
        testing: "Тестирование",
        forms: "Формы и валидация",
        infra: "Инфраструктура",
        tools: "Инструменты",
        cms: "CMS",
      },
    },

    // Projects
    projects: {
      title: "Проекты",
      all: "Все проекты",
      commercial: "Коммерческие",
      openSource: "Pet-проекты",
      description:
        "Говорят, портфолио — лицо разработчика. За 13+ лет я работал во фрилансе, стартапах и продуктовых компаниях. Здесь — лишь некоторые проекты, которые показывают, как я мыслю, пишу код и решаю задачи.",
      view: "Посмотреть →",
      empty: "Нет проектов в этой категории",
      showAll: "Показать все проекты",
      names: {
        "Cover Letter Generator": "Генератор сопроводительных писем",
        Autofollower: "Автофолловер",
        Twinby: "Twinby",
        WISP: "WISP",
        B2C: "B2C",
        Unlimco: "Unlimco",
        Фасоль: "Фасоль",
        "PR MART": "PR MART",
        "America Study": "America Study",
        CityLife: "CityLife",
        "Детско-юношеская студия «Камерный театр»":
          "Детско-юношеская студия «Камерный театр»",
        "Мебельный центр на Чичерина": "Мебельный центр на Чичерина",
        "Hight Agency": "Hight Agency",
        "СПК-Чимолаи": "СПК-Чимолаи",
        Конаково: "Конаково",
        Смарт: "Смарт",
        "Cascadia Lines": "Cascadia Lines",
        "Реклама.фильм": "Реклама.фильм",
      },
      descriptions: {
        "Cover Letter Generator":
          "Chrome-расширение для автогенерации сопроводительных писем. Возвращает готовое сопроводительное письмо на основе резюме и вакансии",
        Autofollower:
          "Автоматизация подписок. Рандомизированные задержки для имитации естественного поведения пользователя.",
        Twinby:
          "Сайт знакомств на основе научного подхода, где пользователи проходят психологический тест для поиска совместимого партнера. Процент совместимости отображается прямо в ленте, что делает процесс выбора осмысленным и увлекательным.",
        WISP: "Турнирная платформа для киберспортсменов с AI-мониторингом, низким пингом и интеграцией блокчейн-технологий. Позволяет проводить матчи, участвовать в турнирах и выводить заработанные средства.",
        B2C: "Маркетплейс в сфере красоты, который помогает клиентам находить мастеров и записываться на услуги. Основная ценность — сокращение пути к нужному специалисту с 6 до 3 шагов и внедрение системы рейтингов для повышения доверия.",
        Unlimco:
          "Fintech-продукт для эквайринга, массовых выплат и антифрод-защиты, с акцентом на безопасность и стабильность. Включает личный кабинет мерчантов с аналитикой, платежными методами и формами выплат, а также кроссплатформенное мобильное приложение.",
        Фасоль:
          "Прогрессивное веб-приложение (PWA) для магазина продуктов. Офлайн-режим, push-уведомления, быстрая корзина и адаптивный интерфейс — всё, чтобы заказ продуктов занимал минуты, а не часы.",
        "PR MART":
          "Сайт рекламного агентства с портфолио вирусных проектов и полезным блогом. Показывает, что крутая реклама — это не магия, а системная работа.",
        "America Study":
          "Платформа для помощи в поступлении в американские вузы. Предоставляет информацию об учебных заведениях, программах и процессе подачи документов для русскоязычных студентов.",
        CityLife:
          "Первый клиентский кэшбэк-сервис, предоставляющий скидки и возврат до 60% в заведениях города, интернет-магазинах, на туры, авиабилеты, отели и авто. Универсальная дисконтная карта действует в 27 странах мира, объединяя выгоду и удобство для пользователей.",
        "Детско-юношеская студия «Камерный театр»":
          "Сайт театральной студии с информацией о спектаклях, расписании занятий и педагогическом составе. Служит точкой входа для родителей, желающих записать ребенка, и помогает продвигать творческие проекты студии.",
        "Мебельный центр на Чичерина":
          "Корпоративный сайт мебельного центра, представляющий каталог товаров и контактную информацию. Основная функция — привлечение клиентов и демонстрация ассортимента с акцентом на удобный интерфейс.",
        "Hight Agency":
          "Сайт креативного агентства, демонстрирующий портфолио и спектр услуг в сфере дизайна и маркетинга. Служит витриной для привлечения новых клиентов через визуально привлекательный и функциональный интерфейс.",
        "СПК-Чимолаи":
          "Сайт производственной компании, представляющий ее продукцию и услуги. Информирует партнеров и клиентов о возможностях сотрудничества, делая акцент на надежности и опыте.",
        Конаково:
          "Сайт аэроклуба, предоставляющий информацию о полетах, обучении и услугах. Позволяет пользователям узнавать о мероприятиях и записываться на полеты, сочетая справочную функцию с элементами бронирования.",
        Смарт:
          "Сайт производителя снеков (семечки, арахис, кукуруза) с акцентом на натуральный состав и качество продукции. Основная задача — презентация бренда и товаров конечному потребителю через яркий и запоминающийся дизайн.",
        "Cascadia Lines":
          "Логистическая компания, оказывающая услуги по транспортировке грузов из Китая в Россию с фокусом на надежность и скорость. Сайт предоставляет информацию об услугах, контакты и возможность запроса консультации для бизнес-клиентов.",
        "Реклама.фильм":
          "Сайт производственной студии, специализирующейся на создании рекламных видеороликов. Презентует портфолио, услуги и примеры работ для привлечения заказчиков из сферы рекламы и маркетинга.",
      },
    },

    // Contact
    contact: {
      title: "Контакты",
      telegram: "Telegram",
      email: "Email",
      github: "GitHub",
      phone: "Телефон",
      description:
        "Открыт к предложениям о работе, интересным проектам и техническим дискуссиям.",
    },
  },

  en: {
    // Site config
    name: "Dmitry Borodin",
    nameEn: "Dmitry Borodin",
    role: "Senior Frontend Developer",
    headline: "Building products\nthat work.",
    bio: "13+ years in commercial development. Building scalable products with React, TypeScript and Next.js — in fintech, dating, B2B and other domains.",
    cms: "When needed, I handle backend tasks (Node.js, PHP) and work with CMS (Bitrix, WordPress and others) — without involving additional specialists.",
    additional:
      "I know how to bring complex projects to a stable, working result.",
    available: "Open to opportunities",

    // Navigation
    nav: {
      about: "About",
      experience: "Experience",
      stack: "Stack",
      projects: "Projects",
      contact: "Contact",
    },

    // Stats
    stats: {
      years: "years of experience",
      projects: "projects",
      technologies: "technologies",
    },

    // Experience
    experience: {
      title: "Work Experience",
      period: "period",
      company: "company",
      role: "Responsibilities",
      achievements: "Achievements",
      projectWork: "Project Work",
      companies: {
        "Проектная работа": "Project Work",
        Twinby: "Twinby",
        "K&K TEAM": "K&K TEAM",
        Unlimco: "Unlimco",
        Dextra: "Dextra",
        "Арб-Консалтинг": "Arb-Consulting",
        "Дабл Ю": "Double U",
        "Anlas / Supra.pro": "Anlas / Supra.pro",
      },
      roles: {
        "Senior Frontend-разработчик": "Senior Frontend Developer",
        "Frontend-разработчик": "Frontend Developer",
        "Fullstack-разработчик": "Fullstack Developer",
      },
      desc: {
        "2026 — настоящее время_0":
          "Development of UI components and functional modules on React and Vue for E-commerce platform;",
        "2026 — настоящее время_1":
          "Development of seller dashboard and merchant cabinet: designing new modules, refactoring and migrating legacy code;",
        "2023 — 2025_0":
          "Development and support of the client-side of a dating platform with real audience (React / Next.js, Redux Toolkit, Styled Components, MUI);",
        "2023 — 2025_1":
          "Working with several JS frameworks in one project: React / Next.js as the main stack, Vue and Angular for legacy modules;",
        "2023 — 2025_2":
          "Refactoring component base, implementing unit and integration tests;",
        "2023 — 2025_3":
          "Development of promo landing pages for platform marketing campaigns;",
        "2021 — 2023_0":
          "Development of UI components and functional modules on React + TypeScript for two products: b2c.by (beauty marketplace) and wisp.game (tournament platform with NFT mechanics);",
        "2021 — 2023_1":
          "Support and development of corporate websites and promo landing pages;",
        "2020 — 2021_0":
          "UI development for fintech products with high security requirements and financial data accuracy;",
        "2020 — 2021_1":
          "Development of merchant dashboard: designing new modules, refactoring and optimizing legacy code;",
        "2020 — 2021_2":
          "Development of a cross-platform mobile application on React Native (iOS / Android);",
        "2018 — 2020_0":
          "Development and support of interfaces and functional modules for client projects of varying complexity;",
        "2018 — 2020_1": "Full development cycle: from UI/UX to backend logic;",
      },
      ach: {
        "2026_0":
          "Performed zero-downtime migration of legacy dashboard to Next.js in 8 weeks, maintaining 99.9% availability without stopping production;",
        "2026_1":
          "Designed architecture and developed a new dashboard for 3000+ active sellers, reducing page load time by 40% (according to Core Web Vitals);",
        "2026_2":
          "Implemented clear separation of server data and UI state: TanStack Query with automatic caching and background sync — for data, Zustand — for UI state (theme, modals, settings). Result: data desync bugs reduced by 60%, new feature development speed increased by 30% due to predictable architecture;",
        "2026_3":
          "Supported and developed modules on Vue 2/3 alongside the main React stack, ensuring a consistent user experience and unifying API and state management approaches;",
        "2023_0":
          "Optimized performance through Lazy loading, code splitting, tree shaking: bundle size reduced by 27% (according to webpack-bundle-analyzer), LCP improved by ~2.2 seconds, reducing bounce rate on first screens;",
        "2023_1":
          "Conducted a large-scale refactoring of the component base: reduced code duplication by 38%, accelerating development of typical screens by 2x (from 2 days to 1 day per screen);",
        "2023_2":
          "Implemented 15+ complex dynamic forms with multi-level validation (React Hook Form + Yup) for registration flows, onboarding, and user profile creation;",
        "2023_3":
          "Strict validation reduced user input errors by 23%, reducing abandoned registrations and increasing conversion to active users;",
        "2023_4":
          "Supported and developed modules on React, Vue and Angular within a single monorepo, ensuring consistent quality standards and user experience across platform parts;",
        "2023_5":
          "Implemented unit and integration testing (Jest + React Testing Library), covering 70% of critical business logic and reducing release regressions;",
        "2021_0":
          "Catalog refactoring: redesigned the filtering system by multiple parameters (location, services, rating, price), reducing the user's path to the right master from 6 to 3 steps. Result: booking conversion increased by ~15%;",
        "2021_1":
          "Rating and review system: built a module for ratings and reviews of performers from scratch — a key user request. Implemented spam validation and content moderation, increasing engagement (average % of users leaving reviews grew by 20% over 2 months);",
        "2021_2":
          "Production stabilization: conducted frontend audit, identified and fixed 15+ critical accumulated defects (including memory leaks, large list rendering issues). Production crash frequency reduced by 40%;",
        "2021_3":
          "Accelerated MVP: delivered frontend MVP in 3 months instead of planned 6 by using an existing design system and aggressive prioritization with the product manager. Platform successfully launched;",
        "2021_4":
          "Authentication and security: designed and implemented full JWT authentication (registration, login, refresh tokens, protected routes) with tokens stored in httpOnly cookies. Result: 0 security incidents for the entire platform operation period;",
        "2021_5":
          "Tournament module (WebSocket): independently developed a full tournament section — from UI to integration: lobby, participant registration, player matching system, live statuses and real-time updates via WebSockets. Ensured tournament state synchronization among dozens of concurrently connected users;",
        "2021_6":
          "NFT integration: integrated frontend with smart contracts via Web3 libraries (displaying NFT rewards, wallet connection to MetaMask);",
        "2020_0":
          "Built and launched a cross-platform application for iOS/Android from scratch: designed architecture, configured CI/CD builds and released to app stores;",
        "2020_1":
          "Implemented biometric authentication and auto-save mechanism for payment drafts, providing seamless user experience even with unstable connections;",
        "2020_2":
          "Designed state management architecture on MobX for complex payout forms with dynamic fields, ensuring data consistency between components and preventing loss of entered amounts when switching tabs;",
        "2020_3":
          "Developed a new payment method selection module, simplifying merchants' connection to acquiring — new client activation time reduced by 20%;",
        "2020_4":
          "Implemented interactive analytics dashboards with date and currency filters, allowing merchants to find problematic transactions 2x faster;",
        "2020_5":
          "Launched 10 high-load landing pages (Acquiring, Antifraud, Cross-border payments) in tight deadlines — 3–5 days per page;",
        "2020_6":
          "Built and maintained a reusable UI component library for fintech products, reducing development time for standard pages by 40% and unifying the style across all company services;",
        "2020_7":
          "Ensured frontend stability for financial interfaces: 0 critical UI incidents in 5 months, and refactoring legacy code reduced support tickets by 30%;",
        "2020_8":
          "Implemented Snapshot testing (Jest + React Testing Library) for critical financial components, covering 75% of key functionality and reducing release regressions;",
        "2018_0":
          "Developed interfaces for 10+ federal-level clients (including e-commerce, logistics and fintech sectors) at a top-rated Runet agency. Worked with React, Vue and Angular simultaneously, switching between projects without losing quality;",
        "2018_1":
          "Managed 3–4 projects in parallel, implementing a task prioritization system and clear time management, delivering all milestones on time without crunches;",
        "2018_2":
          "Handled fullstack tasks: from layout by mockup (Pixel Perfect) to deploying backend logic on PHP, ensuring full autonomy on projects and reducing dependency on backend developers;",
        "2016_0":
          "Independently developed and launched a B2B corporate learning platform: frontend on React/Vue, backend on Node.js/PHP, payment and analytics integration. Full cycle from architecture to deployment. Platform deployed in 5+ companies, 300+ trained employees.",
        "2014_0":
          "Fullstack development + mentoring junior developers, code review, team process building",
        "2012_0":
          "Development of client web projects (PHP, JS/jQuery, WordPress). Reduced critical bugs by 45% through refactoring legacy code.",
      },
    },

    // Stack
    stack: {
      title: "Tech Stack",
      description:
        "Core — React / TypeScript / Next.js. Everything else I've used in real projects.",
      groups: {
        core: "Core",
        styling: "UI / Styling",
        additional: "Additional",
        testing: "Testing",
        forms: "Forms & Validation",
        infra: "Infrastructure",
        tools: "Tools",
        cms: "CMS",
      },
    },

    // Projects
    projects: {
      title: "Projects",
      all: "All Projects",
      commercial: "Commercial",
      openSource: "Pet Projects",
      description:
        "They say a portfolio is a developer's face. Over 13+ years I've worked in freelance, startups and product companies. Here are just a few projects that show how I think, write code and solve problems.",
      view: "View →",
      empty: "No projects in this category",
      showAll: "Show all projects",
      names: {
        "Cover Letter Generator": "Cover Letter Generator",
        Autofollower: "Autofollower",
        Twinby: "Twinby",
        WISP: "WISP",
        B2C: "B2C",
        Unlimco: "Unlimco",
        Фасоль: "Fasol",
        "PR MART": "PR MART",
        "America Study": "America Study",
        CityLife: "CityLife",
        "Детско-юношеская студия «Камерный театр»": "Kamerny Theatre Studio",
        "Мебельный центр на Чичерина": "Furniture Center on Chicherina",
        "Hight Agency": "Hight Agency",
        "СПК-Чимолаи": "SPK-Chimolai",
        Конаково: "Konakovo",
        Смарт: "Smart",
        "Cascadia Lines": "Cascadia Lines",
        "Реклама.фильм": "Reklama.film",
      },
      descriptions: {
        "Cover Letter Generator":
          "Chrome extension for auto-generating cover letters. Returns a ready cover letter based on your resume and job description.",
        Autofollower:
          "Subscription automation. Randomized delays to simulate natural user behavior.",
        Twinby:
          "A science-based dating site where users take a psychological test to find a compatible partner. Compatibility percentage is shown right in the feed, making the choice meaningful and engaging.",
        WISP: "Tournament platform for esports players with AI monitoring, low ping and blockchain integration. Allows matches, tournament participation and withdrawal of earned funds.",
        B2C: "Beauty marketplace that helps clients find masters and book services. Key value — reducing the path to the right specialist from 6 to 3 steps and implementing a rating system to increase trust.",
        Unlimco:
          "Fintech product for acquiring, mass payouts and anti-fraud protection, with a focus on security and stability. Includes merchant dashboard with analytics, payment methods and payout forms, plus a cross-platform mobile app.",
        Фасоль:
          "Progressive Web App (PWA) for a grocery store. Offline mode, push notifications, fast cart and adaptive interface — everything to make ordering groceries take minutes, not hours.",
        "PR MART":
          "Advertising agency website with a portfolio of viral projects and a useful blog. Shows that great advertising is not magic, but systematic work.",
        "America Study":
          "Platform to help Russian-speaking students apply to American universities. Provides information about institutions, programs and the application process.",
        CityLife:
          "The first client cashback service, providing discounts and up to 60% cashback at city venues, online stores, tours, flights, hotels and cars. A universal discount card works in 27 countries, combining benefits and convenience.",
        "Детско-юношеская студия «Камерный театр»":
          "Theatre studio website with information about performances, class schedules and teaching staff. Serves as an entry point for parents wanting to enroll their child and helps promote the studio's creative projects.",
        "Мебельный центр на Чичерина":
          "Corporate website of a furniture center, featuring product catalog and contact information. Main function — attracting clients and showcasing the assortment with a focus on user-friendly interface.",
        "Hight Agency":
          "Creative agency website showcasing portfolio and range of services in design and marketing. Serves as a showcase to attract new clients through a visually appealing and functional interface.",
        "СПК-Чимолаи":
          "Manufacturing company website presenting its products and services. Informs partners and clients about cooperation opportunities, emphasizing reliability and experience.",
        Конаково:
          "Aeroclub website providing information about flights, training and services. Allows users to learn about events and book flights, combining reference functionality with booking elements.",
        Смарт:
          "Snacks manufacturer website (sunflower seeds, peanuts, corn) with a focus on natural ingredients and product quality. Main goal — presenting the brand and products to the end consumer through a bright and memorable design.",
        "Cascadia Lines":
          "Logistics company providing cargo transportation from China to Russia with a focus on reliability and speed. The site provides information about services, contacts and the ability to request a consultation for business clients.",
        "Реклама.фильм":
          "Production studio website specializing in creating advertising videos. Presents portfolio, services and examples of work to attract clients from the advertising and marketing industry.",
      },
    },

    // Contact
    contact: {
      title: "Contacts",
      telegram: "Telegram",
      email: "Email",
      github: "GitHub",
      phone: "Phone",
      description:
        "Open to job offers, interesting projects and technical discussions.",
    },
  },
};
