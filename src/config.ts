/**
 * Публичный контент сайта. Неизвестные ссылки и следующая встреча остаются null:
 * интерфейс покажет спокойное сообщение вместо неработающей кнопки.
 */
export const siteConfig = {
  name: 'ITMOGUESSR*',
  tagline: 'Случайная точка. Не случайные люди.',
  description:
    'Студенческий клуб GeoGuessr в ИТМО. Исследуем мир, играем вместе и находим своих — от первой догадки до точного попадания.',
  city: 'Санкт-Петербург',
  university: 'Университет ИТМО',
  coordinates: '59.9343° N, 30.3351° E',
} as const;

export const navigation = [
  { id: 'about', label: 'О клубе' },
  { id: 'activities', label: 'Что делаем' },
  { id: 'events', label: 'Встречи' },
  { id: 'future', label: 'Дальше — больше' },
  { id: 'faq', label: 'FAQ' },
] as const;

export interface SocialLink {
  label: string;
  url: string | null;
}

/** Добавьте только подтверждённые адреса сообществ клуба. */
export const socialLinks: SocialLink[] = [
  { label: 'Telegram', url: 'https://t.me/itmoguessr' },
  { label: 'VK', url: 'https://vk.ru/itmoguessr' },
  { label: 'Discord', url: 'https://discord.gg/3GZCanyZep' },
];

export interface ClubEvent {
  title: string;
  /** ISO 8601 с часовым поясом, например YYYY-MM-DDTHH:mm:ss+03:00. */
  datetime: string;
  endDateTime?: string;
  location: string;
  description: string;
  registrationUrl: string | null;
}

/** Замените null объектом ClubEvent, когда встреча будет подтверждена. */
export const nextEvent: ClubEvent | null = null;

export type IconName = 'gamepad' | 'users' | 'trophy' | 'compass' | 'chart' | 'spark';

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export const activities: Activity[] = [
  {
    id: 'play',
    title: 'Играем вместе',
    description: 'Ищем подсказки, спорим о полушариях и радуемся точным попаданиям в GeoGuessr.',
    icon: 'gamepad',
  },
  {
    id: 'meet',
    title: 'Знакомимся и встречаемся',
    description: 'Собираемся очно и онлайн, чтобы поиграть, поговорить о путешествиях и найти своих.',
    icon: 'users',
  },
  {
    id: 'compete',
    title: 'Соревнуемся по-дружески',
    description: 'Пробуем свои силы в дружеских матчах и турнирах. Азарт — часть игры, общение — её основа.',
    icon: 'trophy',
  },
  {
    id: 'learn',
    title: 'Учимся замечать',
    description: 'Разбираем интересные локации и делимся находками: от дорожных знаков до формы гор.',
    icon: 'compass',
  },
];

export interface FutureFeature {
  id: string;
  title: string;
  description: string;
  /** Подключайте маршрут одновременно с готовым разделом. */
  route: `/${string}`;
  status: 'planned' | 'available';
  icon: IconName;
}

export const futureFeatures: FutureFeature[] = [
  {
    id: 'rating',
    title: 'Рейтинг игроков',
    description: 'Следить за своим прогрессом и находить новые игровые ориентиры.',
    route: '/rating',
    status: 'planned',
    icon: 'chart',
  },
  {
    id: 'players',
    title: 'Профили участников',
    description: 'Узнавать друг друга и находить компанию для следующего раунда.',
    route: '/players',
    status: 'planned',
    icon: 'users',
  },
  {
    id: 'tournaments',
    title: 'Турнирная система',
    description: 'Сетки, результаты и всё, что нужно для клубных соревнований.',
    route: '/tournaments',
    status: 'planned',
    icon: 'trophy',
  },
  {
    id: 'stats',
    title: 'Достижения и статистика',
    description: 'Сохранять памятные попадания и видеть, как растёт игровой опыт.',
    route: '/stats',
    status: 'planned',
    icon: 'spark',
  },
];

export const faqs = [
  {
    question: 'Нужно ли уметь играть в GeoGuessr?',
    answer: 'Нет. Можно начать с нуля: вместе искать подсказки и обсуждать догадки проще и интереснее. Опытные игроки тоже найдут компанию.',
  },
  {
    question: 'Как проходят встречи?',
    answer: 'Играем в GeoGuessr, обсуждаем локации и общаемся — очно или онлайн. Формат и подробности каждой встречи появятся в её анонсе.',
  },
  {
    question: 'Как узнать о следующем мероприятии?',
    answer: 'Следите за разделом «Встречи» на сайте и новостями в сообществах клуба. Ссылки на Telegram, VK и Discord — в разделе «Присоединиться».',
  },
  {
    question: 'Как присоединиться к сообществу?',
    answer: 'Выберите Telegram, VK или Discord в разделе «Присоединиться» и заходите в сообщество. Будем рады познакомиться!',
  },
] as const;
