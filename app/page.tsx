"use client";

import { FormEvent, useState } from "react";

const personal = [
  "Персональный ИИ Индекс",
  "Оценка по ключевым направлениям",
  "Сильные стороны и зоны роста",
  "Рекомендации и сертификат",
];

const corporate = [
  "Корпоративный ИИ Индекс",
  "Общий профиль команды",
  "Оценка по каждому направлению",
  "Рекомендации и аналитический отчёт",
];

const faq = [
  ["Что такое ИИ Чекап?", "Онлайн-диагностика, которая помогает оценить, насколько уверенно человек или организация используют ИИ. В конце вы получите ИИ Индекс и рекомендации."],
  ["Кто может участвовать?", "Любой человек с минимальным опытом работы с ИИ. Для компаний и организаций доступен отдельный корпоративный вариант."],
  ["Сколько это стоит?", "Нисколько. Участие полностью бесплатное."],
  ["Сколько времени понадобится?", "В среднем 20–25 минут. Специально готовиться не нужно."],
  ["Можно пройти оба варианта?", "Да. При регистрации выберите персональный, корпоративный или сразу оба варианта."],
  ["Что делать, если я почти не пользовался ИИ?", "Всё равно приходите. Чекап покажет ваш текущий уровень и подскажет, с каких тем лучше начать."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="ИИ Чекап — на главную">
          <span className="brand-mark">ИИ</span>
          <span>Чекап</span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">О чекапе</a>
          <a href="#how">Как проходит</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <a className="nav-cta" href="#signup">Записаться <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> 14–20 сентября · онлайн · бесплатно</div>
          <h1>Узнайте, насколько уверенно вы работаете с <span>ИИ</span></h1>
          <p className="lead">Пройдите диагностику за 20–25 минут. Получите свой ИИ Индекс, разбор сильных сторон и понятные рекомендации.</p>
          <div className="hero-actions">
            <a className="button primary" href="#signup">Пройти ИИ Чекап <Arrow /></a>
            <a className="button secondary" href="#about">Как это работает</a>
          </div>
          <p className="fine">Это не экзамен. Здесь нет плохих результатов.</p>
        </div>
        <div className="index-card" aria-label="Пример профиля ИИ Индекса">
          <div className="card-top"><span>Ваш ИИ Индекс</span><span className="live">ПРИМЕР</span></div>
          <div className="score"><strong>74</strong><span>/100</span></div>
          <div className="meter"><i /></div>
          <div className="metric"><span>Понимание ИИ</span><b>82</b></div>
          <div className="metric"><span>Работа с инструментами</span><b>76</b></div>
          <div className="metric"><span>Безопасность</span><b>69</b></div>
          <div className="metric"><span>Критическое мышление</span><b>71</b></div>
          <div className="card-note">Ваш результат — это точка старта, а не оценка.</div>
        </div>
      </section>

      <section className="ticker" aria-label="Ключевые преимущества">
        <span>20–25 МИНУТ</span><i>✦</i><span>БЕЗ ПОДГОТОВКИ</span><i>✦</i><span>ОНЛАЙН</span><i>✦</i><span>БЕСПЛАТНО</span>
      </section>

      <section className="section intro" id="about">
        <div className="section-num">01 / О ЧЕКАПЕ</div>
        <div>
          <h2>Не тест на знание сервисов.<br />Диагностика вашей готовности к ИИ.</h2>
          <p className="large-copy">ИИ Чекап покажет, что у вас уже получается и какие навыки стоит развивать. Методика учитывает возможности ИИ, его ограничения, риски и безопасное использование.</p>
          <div className="facts">
            <div><b>01</b><p>Теоретические вопросы и ситуации из жизни и работы</p></div>
            <div><b>02</b><p>Единые критерии для всех участников</p></div>
            <div><b>03</b><p>Методика, проверенная российскими экспертами</p></div>
          </div>
        </div>
      </section>

      <section className="section paths">
        <div className="section-num">02 / ВЫБЕРИТЕ ФОРМАТ</div>
        <div>
          <div className="section-head"><h2>Для себя<br />или для команды</h2><p>Можно выбрать один вариант или пройти оба.</p></div>
          <div className="path-grid">
            <article className="path-card lime">
              <div className="path-icon">01</div>
              <h3>Персональный</h3>
              <p>Для тех, кто хочет понять свой уровень и увереннее использовать ИИ в работе и жизни.</p>
              <a href="#signup">Выбрать персональный <Arrow /></a>
            </article>
            <article className="path-card dark">
              <div className="path-icon">02</div>
              <h3>Корпоративный</h3>
              <p>Для компаний, которые хотят оценить зрелость работы с ИИ и увидеть точки роста.</p>
              <a href="#signup">Выбрать корпоративный <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section process" id="how">
        <div className="section-num">03 / КАК ПРОХОДИТ</div>
        <div>
          <h2>Всего четыре шага</h2>
          <div className="steps">
            {[
              ["01", "Запишитесь", "Выберите формат и оставьте контакты."],
              ["02", "Получите приглашение", "Пришлём ссылку и полезные материалы."],
              ["03", "Пройдите чекап", "Онлайн с 14 по 20 сентября."],
              ["04", "Узнайте результат", "Получите ИИ Индекс и рекомендации."],
            ].map(([n, title, text]) => <div className="step" key={n}><b>{n}</b><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <div className="gift"><span>ПОДАРОК</span><p>После регистрации вы получите месяц бесплатного доступа к ИИ-агрегатору партнёра.</p></div>
        </div>
      </section>

      <section className="results">
        <div className="results-title"><span>04 / РЕЗУЛЬТАТ</span><h2>Что останется<br />у вас после чекапа</h2></div>
        <div className="result-columns">
          <div><h3>Персональный</h3>{personal.map((x, i) => <p key={x}><span>0{i + 1}</span>{x}</p>)}</div>
          <div><h3>Корпоративный</h3>{corporate.map((x, i) => <p key={x}><span>0{i + 1}</span>{x}</p>)}</div>
        </div>
      </section>

      <section className="deadline">
        <div><span className="kicker">ОДНА НЕДЕЛЯ В ГОДУ</span><h2>14—20<br />сентября</h2></div>
        <div><p>Пройти ИИ Чекап можно только во время «ИИ недели». Доступ получают зарегистрированные участники.</p><a className="button light" href="#signup">Зарегистрироваться <Arrow /></a></div>
      </section>

      <section className="section trust">
        <div className="section-num">05 / ДОВЕРИЕ</div>
        <div>
          <h2>Методика, которой<br />можно доверять</h2>
          <p className="large-copy">В основе — российские и международные подходы к оценке ИИ-грамотности. Итоговый индекс складывается из нескольких независимых блоков.</p>
          <div className="trust-line"><b>ЦИФРИУМ</b><span>Организатор проекта</span><b>ИИ НЕДЕЛЯ</b><span>Федеральная программа</span></div>
        </div>
      </section>

      <section className="signup" id="signup">
        <div className="signup-copy"><span className="kicker">РЕГИСТРАЦИЯ ОТКРЫТА</span><h2>Запишитесь<br />на ИИ Чекап</h2><p>Приглашение, подарок партнёра и полезные материалы придут на вашу почту.</p></div>
        {sent ? (
          <div className="success"><span>✓</span><h3>Вы записаны</h3><p>Спасибо! Мы отправим приглашение ближе к началу ИИ Чекапа.</p></div>
        ) : (
          <form onSubmit={submit}>
            <label>Имя<input required name="name" placeholder="Как к вам обращаться" /></label>
            <label>Электронная почта<input required type="email" name="email" placeholder="name@example.ru" /></label>
            <label>Телефон<input required type="tel" name="phone" placeholder="+7 999 000-00-00" /></label>
            <fieldset><legend>Хочу пройти</legend><label className="check"><input type="checkbox" defaultChecked /> Персональный чекап</label><label className="check"><input type="checkbox" /> Корпоративный чекап</label></fieldset>
            <button className="button dark-button" type="submit">Записаться <Arrow /></button>
            <small>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small>
          </form>
        )}
      </section>

      <section className="section faq" id="faq">
        <div className="section-num">06 / FAQ</div>
        <div><h2>Остались вопросы?</h2><div className="faq-list">{faq.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">ИИ</span><span>Чекап</span></a><p>Ежегодная диагностика ИИ-грамотности</p><p>© 2026 Цифриум</p></footer>
    </main>
  );
}
