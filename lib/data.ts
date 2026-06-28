export const siteConfig = {
  name: "Дмитрий Бородин",
  nameEn: "Dmitry Borodin",
  role: "Senior Frontend Developer",
  headline: "Строю продукты,\nкоторые работают.",
  bio: "7+ лет в коммерческой разработке. Создаю масштабируемые продукты на React, TypeScript и Next.js — в fintech, dating и B2B.",
  cms: "Также работаю с популярными CMS (Bitrix, WordPress, Tilda, ModX) и PHP в целом, что позволяет гибко решать задачи любой сложности.",
  additional:
    "Умею доводить сложные проекты до стабильного работающего результата.",
  available: true,
  contacts: {
    telegram: "@Avulsed",
    telegramUrl: "https://t.me/Avulsed",
    email: "trybr@yandex.ru",
    github: "github.com/trybr",
    githubUrl: "https://github.com/trybr",
    phone: "+7 (951) 486-04-70",
  },
};

export const stats = [
  { num: "7+", label: "лет опыта" },
  { num: "100+", label: "проектов" },
  { num: "4", label: "направления" },
];

export const coreTags = ["React", "TypeScript", "Next.js"];
export const extraTags = ["Vue", "Angular", "React Native", "Node.js"];

export const experience = [
  {
    period: "2026 — настоящее время",
    company: "NDA",
    role: "Senior Frontend-разработчик",
    desc: [
      "Разработка UI-компонентов и функциональных модулей на React и Vue",
      "Развитие личного кабинета и дашбордов: новые модули, рефакторинг legacy",
    ],
    ach: [
      "Выстроил архитектуру и разработал новый дашборд на Next.js для 3000+ активных пользователей",
      "Разделил серверные данные и UI-состояние: внедрил TanStack Query с автоматическим кэшированием и фоновой синхронизацией, Zustand для темы и модальных окон. Результат: частота багов из-за рассинхрона данных снизилась на 60%, скорость разработки новых фич выросла на 30%",
      "Перевёл legacy-дашборд на Next.js за 8 недель без остановки продакшена",
    ],
    tags: [],
  },
  {
    period: "2023 — 2025",
    company: "Twinby",
    role: "Senior Frontend-разработчик",
    desc: [
      "Разработка и поддержка клиентской части dating-платформы с реальной аудиторией (React / Next.js, Redux Toolkit, Styled Components, MUI)",
      "Работа с несколькими JS-фреймворками одновременно: React / Next.js как основной стек, Vue и Angular — по требованиям модулей",
      "Рефакторинг компонентной базы, покрытие тестами",
      "Разработка промо-лендингов под маркетинговые кампании платформы",
    ],
    ach: [
      "Провёл рефакторинг компонентной базы: сократил дублирование кода ~на 38%, ускорил разработку типовых экранов приблизительно вдвое",
      "Оптимизировал производительность через Lazy loading, code splitting, tree shaking: bundle size снизился на 27% по данным webpack-bundle-analyzer, LCP улучшился на ~2.2 сек.",
      "Реализовывал сложные формы с многоуровневой валидацией (Formik / React Hook Form + Yup) для флоу с регистрацией, onboarding, созданием личных кабинетов",
      "Снизил количество ошибок пользовательского ввода на 23% за счёт строгой валидации в 15+ сложных динамических формах",
    ],
    tags: [],
  },
  {
    period: "2021 — 2023",
    company: "K&K TEAM",
    role: "Senior Frontend-разработчик",
    desc: [
      "Разработка UI-компонентов и функциональных модулей для двух продуктов: b2c.by (маркетплейс красоты) и wisp.game (турнирная платформа с NFT-механиками)",
      "Поддержка и развитие корпоративных сайтов и промо-лендингов",
    ],
    ach: [
      "Переработал каталог и реализовал фильтрацию по множеству параметров: сократил путь до нужного мастера с 6 до 3 шагов",
      "Внедрил систему рейтингов и отзывов исполнителей — ключевой запрос пользователей, повысивший доверие к платформе",
      "Провёл аудит и устранил 15+ накопившихся дефектов, стабилизировав продакшен",
      "Реализовал рабочую фронтенд часть MVP за ~3 месяца вместо 6 месяцев",
      "Реализовал полную систему JWT-аутентификации (регистрация, вход, защищённые маршруты) — ноль security-инцидентов за всё время работы платформы",
      "Запустил раздел турниров от ТЗ до продакшена: список, механика записи и подключения, подбор игроков, интеграция с API через WebSockets",
    ],
    tags: [],
  },
  {
    period: "2020 — 2021",
    company: "Unlimco",
    role: "Frontend-разработчик",
    desc: [
      "Разработка UI для fintech-продуктов компании в условиях высоких требований к безопасности и точности финансовых данных",
      "Развитие личного кабинета мерчантов: новые модули, рефакторинг legacy",
      "Разработка кроссплатформенного мобильного приложения на React Native (iOS / Android)",
    ],
    ach: [
      "Разработал и запустил мобильное приложение на React Native — полный цикл от архитектуры до релиза в App Store и Google Play",
      "Расширил ЛК мерчантов: добавил 3 новых модуля (платёжные методы, аналитика, формы выплат); устранил критические проблемы legacy — количество обращений в поддержку снизилось на ~30%",
      "Вывел в продакшен ~10 лендингов (интернет-эквайринг, массовые выплаты, антифрод, трансграничные выплаты и т.д.) — каждый от макета до деплоя за ~3-5 рабочих дней",
      "Обеспечил стабильность фронтенда финансовых интерфейсов: ни одного критического UI-инцидента за 5 месяцев работы",
    ],
    tags: [],
  },
  {
    period: "2018 — 2020",
    company: "Dextra",
    role: "Frontend-разработчик",
    desc: [
      "Разработка, доработка и поддержка интерфейсов и функциональных модулей для клиентских проектов различной сложности.",
    ],
    ach: [
      "Разработал интерфейсы для клиентов федерального масштаба в агентстве топ-рейтингов Рунета (React, Vue, Angular, PHP) — управлял несколькими проектами параллельно без потери скорости",
      "Закрывал полный цикл задач: от вёрстки по макету до деплоя backend-логики на PHP",
    ],
    tags: ["React", "Vue", "Node.js"],
  },
  {
    period: "2016 — 2018",
    company: "Арб-Консалтинг",
    role: "Fullstack-разработчик",
    desc: [
      "Разработка клиентских проектов. Разработал и запустил B2B-платформу корпоративного обучения — fullstack от архитектуры до деплоя.",
    ],
    tags: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "React",
      "Angular",
      "Vue",
      "Node.js",
    ],
  },
  {
    period: "2014 — 2016",
    company: "Дабл Ю",
    role: "Fullstack-разработчик",
    desc: [
      "Fullstack-разработка, менторинг junior-разработчиков, code review, выстраивание процессов команды.",
    ],
    tags: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "React",
      "Angular",
    ],
  },
  {
    period: "2012 — 2014",
    company: "Anlas / Supra.pro",
    role: "Fullstack-разработчик",
    desc: ["Разработка и поддержка клиентских веб-проектов на популярных CMS."],
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
  },
];

export const stackGroups = [
  {
    title: "Основа",
    items: [
      "React 18+",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Redux Toolkit",
      "MobX",
      "Zustand",
      "TanStack Query",
    ],
    highlight: true,
  },
  {
    title: "UI / Styling",
    items: [
      "SCSS/SASS/LESS",
      "Flexbox/GridCSS",
      "CSS-in-JS",
      "CSS Modules",
      "Styled Components",
      "MUI",
      "Mantine",
    ],
    highlight: false,
  },
  {
    title: "Дополнительно",
    items: ["Vue 3", "Pinia", "Vuex", "Angular", "React Native", "Gatsby.js"],
    highlight: false,
  },
  {
    title: "Тестирование",
    items: ["React testing library", "Jest", "Vitest", "Playwright"],
    highlight: false,
  },
  {
    title: "Формы и валидация",
    items: ["React Hook Form", "Formik", "Yup", "Zod"],
    highlight: false,
  },
  {
    title: "Инфраструктура",
    items: [
      "Webpack",
      "Vite",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Storybook",
    ],
    highlight: false,
  },
  {
    title: "Инструменты",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Storybook"],
    highlight: false,
  },
];

export type ProjectType = "oss" | "concept" | "commercial";

export const projects = [
  // {
  //   name: "Cover Letter Generator",
  //   type: "oss" as ProjectType,
  //   typeLabel: "Open Source",
  //   desc: "Chrome-расширение для автогенерации сопроводительных писем. Берёт резюме и вакансию с hh.ru, отправляет в Gemini API, возвращает готовое письмо. Минимальный UI, одна точка входа.",
  //   tags: ["Chrome Extensions", "Gemini API", "JavaScript"],
  //   url: "",
  // },
  // {
  //   name: "Setka Autofollower",
  //   type: "oss" as ProjectType,
  //   typeLabel: "Open Source",
  //   desc: "Автоматизация подписок на профессиональной сети setka.ru. Рандомизированные задержки для имитации естественного поведения пользователя.",
  //   tags: ["Chrome Extensions", "JavaScript", "DOM API"],
  //   url: "",
  // },
  {
    name: "Setka Autofollower",
    type: "oss" as ProjectType,
    typeLabel: "Open Source",
    desc: "Автоматизация подписок на профессиональной сети setka.ru. Рандомизированные задержки для имитации естественного поведения пользователя.",
    tags: ["Chrome Extensions", "JavaScript", "DOM API"],
    url: "",
  },
];
