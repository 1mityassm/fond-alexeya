import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex items-center gap-4">
            <span>Официальный сайт</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:underline">Версия для слабовидящих</span>
            <span className="cursor-pointer font-bold">RU</span>
            <span className="cursor-pointer opacity-70">EN</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header-main">
        <div className="max-w-[1200px] mx-auto px-4 py-5 flex items-center gap-5">
          <div className="flex items-center gap-4">
            {/* Shield / Coat of arms placeholder */}
            <div className="w-[60px] h-[70px] flex items-center justify-center">
              <svg viewBox="0 0 60 70" width="60" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 2L4 14V32C4 50 30 66 30 66C30 66 56 50 56 32V14L30 2Z" fill="#2b5797" stroke="#1e3f6f" strokeWidth="2"/>
                <text x="30" y="38" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="serif">ФАС</text>
              </svg>
            </div>
            <div>
              <div className="text-[22px] font-bold text-[#1a1a1a] leading-tight">
                Фонд Алексея Соланова
              </div>
              <div className="text-[13px] text-[#666] mt-1">
                Управление и распределение средств фонда
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по сайту..."
                className="border border-[#d9d9d9] rounded px-3 py-2 text-[14px] w-[240px] focus:outline-none focus:border-[#2b5797]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-wrap">
          <a href="#">Фонд</a>
          <a href="#">Деятельность</a>
          <a href="#">Документы</a>
          <a href="#">Статистика</a>
          <a href="#">Отчётность</a>
          <a href="#">Контакты</a>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="max-w-[1200px] mx-auto px-4 w-full">
        <div className="breadcrumbs">
          <a href="#">Главная</a>
          <span>/</span>
          <a href="#">Деятельность</a>
          <span>/</span>
          <span className="text-[#333]">Фонд Алексея Соланова</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 w-full flex-1">
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 min-w-0">
            <h1 className="page-title">Фонд Алексея Соланова</h1>

            <p className="text-[15px] text-[#333] mb-6 leading-relaxed">
              Фонд Алексея Соланова представляет собой часть средств, подлежащих обособленному учёту и управлению
              в целях обеспечения софинансирования добровольных пенсионных накоплений граждан,
              а также обеспечения сбалансированности (покрытия дефицита) бюджета фонда.
            </p>

            {/* Statistics Block */}
            <div className="stat-block">
              <div className="label">Объём Фонда Алексея Соланова</div>
              <div className="flex items-baseline gap-2">
                <span className="value">13 639,25</span>
                <span className="unit">млрд ₽</span>
              </div>
              <div className="date">по состоянию на 1 февраля 2026 года</div>
            </div>

            {/* About the Fund - Accordion Section */}
            <h2 className="section-title">О Фонде</h2>

            <div className="mb-8">
              <Accordion title="Что такое Фонд Алексея Соланова и для чего он создан?">
                <p>
                  Фонд Алексея Соланова — это специализированный финансовый институт, созданный для
                  обеспечения долгосрочной финансовой стабильности и поддержки стратегических инициатив.
                </p>
                <p>
                  Фонд был учреждён в 2008 году на базе Стабилизационного фонда (действовавшего с 2004 года)
                  и с тех пор является одним из ключевых инструментов обеспечения финансовой устойчивости.
                </p>
                <p>
                  Основные цели Фонда:
                </p>
                <ul>
                  <li>Софинансирование добровольных пенсионных накоплений граждан</li>
                  <li>Обеспечение сбалансированности бюджета</li>
                  <li>Поддержка стратегических проектов развития</li>
                  <li>Формирование долгосрочных резервов</li>
                </ul>
              </Accordion>

              <Accordion title="Из чего формируются доходы Фонда?">
                <p>
                  Доходы Фонда Алексея Соланова формируются за счёт:
                </p>
                <ul>
                  <li>Налога на добычу полезных ископаемых (нефть, газ)</li>
                  <li>Вывозных таможенных пошлин на нефть и газ</li>
                  <li>Доходов от управления средствами Фонда</li>
                  <li>Иных поступлений, предусмотренных законодательством</li>
                </ul>
                <p>
                  Все дополнительные нефтегазовые доходы бюджета направляются на пополнение Фонда
                  в соответствии с установленным бюджетным правилом.
                </p>
              </Accordion>

              <Accordion title="Как осуществляется управление средствами Фонда?">
                <p>
                  Управление средствами Фонда осуществляется Правлением Фонда при координации
                  с Управляющим советом. Цели управления — обеспечение сохранности средств и
                  стабильного уровня доходности.
                </p>
                <p>
                  Управляющий совет определяет стратегию инвестирования, а Правление реализует
                  утверждённую инвестиционную политику.
                </p>
              </Accordion>

              <Accordion title="Во что могут размещаться средства Фонда?">
                <p>
                  Допустимые финансовые активы для размещения средств Фонда:
                </p>
                <ul>
                  <li>Иностранная валюта (доллар США, евро, фунт стерлингов, юань)</li>
                  <li>Монетарное золото в обезличенной форме</li>
                  <li>Долговые обязательства иностранных государств</li>
                  <li>Ценные бумаги международных финансовых организаций</li>
                  <li>Депозиты и остатки на счетах в банках и ЦБ</li>
                  <li>Депозиты и ценные бумаги государственной корпорации развития «ВЭБ.РФ»</li>
                  <li>Долговые обязательства и акции российских корпораций</li>
                  <li>Паи инвестиционных фондов</li>
                </ul>
              </Accordion>
            </div>

            {/* Нормативная база */}
            <h2 className="section-title">Нормативная база</h2>
            <div className="mb-8">
              <div className="doc-link">
                <span className="icon">&#128196;</span>
                <div>
                  <a href="#">Статьи 96.10–96.11 Бюджетного кодекса Российской Федерации</a>
                  <div className="date">Основные нормы о Фонде</div>
                </div>
              </div>
              <div className="doc-link">
                <span className="icon">&#128196;</span>
                <div>
                  <a href="#">Постановление Правительства РФ от 19.01.2008 № 18</a>
                  <div className="date">Порядок управления средствами Фонда</div>
                </div>
              </div>
              <div className="doc-link">
                <span className="icon">&#128196;</span>
                <div>
                  <a href="#">Постановление Правительства РФ от 19.01.2008 № 24</a>
                  <div className="date">Требования к финансовым активам для размещения средств Фонда</div>
                </div>
              </div>
              <div className="doc-link">
                <span className="icon">&#128196;</span>
                <div>
                  <a href="#">Приказ Фонда от 16.03.2008 № 42н</a>
                  <div className="date">Порядок ведения учёта и составления отчётности по операциям со средствами Фонда</div>
                </div>
              </div>
            </div>

            {/* Статистика и отчётность */}
            <h2 className="section-title">Статистика и отчётность</h2>
            <div className="mb-8">
              <p className="text-[14px] text-[#555] mb-4">
                Сведения о движении средств и результатах управления Фондом публикуются ежемесячно, ежеквартально и ежегодно.
              </p>

              <table className="data-table">
                <thead>
                  <tr>
                    <th>Период</th>
                    <th>Объём Фонда (млрд ₽)</th>
                    <th>Изменение</th>
                    <th>Дата публикации</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01.02.2026</td>
                    <td>13 639,25</td>
                    <td className="text-green-600">+2,4%</td>
                    <td>18.02.2026</td>
                  </tr>
                  <tr>
                    <td>01.01.2026</td>
                    <td>13 319,84</td>
                    <td className="text-green-600">+1,8%</td>
                    <td>15.01.2026</td>
                  </tr>
                  <tr>
                    <td>01.12.2025</td>
                    <td>13 083,72</td>
                    <td className="text-green-600">+0,9%</td>
                    <td>17.12.2025</td>
                  </tr>
                  <tr>
                    <td>01.11.2025</td>
                    <td>12 966,14</td>
                    <td className="text-red-600">-0,3%</td>
                    <td>18.11.2025</td>
                  </tr>
                  <tr>
                    <td>01.10.2025</td>
                    <td>13 005,02</td>
                    <td className="text-green-600">+1,1%</td>
                    <td>16.10.2025</td>
                  </tr>
                  <tr>
                    <td>01.09.2025</td>
                    <td>12 863,45</td>
                    <td className="text-green-600">+0,7%</td>
                    <td>17.09.2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Информационные сообщения */}
            <h2 className="section-title">Информационные сообщения о размещении средств</h2>
            <div className="mb-8">
              <div className="doc-link">
                <span className="icon">&#128197;</span>
                <div>
                  <a href="#">Информационное сообщение о размещении средств Фонда Алексея Соланова</a>
                  <div className="date">06.02.2026</div>
                </div>
              </div>
              <div className="doc-link">
                <span className="icon">&#128197;</span>
                <div>
                  <a href="#">Информационное сообщение о результатах размещения средств Фонда за январь 2026 года</a>
                  <div className="date">22.01.2026</div>
                </div>
              </div>
              <div className="doc-link">
                <span className="icon">&#128197;</span>
                <div>
                  <a href="#">Информационное сообщение о результатах размещения средств Фонда за декабрь 2025 года</a>
                  <div className="date">18.12.2025</div>
                </div>
              </div>
              <div className="doc-link">
                <span className="icon">&#128197;</span>
                <div>
                  <a href="#">Информационное сообщение о результатах размещения средств Фонда за ноябрь 2025 года</a>
                  <div className="date">20.11.2025</div>
                </div>
              </div>
              <div className="doc-link">
                <span className="icon">&#128197;</span>
                <div>
                  <a href="#">Информационное сообщение о результатах размещения средств Фонда за октябрь 2025 года</a>
                  <div className="date">17.10.2025</div>
                </div>
              </div>
            </div>

            {/* Структура средств */}
            <h2 className="section-title">Структура размещения средств Фонда</h2>
            <div className="mb-8">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Вид актива</th>
                    <th>Сумма (млрд ₽)</th>
                    <th>Доля (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Депозиты в ЦБ и банках</td>
                    <td>4 091,78</td>
                    <td>30,0%</td>
                  </tr>
                  <tr>
                    <td>Государственные ценные бумаги</td>
                    <td>3 409,81</td>
                    <td>25,0%</td>
                  </tr>
                  <tr>
                    <td>Корпоративные облигации</td>
                    <td>2 727,85</td>
                    <td>20,0%</td>
                  </tr>
                  <tr>
                    <td>Монетарное золото</td>
                    <td>1 363,93</td>
                    <td>10,0%</td>
                  </tr>
                  <tr>
                    <td>Акции российских эмитентов</td>
                    <td>1 363,93</td>
                    <td>10,0%</td>
                  </tr>
                  <tr>
                    <td>Средства в ВЭБ.РФ</td>
                    <td>681,96</td>
                    <td>5,0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] flex-shrink-0">
            <div className="sidebar-block">
              <h3>Объём Фонда</h3>
              <div className="text-[28px] font-bold text-[#2b5797]">13 639,25</div>
              <div className="text-[13px] text-[#888]">млрд ₽ на 01.02.2026</div>
            </div>

            <div className="sidebar-block">
              <h3>Разделы</h3>
              <a href="#" className="sidebar-link">О Фонде</a>
              <a href="#" className="sidebar-link">Нормативная база</a>
              <a href="#" className="sidebar-link">Статистика и отчётность</a>
              <a href="#" className="sidebar-link">Информационные сообщения</a>
              <a href="#" className="sidebar-link">Структура размещения</a>
            </div>

            <div className="sidebar-block">
              <h3>Последние документы</h3>
              <a href="#" className="sidebar-link">
                Данные об объёме Фонда (18.02.2026)
              </a>
              <a href="#" className="sidebar-link">
                Сведения о размещении средств (06.02.2026)
              </a>
              <a href="#" className="sidebar-link">
                Квартальный отчёт за IV кв. 2025 г.
              </a>
              <a href="#" className="sidebar-link">
                Годовой отчёт за 2024 год
              </a>
            </div>

            <div className="sidebar-block">
              <h3>Контакты</h3>
              <div className="text-[14px] text-[#555] leading-relaxed">
                <p className="mb-2"><strong>Адрес:</strong> 109097, г. Москва, ул. Ильинка, д. 9</p>
                <p className="mb-2"><strong>Телефон:</strong> +7 (495) 987-65-43</p>
                <p><strong>Email:</strong> info@fond-solanova.ru</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-white font-bold text-[16px] mb-3">Фонд Алексея Соланова</div>
              <p className="text-[13px] leading-relaxed">
                Управление и распределение средств фонда в целях обеспечения долгосрочной
                финансовой стабильности и поддержки стратегических инициатив.
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-[14px] mb-3">Навигация</div>
              <div className="flex flex-col gap-2">
                <a href="#">О Фонде</a>
                <a href="#">Деятельность</a>
                <a href="#">Документы</a>
                <a href="#">Статистика</a>
                <a href="#">Отчётность</a>
                <a href="#">Контакты</a>
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-[14px] mb-3">Контактная информация</div>
              <p className="text-[13px] leading-relaxed mb-2">
                109097, г. Москва, ул. Ильинка, д. 9
              </p>
              <p className="text-[13px]">
                Телефон: +7 (495) 987-65-43
              </p>
              <p className="text-[13px]">
                Email: info@fond-solanova.ru
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <span>&copy; 2026 Фонд Алексея Соланова. Все права защищены.</span>
            <span>Информация на сайте носит справочный характер</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
