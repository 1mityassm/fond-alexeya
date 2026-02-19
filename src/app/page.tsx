import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ===== TOP BAR ===== */}
      <div className="top-bar">
        <div className="wrapper flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>Официальный сайт</span>
            <a href="#">Карта сайта</a>
          </div>
          <div className="flex items-center gap-5">
            <a href="#">Версия для слабовидящих</a>
            <span className="flex items-center gap-2">
              <span className="font-bold text-[#000] cursor-pointer">RU</span>
              <span className="cursor-pointer">EN</span>
            </span>
          </div>
        </div>
      </div>

      {/* ===== HEADER ===== */}
      <div className="header-main">
        <div className="wrapper flex items-center gap-5">
          {/* Coat of arms */}
          <div className="flex-shrink-0">
            <svg viewBox="0 0 52 64" width="52" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 1L2 12v20c0 17 24 30 24 30s24-13 24-30V12L26 1z" fill="#c8a84e" stroke="#9e7e2e" strokeWidth="1.5"/>
              <path d="M26 6L7 15v15c0 13 19 24 19 24s19-11 19-24V15L26 6z" fill="#b71c1c"/>
              <path d="M20 22l6-4 6 4v8l-6 4-6-4v-8z" fill="#c8a84e" stroke="#9e7e2e" strokeWidth="0.5"/>
              <path d="M22 28h8M26 24v8" stroke="#c8a84e" strokeWidth="1"/>
            </svg>
          </div>
          <div>
            <div className="header-title">Фонд</div>
            <div className="header-name">Алексея Соланова</div>
          </div>
          {/* Search */}
          <div className="ml-auto flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по сайту"
                className="bg-[#f5f6f8] border border-[#e0e1e3] rounded-lg px-4 py-[9px] text-[14px] w-[260px] focus:outline-none focus:border-[#2a5298] transition-colors"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="main-nav">
        <div className="wrapper flex">
          <a href="#">Фонд</a>
          <a href="#" className="active">Деятельность</a>
          <a href="#">Документы</a>
          <a href="#">Статистика</a>
          <a href="#">Отчётность</a>
          <a href="#">Контакты</a>
        </div>
      </nav>

      {/* ===== BREADCRUMBS ===== */}
      <div className="wrapper">
        <div className="breadcrumbs">
          <a href="#">Главная</a>
          <span className="sep">/</span>
          <a href="#">Деятельность</a>
          <span className="sep">/</span>
          <span className="text-[#333]">Фонд Алексея Соланова</span>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="wrapper" style={{ flex: 1, paddingBottom: 32 }}>
        <h1 className="page-title">Фонд Алексея Соланова</h1>

        <div style={{ display: "flex", gap: 20, flexDirection: "row" }}>
          {/* ===== LEFT COLUMN ===== */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Description card */}
            <div className="content-card">
              <p className="page-description" style={{ marginBottom: 0 }}>
                Фонд Алексея Соланова представляет собой часть средств федерального бюджета, подлежащих
                обособленному учёту и управлению в целях обеспечения софинансирования добровольных
                пенсионных накоплений граждан Российской Федерации, а также обеспечения
                сбалансированности (покрытия дефицита) федерального бюджета.
              </p>
            </div>

            {/* О Фонде */}
            <div className="content-card">
              <h2 className="text-[20px] font-bold text-[#000] mb-4" style={{ marginTop: 0 }}>О Фонде</h2>

              <Accordion title="Что такое Фонд Алексея Соланова и для чего он создан?">
                <p>
                  Фонд Алексея Соланова — это специализированный финансовый институт, созданный для
                  обеспечения долгосрочной финансовой стабильности и поддержки стратегических инициатив.
                </p>
                <p>
                  Фонд был учреждён в 2008 году на базе Стабилизационного фонда Российской Федерации
                  (действовавшего с 2004 года) и с тех пор является одним из ключевых инструментов
                  обеспечения финансовой устойчивости страны.
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
                <p>Доходы Фонда Алексея Соланова формируются за счёт:</p>
                <ul>
                  <li>Налога на добычу полезных ископаемых (нефть, газ)</li>
                  <li>Вывозных таможенных пошлин на нефть и газ</li>
                  <li>Доходов от управления средствами Фонда</li>
                  <li>Иных поступлений, предусмотренных законодательством</li>
                </ul>
                <p>
                  Все дополнительные нефтегазовые доходы федерального бюджета направляются
                  на пополнение Фонда в соответствии с установленным бюджетным правилом.
                </p>
              </Accordion>

              <Accordion title="Как осуществляется управление средствами Фонда?">
                <p>
                  Управление средствами Фонда осуществляется Управляющим советом
                  при координации с Правлением Фонда. Цели управления — обеспечение
                  сохранности средств и стабильного уровня доходности.
                </p>
                <p>
                  Управляющий совет определяет стратегию инвестирования, а Правление
                  реализует утверждённую инвестиционную политику в соответствии
                  с требованиями к финансовым активам.
                </p>
              </Accordion>

              <Accordion title="Во что могут размещаться средства Фонда?">
                <p>Допустимые финансовые активы для размещения средств Фонда:</p>
                <ul>
                  <li>Иностранная валюта (доллар США, евро, фунт стерлингов, китайский юань)</li>
                  <li>Монетарное золото в обезличенной форме</li>
                  <li>Долговые обязательства иностранных государств</li>
                  <li>Долговые обязательства международных финансовых организаций</li>
                  <li>Депозиты и остатки на счетах в Центральном банке и коммерческих банках</li>
                  <li>Депозиты и ценные бумаги государственной корпорации развития «ВЭБ.РФ»</li>
                  <li>Долговые обязательства и акции российских юридических лиц</li>
                  <li>Паи (акции, доли) инвестиционных фондов</li>
                </ul>
              </Accordion>
            </div>

            {/* Нормативная база */}
            <div className="content-card">
              <h2 className="text-[20px] font-bold text-[#000] mb-4" style={{ marginTop: 0 }}>Нормативная база</h2>

              <div className="doc-item">
                <div className="doc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </div>
                <div>
                  <a href="#" className="doc-title">Статьи 96.10–96.11 Бюджетного кодекса Российской Федерации</a>
                  <div className="doc-meta">Основные нормы о формировании и использовании средств Фонда</div>
                </div>
              </div>

              <div className="doc-item">
                <div className="doc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </div>
                <div>
                  <a href="#" className="doc-title">Постановление Правительства РФ от 19.01.2008 № 18</a>
                  <div className="doc-meta">Порядок управления средствами Фонда</div>
                </div>
              </div>

              <div className="doc-item">
                <div className="doc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </div>
                <div>
                  <a href="#" className="doc-title">Постановление Правительства РФ от 19.01.2008 № 24</a>
                  <div className="doc-meta">Требования к финансовым активам для размещения средств Фонда</div>
                </div>
              </div>

              <div className="doc-item">
                <div className="doc-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </div>
                <div>
                  <a href="#" className="doc-title">Приказ Фонда от 16.03.2008 № 42н</a>
                  <div className="doc-meta">Порядок ведения учёта и составления отчётности по операциям со средствами Фонда</div>
                </div>
              </div>
            </div>

            {/* Статистика и отчётность */}
            <div className="content-card">
              <h2 className="text-[20px] font-bold text-[#000] mb-2" style={{ marginTop: 0 }}>Статистика и отчётность</h2>
              <p className="text-[14px] text-[#666] mb-5">
                Сведения о движении средств и результатах управления Фондом публикуются ежемесячно, ежеквартально и ежегодно.
              </p>

              <table className="data-table">
                <thead>
                  <tr>
                    <th>Дата</th>
                    <th>Объём (млрд ₽)</th>
                    <th>Изменение</th>
                    <th>Опубликовано</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01.02.2026</td>
                    <td className="font-semibold">13 639,25</td>
                    <td className="text-[#2e7d32]">+2,4%</td>
                    <td className="text-[#999]">18.02.2026</td>
                  </tr>
                  <tr>
                    <td>01.01.2026</td>
                    <td className="font-semibold">13 319,84</td>
                    <td className="text-[#2e7d32]">+1,8%</td>
                    <td className="text-[#999]">15.01.2026</td>
                  </tr>
                  <tr>
                    <td>01.12.2025</td>
                    <td className="font-semibold">13 083,72</td>
                    <td className="text-[#2e7d32]">+0,9%</td>
                    <td className="text-[#999]">17.12.2025</td>
                  </tr>
                  <tr>
                    <td>01.11.2025</td>
                    <td className="font-semibold">12 966,14</td>
                    <td className="text-[#c62828]">−0,3%</td>
                    <td className="text-[#999]">18.11.2025</td>
                  </tr>
                  <tr>
                    <td>01.10.2025</td>
                    <td className="font-semibold">13 005,02</td>
                    <td className="text-[#2e7d32]">+1,1%</td>
                    <td className="text-[#999]">16.10.2025</td>
                  </tr>
                  <tr>
                    <td>01.09.2025</td>
                    <td className="font-semibold">12 863,45</td>
                    <td className="text-[#2e7d32]">+0,7%</td>
                    <td className="text-[#999]">17.09.2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Информационные сообщения */}
            <div className="content-card">
              <h2 className="text-[20px] font-bold text-[#000] mb-5" style={{ marginTop: 0 }}>Информационные сообщения</h2>

              <div className="info-grid">
                <div className="info-card">
                  <div className="info-date">06.02.2026</div>
                  <a href="#" className="info-title">Информационное сообщение о размещении средств Фонда Алексея Соланова</a>
                </div>
                <div className="info-card">
                  <div className="info-date">22.01.2026</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств Фонда за январь 2026 года</a>
                </div>
                <div className="info-card">
                  <div className="info-date">18.12.2025</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств Фонда за декабрь 2025 года</a>
                </div>
                <div className="info-card">
                  <div className="info-date">20.11.2025</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств Фонда за ноябрь 2025 года</a>
                </div>
                <div className="info-card">
                  <div className="info-date">17.10.2025</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств Фонда за октябрь 2025 года</a>
                </div>
                <div className="info-card">
                  <div className="info-date">15.09.2025</div>
                  <a href="#" className="info-title">Сведения о результатах размещения средств Фонда за сентябрь 2025 года</a>
                </div>
              </div>
            </div>

            {/* Структура размещения */}
            <div className="content-card">
              <h2 className="text-[20px] font-bold text-[#000] mb-2" style={{ marginTop: 0 }}>Структура размещения средств Фонда</h2>
              <p className="text-[14px] text-[#666] mb-5">По состоянию на 1 февраля 2026 года</p>

              <table className="data-table">
                <thead>
                  <tr>
                    <th>Вид актива</th>
                    <th>Сумма (млрд ₽)</th>
                    <th>Доля</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Депозиты в ЦБ и коммерческих банках</td>
                    <td className="font-semibold">4 091,78</td>
                    <td>30,0%</td>
                  </tr>
                  <tr>
                    <td>Государственные ценные бумаги</td>
                    <td className="font-semibold">3 409,81</td>
                    <td>25,0%</td>
                  </tr>
                  <tr>
                    <td>Корпоративные облигации</td>
                    <td className="font-semibold">2 727,85</td>
                    <td>20,0%</td>
                  </tr>
                  <tr>
                    <td>Монетарное золото</td>
                    <td className="font-semibold">1 363,93</td>
                    <td>10,0%</td>
                  </tr>
                  <tr>
                    <td>Акции российских эмитентов</td>
                    <td className="font-semibold">1 363,93</td>
                    <td>10,0%</td>
                  </tr>
                  <tr>
                    <td>Средства в ВЭБ.РФ</td>
                    <td className="font-semibold">681,96</td>
                    <td>5,0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <aside style={{ width: 340, flexShrink: 0 }}>
            {/* Stat card */}
            <div className="stat-card">
              <div className="stat-label">Объём Фонда Алексея Соланова</div>
              <div className="stat-value">13 639,25</div>
              <div className="stat-unit">млрд ₽</div>
              <div className="stat-date">по состоянию на 1 февраля 2026 года</div>
            </div>

            {/* Navigation */}
            <div className="sidebar-section">
              <h3>Разделы</h3>
              <a href="#" className="sidebar-link">О Фонде</a>
              <a href="#" className="sidebar-link">Нормативная база</a>
              <a href="#" className="sidebar-link">Статистика и отчётность</a>
              <a href="#" className="sidebar-link">Информационные сообщения</a>
              <a href="#" className="sidebar-link">Структура размещения</a>
            </div>

            {/* Recent documents */}
            <div className="sidebar-section">
              <h3>Последние документы</h3>
              <a href="#" className="sidebar-link">Данные об объёме Фонда на 01.02.2026</a>
              <a href="#" className="sidebar-link">Сведения о размещении средств (06.02.2026)</a>
              <a href="#" className="sidebar-link">Квартальный отчёт за IV кв. 2025 г.</a>
              <a href="#" className="sidebar-link">Годовой отчёт за 2024 год</a>
            </div>

            {/* Contacts */}
            <div className="sidebar-section">
              <h3>Контакты</h3>
              <div className="text-[14px] text-[#555] leading-[1.7]">
                <p className="mb-2">109097, г. Москва,<br/>ул. Ильинка, д. 9</p>
                <p className="mb-2">Тел.: +7 (495) 987-65-43</p>
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
            {/* Logo & description */}
            <div style={{ width: 320, flexShrink: 0 }}>
              <div className="flex items-center gap-4 mb-5">
                <svg viewBox="0 0 44 54" width="44" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 1L2 10v17c0 14 20 25 20 25s20-11 20-25V10L22 1z" fill="#c8a84e" stroke="#9e7e2e" strokeWidth="1"/>
                  <path d="M22 5L6 13v13c0 11 16 20 16 20s16-9 16-20V13L22 5z" fill="#b71c1c"/>
                  <path d="M17 19l5-3 5 3v7l-5 3-5-3v-7z" fill="#c8a84e"/>
                </svg>
                <div>
                  <div className="text-white font-bold text-[18px] leading-tight">Фонд</div>
                  <div className="text-white font-bold text-[18px] leading-tight">Алексея Соланова</div>
                </div>
              </div>
              <p className="text-[13px] leading-[1.7] opacity-70">
                Управление средствами фонда в целях обеспечения долгосрочной финансовой
                стабильности и поддержки стратегических инициатив Российской Федерации.
              </p>
            </div>

            {/* Links columns */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
              <div>
                <div className="footer-heading">О Фонде</div>
                <div className="flex flex-col">
                  <a href="#">Общая информация</a>
                  <a href="#">Руководство</a>
                  <a href="#">Структура</a>
                  <a href="#">Контакты</a>
                </div>
              </div>
              <div>
                <div className="footer-heading">Деятельность</div>
                <div className="flex flex-col">
                  <a href="#">Управление средствами</a>
                  <a href="#">Инвестиционная политика</a>
                  <a href="#">Нормативная база</a>
                  <a href="#">Отчётность</a>
                </div>
              </div>
              <div>
                <div className="footer-heading">Информация</div>
                <div className="flex flex-col">
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
