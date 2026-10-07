window.SITE = {
  // Ім’я під фото
  name: "Datsky044",

  // Короткий підпис (1 рядок)
  handle: "@Datsky044",

  // 1–2 речення про тебе
  bio: "Контент, ідеї та проєкти. Обери, куди зайти — усе важливе в одному місці.",

  // Фото: поклади файл avatar.jpg у цю ж папку і залиш рядок як є.
  // Або встав пряме посилання: "https://..."
  // Якщо файлу немає — покажеться стильний плейсхолдер з ініціалами.
  avatar: "avatar.jpg",
  initials: "ВН",

  // Локація / тег (можна "" щоб сховати)
  location: "",

  // Головні кнопки (3–6 штук — найкраще для кліків).
  // type: "primary" — велика акцентна, "card" — звичайна картка.
  // icon: camera | play | send | shop | mail | spark | link | heart | mic
  links: [
    {
      title: "Donatello",
      subtitle: "Підтримати донатом",
      href: "https://donatello.to/Datsky044",
      type: "primary",
      icon: "donatello",
    },
    {
      title: "Twitch",
      subtitle: "Стріми тут",
      href: "https://www.twitch.tv/datsky044",
      type: "card",
      icon: "twitch",
    },
    {
      title: "TikTok",
      subtitle: "Стріми та нарізки",
      href: "https://tiktok.com/@datsky044",
      type: "card",
      icon: "tiktok",
    },
    {
      title: "Telegram-канал",
      subtitle: "Анонси стрімів та новини",
      href: "https://t.me/datsky_live",
      type: "card",
      icon: "telegram",
    },
    //{
    //  title: "Написати мені",
    //  subtitle: "hello@email.com",
    //  href: "mailto:hello@email.com",
    //  type: "card",
    //  icon: "mail",
    //},
  ],

  // Іконки соцмереж унизу (компактний ряд).
  // Щоб сховати мережу — видали об’єкт або постав enabled: false
  socials: [
    { name: "Donatello", href: "https://donatello.to/Datsky044", icon: "donatello", enabled: true },
    { name: "Twitch", href: "https://www.twitch.tv/datsky044", icon: "twitch", enabled: true },
    { name: "Telegram", href: "https://t.me/datsky_live", icon: "telegram", enabled: true },
    { name: "TikTok", href: "https://tiktok.com/@datsky044", icon: "tiktok", enabled: true },
    { name: "YouTube", href: "https://youtube.com/@YOUR_CHANNEL", icon: "youtube", enabled: false },
    { name: "Threads", href: "https://threads.net/@YOUR_USERNAME", icon: "threads", enabled: false },
    { name: "Facebook", href: "https://facebook.com/YOUR_USERNAME", icon: "facebook", enabled: false },
    { name: "X / Twitter", href: "https://x.com/YOUR_USERNAME", icon: "x", enabled: false },
    { name: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME", icon: "linkedin", enabled: false },
  ],

  footer: "Зроблено з любов’ю · 2026",
};
