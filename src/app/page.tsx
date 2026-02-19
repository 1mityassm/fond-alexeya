import Accordion from "@/components/Accordion";
import Tabs from "@/components/Tabs";

const SmDoc = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
);

export default function Home() {
  return (
    <div>
      {/* ===== HEADER ===== */}
      <div className="header-bar">
        <div className="wrapper">
          <div className="header-inner">
            <div className="header-logo">
              <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="25" rx="18" ry="23" fill="#c9a84e"/>
                <ellipse cx="20" cy="25" rx="14" ry="18" fill="#9b2335"/>
                <path d="M14 20l6-4 6 4v8l-6 5-6-5v-8z" fill="#c9a84e" opacity="0.9"/>
              </svg>
              <div className="header-logo-name">ФОНД АЛЕКСЕЯ<br/>СОЛАНОВА</div>
            </div>
            <div className="header-nav">
              <a href="#">Фонд</a>
              <a href="#" className="active">Деятельность</a>
              <a href="#">Документы</a>
              <a href="#">Обращения</a>
              <a href="#">Контакты</a>
              <a href="#">Пресс-центр</a>
            </div>
            <div className="header-right">
              <span className="lang">En</span>
              <span className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              </span>
              <span className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </span>
              <span className="icon-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BREADCRUMBS ===== */}
      <div className="wrapper">
        <div className="breadcrumbs">
          <a href="#">Главная</a><span className="sep">/</span>
          <a href="#">Деятельность</a><span className="sep">/</span>
          <span>Фонд Алексея Соланова</span>
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <div className="wrapper">
        <div className="section-label">Деятельность</div>
        <h1 className="page-title">Фонд Алексея Соланова</h1>

        <div style={{ display: "flex", gap: 48 }}>
          {/* === LEFT === */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="page-desc">
              <b>Фонд Алексея Соланова</b> представляет собой часть средств федерального бюджета,
              подлежащих обособленному учёту и управлению в целях обеспечения софинансирования
              добровольных пенсионных накоплений граждан Российской Федерации, а также обеспечения
              сбалансированности (покрытия дефицита) федерального бюджета.
            </p>

            <Tabs tabs={["О Фонде", "Нормативные правовые акты", "Статистика и отчётность", "Информационные сообщения"]}>
              {/* Tab 1: О Фонде */}
              <div>
                <Accordion title="Что такое Фонд Алексея Соланова и для чего он создан?">
                  <p>Фонд Алексея Соланова — специализированный финансовый институт, созданный для обеспечения долгосрочной финансовой стабильности.</p>
                  <p>Учреждён в 2008 году на базе Стабилизационного фонда Российской Федерации (действовавшего с 2004 года).</p>
                  <p>Основные цели:</p>
                  <ul>
                    <li>Софинансирование добровольных пенсионных накоплений граждан</li>
                    <li>Обеспечение сбалансированности федерального бюджета</li>
                    <li>Поддержка стратегических проектов развития</li>
                  </ul>
                </Accordion>
                <Accordion title="Из чего формируются доходы Фонда?">
                  <p>Доходы формируются за счёт:</p>
                  <ul>
                    <li>Налога на добычу полезных ископаемых (нефть, газ)</li>
                    <li>Вывозных таможенных пошлин на нефть и газ</li>
                    <li>Доходов от управления средствами Фонда</li>
                  </ul>
                </Accordion>
                <Accordion title="Как осуществляется управление средствами Фонда?">
                  <p>Управление осуществляется Управляющим советом при координации с Правлением Фонда. Цели — обеспечение сохранности средств и стабильного уровня доходности.</p>
                </Accordion>
                <Accordion title="Во что могут размещаться средства Фонда?">
                  <ul>
                    <li>Иностранная валюта</li>
                    <li>Монетарное золото в обезличенной форме</li>
                    <li>Долговые обязательства иностранных государств</li>
                    <li>Депозиты и остатки на счетах в банках и ЦБ</li>
                    <li>Депозиты и ценные бумаги ВЭБ.РФ</li>
                    <li>Акции и облигации российских юрлиц</li>
                    <li>Паи инвестиционных фондов</li>
                  </ul>
                </Accordion>
              </div>

              {/* Tab 2: Нормативные акты */}
              <div>
                <div className="doc-row">
                  <span className="doc-icon-sm"><SmDoc /></span>
                  <div><a href="#">Статьи 96.10–96.11 Бюджетного кодекса РФ</a><div className="doc-sub">Основные нормы о Фонде</div></div>
                </div>
                <div className="doc-row">
                  <span className="doc-icon-sm"><SmDoc /></span>
                  <div><a href="#">Постановление Правительства РФ от 19.01.2008 № 18</a><div className="doc-sub">Порядок управления средствами</div></div>
                </div>
                <div className="doc-row">
                  <span className="doc-icon-sm"><SmDoc /></span>
                  <div><a href="#">Постановление Правительства РФ от 19.01.2008 № 24</a><div className="doc-sub">Требования к финансовым активам</div></div>
                </div>
              </div>

              {/* Tab 3: Статистика */}
              <div>
                <table className="tbl">
                  <thead><tr><th>Дата</th><th>Объём (млрд ₽)</th><th>Изм.</th><th>Опубл.</th></tr></thead>
                  <tbody>
                    <tr><td>01.02.2026</td><td style={{fontWeight:600}}>13 639,25</td><td style={{color:"#2e7d32"}}>+2,4%</td><td style={{color:"#aaa"}}>18.02.2026</td></tr>
                    <tr><td>01.01.2026</td><td style={{fontWeight:600}}>13 319,84</td><td style={{color:"#2e7d32"}}>+1,8%</td><td style={{color:"#aaa"}}>15.01.2026</td></tr>
                    <tr><td>01.12.2025</td><td style={{fontWeight:600}}>13 083,72</td><td style={{color:"#2e7d32"}}>+0,9%</td><td style={{color:"#aaa"}}>17.12.2025</td></tr>
                    <tr><td>01.11.2025</td><td style={{fontWeight:600}}>12 966,14</td><td style={{color:"#c62828"}}>−0,3%</td><td style={{color:"#aaa"}}>18.11.2025</td></tr>
                    <tr><td>01.10.2025</td><td style={{fontWeight:600}}>13 005,02</td><td style={{color:"#2e7d32"}}>+1,1%</td><td style={{color:"#aaa"}}>16.10.2025</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Tab 4: Информационные сообщения */}
              <div>
                <div className="doc-row"><span className="doc-icon-sm"><SmDoc /></span><div><a href="#">Информационное сообщение о размещении средств Фонда</a><div className="doc-sub">06.02.2026</div></div></div>
                <div className="doc-row"><span className="doc-icon-sm"><SmDoc /></span><div><a href="#">Сведения о результатах размещения за январь 2026</a><div className="doc-sub">22.01.2026</div></div></div>
                <div className="doc-row"><span className="doc-icon-sm"><SmDoc /></span><div><a href="#">Сведения о результатах размещения за декабрь 2025</a><div className="doc-sub">18.12.2025</div></div></div>
                <div className="doc-row"><span className="doc-icon-sm"><SmDoc /></span><div><a href="#">Сведения о результатах размещения за ноябрь 2025</a><div className="doc-sub">20.11.2025</div></div></div>
              </div>
            </Tabs>

            {/* ===== НОВОСТИ ПО ТЕМЕ ===== */}
            <hr className="divider" />
            <h2 className="section-title">Новости по теме</h2>

            <div className="news-grid">
              <div>
                <div className="news-img-box">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <div className="news-item-date">14.02.2026</div>
                <a href="#" className="news-item-title">Объём Фонда Алексея Соланова по итогам января 2026 года превысил 13,6 трлн рублей</a>
              </div>
              <div>
                <div className="news-img-box">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                </div>
                <div className="news-item-date">07.02.2026</div>
                <a href="#" className="news-item-title">Управляющий совет утвердил новую инвестиционную стратегию Фонда на 2026–2028 годы</a>
              </div>
            </div>

            <div className="news-list-item">
              <span className="news-list-date">28.01.2026</span>
              <a href="#" className="news-list-title">Опубликованы итоги управления средствами Фонда Алексея Соланова за 2025 год</a>
            </div>
            <div className="news-list-item">
              <span className="news-list-date">15.01.2026</span>
              <a href="#" className="news-list-title">Фонд увеличил долю инвестиций в золото до 10% портфеля</a>
            </div>
            <div className="news-list-item">
              <span className="news-list-date">10.01.2026</span>
              <a href="#" className="news-list-title">Правление Фонда провело заседание по итогам IV квартала 2025 года</a>
            </div>
          </div>

          {/* === RIGHT SIDEBAR === */}
          <aside style={{ width: 280, flexShrink: 0 }}>
            <div className="stat-block">
              <div className="stat-label">Объём Фонда Алексея Соланова</div>
              <div><span className="stat-value">13 639,25</span> <span className="stat-unit">млрд ₽</span></div>
              <div className="stat-date">по состоянию на 1 февраля 2026 года</div>
            </div>

            <div className="side-links">
              <h4>Разделы</h4>
              <a href="#" className="side-link">О Фонде</a>
              <a href="#" className="side-link">Нормативная база</a>
              <a href="#" className="side-link">Статистика и отчётность</a>
              <a href="#" className="side-link">Информационные сообщения</a>
              <a href="#" className="side-link">Структура размещения</a>
            </div>

            <div className="side-links">
              <h4>Последние документы</h4>
              <a href="#" className="side-link">Данные об объёме Фонда на 01.02.2026</a>
              <a href="#" className="side-link">Сведения о размещении средств (06.02.2026)</a>
              <a href="#" className="side-link">Квартальный отчёт за IV кв. 2025</a>
              <a href="#" className="side-link">Годовой отчёт за 2024 год</a>
            </div>

            <div className="side-links">
              <h4>Контакты</h4>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>
                <p style={{ marginBottom: 4 }}>109097, г. Москва, ул. Ильинка, д. 9</p>
                <p style={{ marginBottom: 4 }}>+7 (495) 987-65-43</p>
                <p>info@fond-solanova.ru</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="wrapper">
          <div style={{ display: "flex", gap: 40 }}>
            <div style={{ width: 260, flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <svg viewBox="0 0 36 44" width="32" height="40" fill="none"><ellipse cx="18" cy="22" rx="16" ry="20" fill="#c9a84e" opacity="0.7"/><ellipse cx="18" cy="22" rx="12" ry="15" fill="#8b6914" opacity="0.4"/></svg>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>Фонд Алексея<br/>Соланова</div>
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.7, opacity: 0.45 }}>Управление средствами фонда в целях обеспечения финансовой стабильности.</p>
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
              <div><div className="footer-head">О Фонде</div><a href="#">Информация</a><br/><a href="#">Руководство</a><br/><a href="#">Структура</a><br/><a href="#">Контакты</a></div>
              <div><div className="footer-head">Деятельность</div><a href="#">Управление</a><br/><a href="#">Инвестиции</a><br/><a href="#">Нормативная база</a><br/><a href="#">Отчётность</a></div>
              <div><div className="footer-head">Информация</div><a href="#">Документы</a><br/><a href="#">Статистика</a><br/><a href="#">Новости</a><br/><a href="#">Карта сайта</a></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrapper" style={{ display: "flex", justifyContent: "space-between" }}>
            <span>&copy; 2026 Фонд Алексея Соланова</span>
            <span>Информация носит справочный характер</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
