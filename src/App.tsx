import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight, ArrowUp, ExternalLink, MapPin, Menu, X } from 'lucide-react'
import campus from './assets/campus.jpg'
import coworking from './assets/coworking.jpg'
import library from './assets/library.jpg'
import logo from './assets/logo.png'
import mainBuilding from './assets/main-building.jpg'
import mark from './assets/mark.png'

const official = 'https://tashenev.edu.kz'
const base = import.meta.env.BASE_URL

const sections = [
  { id: 'about', label: 'Об университете' },
  { id: 'education', label: 'Обучение' },
  { id: 'students', label: 'Студентам' },
  { id: 'contacts', label: 'Контакты' },
]

const directions = [
  { faculty: 1, title: 'Педагогические науки', subjects: 'Дошкольное и начальное образование, педагогика и психология' },
  { faculty: 8, title: 'Искусственный интеллект и инновации', subjects: 'IT и цифровые технологии' },
  { faculty: 4, title: 'Экономика и право', subjects: 'Экономика, менеджмент и право' },
  { faculty: 3, title: 'Мировые языки', subjects: 'Мировые языки, русский и узбекский языки' },
  { faculty: 2, title: 'Искусство и гуманитарное образование', subjects: 'Дизайн и мода, гуманитарные науки, художественный труд' },
  { faculty: 10, title: 'Естественные науки', subjects: 'Математика, физика, химия и биология' },
  { faculty: 9, title: 'Казахская филология и литература', subjects: 'Казахский язык, литература и абаеведение' },
  { faculty: 5, title: 'Физическая культура и спорт', subjects: 'Физическая культура и методика её преподавания' },
]

const resources = [
  { title: 'Platonus', description: 'Расписание и успеваемость', url: 'https://platonus.tashenev.kz/v7/' },
  { title: 'Электронная библиотека', description: 'Каталог и учебные материалы', url: 'https://library.tashenev.edu.kz/' },
  { title: 'Путеводитель студента', description: 'Учебный процесс и правила · PDF на казахском', url: official + '/docs/Academ/anyktama.pdf' },
]

const studentSupport = [
  { title: 'Руководство для первокурсника', description: 'Контакты подразделений и организация учебного процесса · PDF на русском', url: official + '/docs/Academ/putevod.pdf' },
  { title: 'Центр регистрации и поддержки обучающихся', description: 'Учебные записи, регистрация на дисциплины и академические вопросы', url: official + '/ru/oficce-registration' },
]

const mapUrl = official + '/ru/building-map'
const universityName = 'Университет имени Жумабека Ахметулы Ташенева'
const kazakhName = 'Жұмабек Ахметұлы Тәшенев атындағы университет'

function Header({ page }: { page?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <header id="top" tabIndex={-1} className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="shell header-inner">
        <a className="brand" href={base} lang="en" aria-current={page ? undefined : 'page'}>
          <img src={mark} alt="" width="34" height="43" />
          <span className="brand-name">Tashenev<span>University</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          Меню
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Разделы сайта" data-open={menuOpen}>
          <div className="site-nav-links">
            {sections.map(({ id, label }) => (
              <a key={id} href={base + id + '/'} aria-current={page === id ? 'page' : undefined}>{label}</a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

function ResourceLinks({ items }: { items: typeof resources }) {
  return (
    <ul className="resource-list" role="list">
      {items.map(({ title, description, url }) => (
        <li key={title}>
          <a href={url} className="resource">
            <span className="resource-copy"><strong>{title}</strong><span>{description}</span></span>
            <ExternalLink className="resource-external" size={17} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}

function LibraryPhoto() {
  return (
    <figure className="student-photo">
      <img src={library} alt="Читальный зал библиотеки университета" width="1280" height="853" loading="lazy" />
      <figcaption>Библиотека университета</figcaption>
    </figure>
  )
}

function ContactDetails() {
  return (
    <address>
      <dl className="contact-grid">
        <div>
          <dt>Главный корпус</dt>
          <dd>Шымкент, проспект Кунаева, 21</dd>
          <dd><a className="text-link" href={mapUrl}>Карта корпусов <ExternalLink size={15} aria-hidden="true" /></a></dd>
        </div>
        <div>
          <dt>Электронная почта</dt>
          <dd><a href="mailto:info@tashenev.edu.kz">info@tashenev.edu.kz</a></dd>
        </div>
        <div>
          <dt>Телефон</dt>
          <dd><a href="tel:+77253461463">+7 (72534) 6-14-63</a></dd>
        </div>
      </dl>
    </address>
  )
}

function Home() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-heading">
          <h1 id="hero-title" lang="en">Tashenev <span>University</span></h1>
          <div className="hero-intro">
            <p>Бакалавриат и магистратура в Шымкенте</p>
            <a className="button-primary" href={base + 'education/'}>Направления обучения <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={campus} alt="Фасад университета с красной эмблемой и флагом Казахстана" width="1280" height="853" fetchPriority="high" />
          <figcaption>Кампус в Шымкенте</figcaption>
        </figure>
      </section>

      <section id="about" tabIndex={-1} className="about shell section-space" aria-labelledby="about-title" data-reveal>
        <h2 className="section-label" id="about-title">Об университете</h2>
        <div>
          <p className="about-name">{universityName}</p>
          <p className="about-kazakh" lang="kk">{kazakhName}</p>
          <p className="about-history">Университет основан в 1998 году в Жетысае. В 2022 году он переехал в Шымкент и получил имя Жумабека Ташенева.</p>
          <a className="text-link home-detail" href={base + 'about/'}>История университета <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section id="education" tabIndex={-1} className="education section-space" aria-labelledby="education-title">
        <div className="shell education-inner" data-reveal>
          <div className="education-intro">
            <h2 id="education-title">Направления обучения</h2>
            <a className="text-link" href={base + 'education/'}>Все направления <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <ul className="directions grid grid-cols-1 sm:grid-cols-2" role="list">
            {directions.slice(0, 4).map(({ title, subjects }) => (
              <li className="direction" key={title}>
                <h3>{title}</h3>
                <p>{subjects}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="students" tabIndex={-1} className="section-space students shell" aria-labelledby="students-title">
        <div className="student-panel" data-reveal>
          <div className="student-content">
            <h2 id="students-title">Студентам</h2>
            <ResourceLinks items={resources} />
            <a className="text-link home-detail" href={base + 'students/'}>Все ресурсы для студентов <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <LibraryPhoto />
        </div>
      </section>

      <section id="contacts" tabIndex={-1} className="contact-section shell" aria-labelledby="contacts-title" data-reveal>
        <div className="home-section-heading">
          <h2 id="contacts-title">Контакты</h2>
          <a className="text-link" href={base + 'contacts/'}>Адреса корпусов <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <ContactDetails />
      </section>
    </>
  )
}

function PageHeading({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="page-heading shell">
      <a className="home-back" href={base}><ArrowLeft size={16} aria-hidden="true" /> Главная</a>
      <div className="page-heading-row">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <>
      <PageHeading title="Об университете"><p lang="kk">{kazakhName}</p></PageHeading>
      <section className="shell history page-block" aria-labelledby="history-title">
        <h2 id="history-title">История университета</h2>
        <dl className="history-dates">
          <div>
            <dt>1998</dt>
            <dd>В Жетысае открылся университет «Сырдария». Его основали, чтобы сделать высшее образование доступнее для молодёжи южных районов Казахстана.</dd>
          </div>
          <div>
            <dt>2022</dt>
            <dd>Университет переехал в Шымкент и получил имя государственного и общественного деятеля Жумабека Ахметулы Ташенева.</dd>
          </div>
        </dl>
      </section>
      <section className="shell campus-feature page-block" aria-labelledby="campus-title" data-reveal>
        <figure>
          <img src={coworking} alt="Внутреннее пространство коворкинг-центра" width="1448" height="1086" loading="lazy" />
        </figure>
        <div>
          <h2 id="campus-title">Учебная среда</h2>
          <p>В университете работают библиотека, коворкинг-центр и лаборатория искусственного интеллекта.</p>
          <a className="text-link" href={base + 'students/'}>Ресурсы для студентов <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>
    </>
  )
}

function EducationPage() {
  return (
    <>
      <PageHeading title="Направления обучения"><p>Бакалавриат и магистратура</p></PageHeading>
      <section className="shell page-block" aria-label="Каталог направлений">
        <ul className="faculty-list grid grid-cols-1 sm:grid-cols-2" role="list">
          {directions.map(({ faculty, title, subjects }) => (
            <li key={faculty}>
              <h2><a href={official + '/ru/faculties/' + faculty}>{title}<ExternalLink size={18} aria-hidden="true" /></a></h2>
              <p>{subjects}</p>
            </li>
          ))}
        </ul>
        <a className="text-link home-detail" href={official + '/ru/faculties'}>Факультеты на сайте университета <ExternalLink size={16} aria-hidden="true" /></a>
      </section>
    </>
  )
}

function StudentsPage() {
  return (
    <>
      <PageHeading title="Студентам"><p>Расписание, учебные материалы и помощь по академическим вопросам.</p></PageHeading>
      <section className="shell campus-feature page-block" aria-labelledby="services-title">
        <div>
          <h2 id="services-title">Учебные ресурсы</h2>
          <ResourceLinks items={resources} />
        </div>
        <LibraryPhoto />
      </section>
      <section className="shell page-block student-support" aria-labelledby="support-title" data-reveal>
        <h2 id="support-title">Поддержка</h2>
        <ResourceLinks items={studentSupport} />
      </section>
    </>
  )
}

function ContactsPage() {
  return (
    <>
      <PageHeading title="Контакты"><p>Шымкент, Казахстан</p></PageHeading>
      <div className="shell contact-section page-block">
        <ContactDetails />
        <div className="campus-feature contact-feature" data-reveal>
          <figure>
            <img src={mainBuilding} alt="Главный корпус университета на проспекте Кунаева" width="1600" height="1066" loading="lazy" />
          </figure>
          <div>
            <h2>Учебные корпуса</h2>
            <ul className="campus-addresses" role="list">
              <li><MapPin size={18} aria-hidden="true" /><span>ул. Гагарина, 22А</span></li>
              <li><MapPin size={18} aria-hidden="true" /><span>ул. Иляева, 12А</span></li>
              <li><MapPin size={18} aria-hidden="true" /><span>ул. Иляева, 33 · Институт мировых языков</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

const pages = { about: AboutPage, education: EducationPage, students: StudentsPage, contacts: ContactsPage }

export function App() {
  const page = document.documentElement.dataset.page as keyof typeof pages | undefined
  const Content = page ? pages[page] : Home
  const main = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) {
          target.setAttribute('data-revealed', '')
          observer.unobserve(target)
        }
      }
    }, { threshold: 0.08 })

    main.current?.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#content">Перейти к содержанию</a>
      <Header page={page} />
      <main id="content" tabIndex={-1} ref={main}>
        <Content />
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <img src={logo} alt="Tashenev University" width="158" height="48" lang="en" />
          <a href="#top">Наверх <ArrowUp size={18} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  )
}

