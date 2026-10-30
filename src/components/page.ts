import { activities, faqs, futureFeatures, navigation, nextEvent, siteConfig, socialLinks } from '../config';
import { escapeHtml as e, safeExternalUrl } from '../lib/html';
import { icon } from './icons';

const brandMark = `${import.meta.env.BASE_URL}brand-mark.png`;

function label(number: string, text: string): string {
  return `<div class="section-label"><span>${number}</span><span>${text}</span></div>`;
}

function brand(): string {
  return `<a class="brand" href="#home" aria-label="${e(siteConfig.name)} — на главную"><img src="${brandMark}" alt="" width="40" height="40"/><span>${e(siteConfig.name.replace(/\*$/, ''))}<span class="brand-star">*</span></span></a>`;
}

function renderHeader(): string {
  return `<header class="site-header"><div class="header-inner container">${brand()}
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span>Меню</span><span class="menu-lines" aria-hidden="true"></span></button>
    <nav id="site-nav" class="site-nav" aria-label="Основная навигация">${navigation.map(item => `<a href="#${e(item.id)}">${e(item.label)}</a>`).join('')}<a class="nav-join" href="#join">Присоединиться ${icon('diagonal')}</a></nav>
  </div></header>`;
}

function renderHero(): string {
  return `<section class="hero container" id="home" aria-labelledby="hero-title">
    <div class="hero-topline"><span class="eyebrow"><span class="status-dot"></span> Студенческий клуб GeoGuessr</span><span class="hero-city">${icon('pin')} ${e(siteConfig.city)}</span></div>
    <h1 class="hero-wordmark" id="hero-title">ITMOGUESSR<span>*</span></h1>
    <div class="hero-grid">
      <div class="hero-copy"><p class="eyebrow hero-overline">Весь мир — повод познакомиться</p><h2>Случайная точка.<br/><span>Не случайные<br class="desktop-break"/> люди.</span></h2>
      <p class="hero-description">${e(siteConfig.description)}</p>
      <div class="hero-actions"><a class="button button-primary" href="#join">Присоединиться ${icon('diagonal')}</a><a class="button button-text" href="#about">Узнать больше ${icon('down')}</a></div></div>
      <div class="hero-art"><span class="art-corner corner-top" aria-hidden="true">+</span><span class="art-corner corner-bottom" aria-hidden="true">+</span><span class="art-north mono" aria-hidden="true">N</span><div class="orbit orbit-one" aria-hidden="true"></div><div class="orbit orbit-two" aria-hidden="true"></div><img class="hero-emblem" src="${brandMark}" alt="Эмблема ITMOGUESSR*: глобус и пин со зданием ИТМО" width="1254" height="1254" fetchpriority="high"/><div class="coordinate-label"><span class="status-dot"></span><span>${e(siteConfig.coordinates)}<small>НАША ТОЧКА СБОРКИ · ${e(siteConfig.city.toUpperCase())}</small></span></div></div>
    </div>
    <div class="hero-bottom"><a href="#about" class="scroll-link">${icon('down')} Листай. Мир ближе, чем кажется.</a><span class="mono hero-interests">ГЕОГРАФИЯ <span>×</span> ИГРА <span>×</span> СООБЩЕСТВО</span></div>
  </section>`;
}

function renderAbout(): string {
  return `<section class="section section-about" id="about" aria-labelledby="about-title"><div class="container editorial-grid">${label('02', 'О клубе')}<div class="about-content reveal"><p class="eyebrow">Хорошая компания. В любой точке.</p><h2 id="about-title">Мир большой.<br/>Давай исследовать <span class="text-icy">вместе.</span></h2><div class="about-text"><p><strong>ITMOGUESSR* — это люди, которых объединяет любопытство.</strong> К миру, к новым местам и друг к другу. Мы — студенческий клуб GeoGuessr в Университете ИТМО.</p><p>Необязательно отличать Боливию от Перу по одному столбу. Можно впервые открыть игру, прийти за общением или поделиться любимой географической находкой. Начнём с любой точки.</p></div><div class="about-note">${icon('compass')} <span>Любой опыт. Общий интерес.</span><span class="note-star" aria-hidden="true">✳</span></div></div></div></section>`;
}

function renderActivities(): string {
  return `<section class="section section-activities" id="activities" aria-labelledby="activities-title"><div class="container"><div class="section-heading">${label('03', 'Что делаем')}<div class="reveal"><h2 id="activities-title">Больше, чем<br/><span class="text-icy">поставить пин.</span></h2><p class="section-intro">Одна игра. Много способов быть вместе.</p></div></div><div class="activities-list">${activities.map((item, index) => `<article class="activity-row reveal"><span class="activity-number mono">0${index + 1}</span><div class="activity-icon">${icon(item.icon)}</div><h3>${e(item.title)}</h3><p>${e(item.description)}</p></article>`).join('')}</div></div></section>`;
}

function renderEvent(): string {
  const event = nextEvent;
  let body: string;
  if (event) {
    const date = new Date(event.datetime);
    const validDate = !Number.isNaN(date.getTime());
    const dateText = validDate ? new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Moscow' }).format(date) : '';
    const registration = safeExternalUrl(event.registrationUrl);
    body = `<div class="event-copy"><span class="eyebrow">Следующая точка на карте</span><h2 id="events-title">${e(event.title)}</h2><p>${e(event.description)}</p><div class="event-details">${validDate ? `<span>${icon('calendar')}<time datetime="${e(event.datetime)}">${e(dateText)} МСК</time></span>` : ''}<span>${icon('pin')}${e(event.location)}</span></div>${registration ? `<a class="button button-dark" href="${e(registration)}" target="_blank" rel="noopener noreferrer">Регистрация ${icon('diagonal')}</a>` : '<p class="event-caption">Ссылка на регистрацию появится позже.</p>'}</div>`;
  } else {
    body = `<div class="event-copy"><span class="eyebrow">Следующая точка на карте</span><h2 id="events-title">Хорошая встреча<br/>ещё впереди.</h2><p>Скоро анонсируем следующую встречу.<br/>Дата, место и все подробности появятся здесь.</p><span class="event-status"><span class="status-dot"></span> Ждём новый маршрут</span></div>`;
  }
  return `<section class="section section-events" id="events" aria-labelledby="events-title"><div class="container">${label('04', 'Ближайшие мероприятия')}<div class="event-panel reveal">${body}<div class="event-art" aria-hidden="true"><div class="event-grid"></div><div class="event-cross cross-one">+</div><div class="event-cross cross-two">+</div><div class="event-pin">${icon('pin')}</div><span class="event-art-label mono">NEXT STOP<br/><strong>TO BE DISCOVERED</strong></span><span class="event-dashed-line"></span></div></div></div></section>`;
}

function renderFuture(): string {
  return `<section class="section section-future" id="future" aria-labelledby="future-title"><div class="container"><div class="section-heading">${label('05', 'Дальше — больше')}<div class="reveal"><h2 id="future-title">У этой карты<br/><span class="text-icy">есть продолжение.</span></h2><p class="section-intro">Пока мы знакомимся. Дальше — целый клубный портал.</p></div></div><div class="future-grid">${futureFeatures.map(feature => {
    const available = feature.status === 'available';
    const tag = available ? 'a' : 'article';
    const route = `${import.meta.env.BASE_URL}${feature.route.replace(/^\//, '')}`;
    return `<${tag} class="future-card reveal${available ? ' is-available' : ''}"${available ? ` href="${e(route)}"` : ''}><div class="future-card-top">${icon(feature.icon)}<span class="future-state">${icon(available ? 'diagonal' : 'lock')} ${available ? 'Открыть' : 'Скоро'}</span></div><h3>${e(feature.title)}</h3><p>${e(feature.description)}</p></${tag}>`;
  }).join('')}</div><p class="future-footnote">${icon('spark')} Растём вместе с сообществом. Новые разделы появятся постепенно.</p></div></section>`;
}

function renderFaq(): string {
  return `<section class="section section-faq" id="faq" aria-labelledby="faq-title"><div class="container editorial-grid">${label('06', 'Пара вопросов')}<div class="faq-content reveal"><h2 id="faq-title">Перед первым<br/><span class="text-icy">поворотом.</span></h2><div class="faq-list">${faqs.map((faq, index) => `<details class="faq-item" name="club-faq"><summary><span class="faq-number mono">0${index + 1}</span><span>${e(faq.question)}</span>${icon('plus')}</summary><div class="faq-answer"><p>${e(faq.answer)}</p></div></details>`).join('')}</div></div></div></section>`;
}

function renderJoin(): string {
  const hasLinks = socialLinks.some(link => safeExternalUrl(link.url));
  return `<section class="section section-join" id="join" aria-labelledby="join-title"><div class="container">${label('07', 'На связи')}<div class="join-content reveal"><p class="eyebrow">Твоя следующая точка — здесь</p><h2 id="join-title">Найдёмся<span class="join-star" aria-hidden="true">*</span><br/><span class="text-icy">на карте.</span></h2><p class="join-description">В мире столько интересного.<br/>Давай искать вместе.</p><div class="social-links" aria-label="Сообщества клуба">${socialLinks.map(link => { const url = safeExternalUrl(link.url); return url ? `<a class="social-link" href="${e(url)}" target="_blank" rel="noopener noreferrer"><span>${e(link.label)}</span>${icon('diagonal')}</a>` : `<div class="social-link social-pending"><span>${e(link.label)}</span><span class="mono">Скоро</span></div>`; }).join('')}</div>${!hasLinks ? '<p class="contact-note">Ссылки на сообщества скоро появятся здесь.</p>' : ''}</div><div class="join-coordinates mono" aria-hidden="true">59°56′ N<br/>30°20′ E<span>SAINT PETERSBURG<br/>RUSSIA, EARTH</span></div></div></section>`;
}

function renderFooter(): string {
  const year = new Date().getFullYear();
  return `<footer class="site-footer"><div class="container footer-inner">${brand()}<p>${e(siteConfig.tagline)}</p><span class="footer-copy mono">© ${year}</span><a class="back-top" href="#home" aria-label="Вернуться наверх">${icon('down')}</a></div></footer>`;
}

export function renderPage(): string {
  return `${renderHeader()}<main id="main">${renderHero()}${renderAbout()}${renderActivities()}${renderEvent()}${renderFuture()}${renderFaq()}${renderJoin()}</main>${renderFooter()}`;
}
