import Accordion from "@/components/Accordion";

const DocIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
);

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ===== UTILITY BAR ===== */}
      <div className="utility-bar">
        <div className="wrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span>Официальный сайт</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a href="#">Версия для слабовидящих</a>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontWeight: 700, color: "#333", cursor: "pointer" }}>RU</span>
              <span style={{ cursor: "pointer", color: "#aaa" }}>EN</span>
            </span>
          </div>
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <div className="site-header">
        <div className="wrapper" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Russian coat of arms SVG */}
          <div style={{ flexShrink: 0 }}>
            <svg viewBox="0 0 60 72" width="56" height="68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="30" cy="36" rx="28" ry="34" fill="#c9a84e"/>
              <ellipse cx="30" cy="36" rx="22" ry="27" fill="#b71c1c"/>
              {/* Double-headed eagle simplified */}
              <path d="M22 24c-3-1-6 0-7 3s0 7 3 8l4-2v-6l-3-1z" fill="#c9a84e"/>
              <path d="M38 24c3-1 6 0 7 3s0 7-3 8l-4-2v-6l3-1z" fill="#c9a84e"/>
              <path d="M26 30h8v12l-4 4-4-4V30z" fill="#c9a84e"/>
              <circle cx="30" cy="27" r="4" fill="#c9a84e"/>
              <path d="M28 25h4l1-3h-6l1 3z" fill="#c9a84e"/>
              <rect x="28" y="33" width="4" height="6" rx="1" fill="#b71c1c"/>
            </svg>
          </div>
          <div>
            <div className="header-logo-text">Фонд</div>
            <div className="header-org-name">Алексея Соланова</div>
          </div>
          {/* Right side: search */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Поиск по сайту"
                style={{
                  background: "#f5f6f8",
                  border: "1px solid #e0e1e3",
                  borderRadius: 8,
                  padding: "8px 36px 8px 14px",
                  fontSize: 13,
                  width: 220,
                  outline: "none",
                }}
              />
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "#aaa" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              </span>
            </div>
            {/* Hamburger icon */}
            <div style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", borderRadius: 8, background: "#f5f6f8" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="main-nav">
        <div className="wrapper" style={{ display: "flex", alignItems: "center" }}>
          <a href="#">Фонд</a>
          <a href="#" className="active">Деятельность</a>
          <a href="#">Документы</a>
          <a href="#">Обращения</a>
          <a href="#">Контакты</a>
          <a href="#">Пресс-центр</a>
        </div>
      </nav>

      {/* ===== BREADCRUMBS ===== */}
      <div className="wrapper">
        <div className="breadcrumbs">
          <a href="#">Главная</a>
          <span className="sep">/</span>
          <a href="#">Деятельность</a>
          <span className="sep">/</span>
          <span style={{ color: "rgba(255,255,255,0.55)" }}>Фонд Алексея Соланова</span>
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <div className="wrapper" style={{ flex: 1, paddingBottom: 0 }}>
        <h1 className="page-title">Фонд Алексея Соланова</h1>

        <div style={{ display: "flex", gap: 16 }}>
          {/* ===== LEFT ===== */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Description */}
            <div className="content-card">
              <p className="page-description">
                Фонд Алексея Соланова представляет собой часть средств федерального бюджета, подлежащих
                обособленному учёту и управлению в целях обеспечения софинансирования добровольных
                пенсионных накоплений граждан Российской Федерации, а также обеспечения
                сбалансированности (покрытия дефицита) федерального бюджета.
              </p>
            </div>

            {/* О Фонде */}
            <div className="content-card">
              <h2 className="card-title">О Фонде</h2>
              <Accordion title="Что такое Фонд Алексея Соланова и для чего он создан?">
                <p>
                  Фонд Алексея Соланова — это специализированный финансовый институт, созданный для
                  обеспечения долгосрочной финансовой стабильности и поддержки стратегических инициатив.
                </p>
                <p>
                  Фонд был учреждён в 2008 году на базе Стабилизационного фонда Российской Федерации
                  (действовавшего с 2004 года).
                </p>
                <p>Основные цели Фонда:</p>
                <ul>
                  <li>Софинансирование добровольных пенсионных накоплений граждан</li>
                  <li>Обеспечение сбалансированности федерального бюджета</li>
                  <li>Поддержка стратегических проектов развития</li>
                  <li>Формирование долгосрочных финансовых резервов</li>
                </ul>
              </Accordion>
              <Accordion title="Из чего формируются доходы Фонда?">
                <p>Доходы Фонда формируются за счёт:</p>
                <ul>
                  <li>Налога на добычу полезных ископаемых (нефть, газ)</li>
                  <li>Вывозных таможенных пошлин на нефть и газ</li>
                  <li>Доходов от управления средствами Фонда</li>
                </ul>
              </Accordion>
              <Accordion title="Как осуществляется управление средствами Фонда?">
                <p>
                  Управление средствами Фонда осуществляется Управляющим советом при координации
                  с Правлением Фонда. Цели управления — обеспечение сохранности средств и
                  стабильного уровня доходности.
                </p>
              </Accordion>
              <Accordion title="Во что могут размещаться средства Фонда?">
                <p>Допустимые финансовые активы для размещения средств Фонда:</p>
                <ul>
                  <li>Иностранная валюта</li>
                  <li>Монетарное золото в обезличенной форме</li>
                  <li>Долговые обязательства иностранных государств</li>
                  <li>Депозиты и остатки на счетах в банках и ЦБ</li>
                  <li>Депозиты и ценные бумаги ВЭБ.РФ</li>
                  <li>Долговые обязательства и акции российских корпораций</li>
                  <li>Паи инвестиционных фондов</li>
                </ul>
              </Accordion>
            </div>

            {/* Нормативная база */}
            <div className="content-card">
              <h2 className="card-title">Нормативная база</h2>
              <div className="doc-item">
                <div className="doc-icon"><DocIcon /></div>
                <div>
                  <a href="#" className="doc-title">Статьи 96.10–96.11 Бюджетного кодекса Российской Федерации</a>
                  <div className="doc-meta">Основные нормы о формировании и использовании средств Фонда</div>
                </div>
              </div>
              <div className="doc-item">
                <div className="doc-icon"><DocIcon /></div>
                <div>
                  <a href="#" className="doc-title">Постановление Правительства РФ от 19.01.2008 № 18</a>
                  <div className="doc-meta">Порядок управления средствами Фонда</div>
                </div>
              </div>
              <div className="doc-item">
                <div className="doc-icon"><DocIcon /></div>
                <div>
                  <a href="#" className="doc-title">Постановление Правительства РФ от 19.01.2008 № 24</a>
                  <div className="doc-meta">Требования к финансовым активам</div>
                </div>
              </div>
            </div>

            {/* Статистика */}
            <div className="content-card">
              <h2 className="card-title">Статистика и отчётность</h2>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>Сведения о движении средств и результатах управления Фондом</p>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Дата</th>
                    <th>Объём (млрд ₽)</th>
                    <th>Изм.</th>
                    <th>Опубликовано</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>01.02.2026</td><td style={{ fontWeight: 600 }}>13 639,25</td><td style={{ color: "#2e7d32" }}>+2,4%</td><td style={{ color: "#999" }}>18.02.2026</td></tr>
                  <tr><td>01.01.2026</td><td style={{ fontWeight: 600 }}>13 319,84</td><td style={{ color: "#2e7d32" }}>+1,8%</td><td style={{ color: "#999" }}>15.01.2026</td></tr>
                  <tr><td>01.12.2025</td><td style={{ fontWeight: 600 }}>13 083,72</td><td style={{ color: "#2e7d32" }}>+0,9%</td><td style={{ color: "#999" }}>17.12.2025</td></tr>
                  <tr><td>01.11.2025</td><td style={{ fontWeight: 600 }}>12 966,14</td><td style={{ color: "#c62828" }}>−0,3%</td><td style={{ color: "#999" }}>18.11.2025</td></tr>
                  <tr><td>01.10.2025</td><td style={{ fontWeight: 600 }}>13 005,02</td><td style={{ color: "#2e7d32" }}>+1,1%</td><td style={{ color: "#999" }}>16.10.2025</td></tr>
                </tbody>
              </table>
            </div>

            {/* Информационные сообщения */}
            <div className="content-card">
              <h2 className="card-title">Информационные сообщения</h2>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-date">06.02.2026</div>
                  <a href="#" className="info-title">Информационное сообщение о размещении средств Фонда</a>
                </div>
                <div className="info-card">
                  <div className="info-date">22.01.2026</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств за январь 2026</a>
                </div>
                <div className="info-card">
                  <div className="info-date">18.12.2025</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств за декабрь 2025</a>
                </div>
                <div className="info-card">
                  <div className="info-date">20.11.2025</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств за ноябрь 2025</a>
                </div>
              </div>
            </div>

            {/* ===== НОВОСТИ ПО ТЕМЕ ===== */}
            <div className="content-card">
              <h2 className="card-title">Новости по теме</h2>
              {/* Two image cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div className="news-card">
                  <div className="news-card-img">
                    <div className="placeholder-img">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#b0b8c4" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                    </div>
                  </div>
                  <div className="news-date">14.02.2026</div>
                  <a href="#" className="news-title">Объём Фонда Алексея Соланова по итогам января 2026 года превысил 13,6 трлн рублей</a>
                </div>
                <div className="news-card">
                  <div className="news-card-img">
                    <div className="placeholder-img">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#b0b8c4" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                    </div>
                  </div>
                  <div className="news-date">07.02.2026</div>
                  <a href="#" className="news-title">Управляющий совет утвердил новую инвестиционную стратегию Фонда на 2026–2028 годы</a>
                </div>
              </div>
              {/* Text news items */}
              <div className="news-text-item">
                <span className="news-text-date">28.01.2026</span>
                <a href="#" className="news-text-title">Опубликованы итоги управления средствами Фонда Алексея Соланова за 2025 год</a>
              </div>
              <div className="news-text-item">
                <span className="news-text-date">15.01.2026</span>
                <a href="#" className="news-text-title">Фонд увеличил долю инвестиций в золото до 10% портфеля</a>
              </div>
              <div className="news-text-item">
                <span className="news-text-date">10.01.2026</span>
                <a href="#" className="news-text-title">Правление Фонда провело заседание по итогам четвёртого квартала 2025 года</a>
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <aside style={{ width: 320, flexShrink: 0 }}>
            <div className="stat-card">
              <div className="stat-label">Объём Фонда Алексея Соланова</div>
              <div>
                <span className="stat-value">13 639,25</span>
                <span className="stat-unit">млрд ₽</span>
              </div>
              <div className="stat-date">по состоянию на 1 февраля 2026 года</div>
            </div>

            <div className="sidebar-section">
              <h3>Разделы</h3>
              <a href="#" className="sidebar-link">О Фонде</a>
              <a href="#" className="sidebar-link">Нормативная база</a>
              <a href="#" className="sidebar-link">Статистика и отчётность</a>
              <a href="#" className="sidebar-link">Информационные сообщения</a>
              <a href="#" className="sidebar-link">Структура размещения</a>
            </div>

            <div className="sidebar-section">
              <h3>Последние документы</h3>
              <a href="#" className="sidebar-link">Данные об объёме Фонда на 01.02.2026</a>
              <a href="#" className="sidebar-link">Сведения о размещении средств (06.02.2026)</a>
              <a href="#" className="sidebar-link">Квартальный отчёт за IV кв. 2025</a>
              <a href="#" className="sidebar-link">Годовой отчёт за 2024 год</a>
            </div>

            <div className="sidebar-section">
              <h3>Контакты</h3>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>
                <p style={{ marginBottom: 6 }}>109097, г. Москва,<br/>ул. Ильинка, д. 9</p>
                <p style={{ marginBottom: 6 }}>+7 (495) 987-65-43</p>
                <p>info@fond-solanova.ru</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="wrapper">
          <div style={{ display: "flex", gap: 48 }}>
            <div style={{ width: 280, flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <svg viewBox="0 0 40 48" width="36" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="20" cy="24" rx="18" ry="22" fill="#c9a84e" opacity="0.8"/>
                  <ellipse cx="20" cy="24" rx="14" ry="17" fill="#8b6914" opacity="0.5"/>
                </svg>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>Фонд</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>Алексея Соланова</div>
                </div>
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.7, opacity: 0.5 }}>
                Управление средствами фонда в целях обеспечения долгосрочной финансовой
                стабильности Российской Федерации.
              </p>
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
              <div>
                <div className="footer-heading">О Фонде</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a href="#">Общая информация</a>
                  <a href="#">Руководство</a>
                  <a href="#">Структура</a>
                  <a href="#">Контакты</a>
                </div>
              </div>
              <div>
                <div className="footer-heading">Деятельность</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a href="#">Управление средствами</a>
                  <a href="#">Инвестиционная политика</a>
                  <a href="#">Нормативная база</a>
                  <a href="#">Отчётность</a>
                </div>
              </div>
              <div>
                <div className="footer-heading">Информация</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a href="#">Документы</a>
                  <a href="#">Статистика</a>
                  <a href="#">Новости</a>
                  <a href="#">Карта сайта</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>&copy; 2026 Фонд Алексея Соланова. Все права защищены.</span>
            <span>Информация на сайте носит справочный характер</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
