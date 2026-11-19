import { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Atom, BookOpen, CodeXml, Dumbbell, ExternalLink, FileText, Globe2,
  GraduationCap, Languages, Library, Mail, MapPin, Menu, Palette, Scale, X,
} from 'lucide-react'
import './styles.css'

const sections = [
  { id: 'about', label: 'О нас' },
  { id: 'education', label: 'Обучение' },
  { id: 'students', label: 'Студентам' },
  { id: 'contacts', label: 'Контакты' },
]

const fields = [
  { name: 'Педагогика', topics: 'Образование и психология', icon: GraduationCap },
  { name: 'IT и искусственный интеллект', topics: 'Цифровые технологии', icon: CodeXml },
  { name: 'Экономика и право', topics: 'Менеджмент и юриспруденция', icon: Scale },
  { name: 'Мировые языки', topics: 'Иностранные языки', icon: Globe2 },
  { name: 'Искусство и гуманитарные науки', topics: 'Дизайн и художественный труд', icon: Palette },
  { name: 'Естественные науки', topics: 'Математика, физика, химия и биология', icon: Atom },
  { name: 'Казахская филология', topics: 'Казахский язык и литература', icon: Languages },
  { name: 'Физическая культура и спорт', topics: 'Теория и методика преподавания', icon: Dumbbell },
]

const resources = [
  { name: 'Platonus', description: 'Расписание и успеваемость', icon: GraduationCap, href: 'https://platonus.tashenev.kz/v7/#/pps-main/index' },
  { name: 'Электронная библиотека', description: 'Книги и учебные материалы', icon: Library, href: 'https://library.tashenev.edu.kz/' },
  { name: 'Путеводитель студента', description: 'Справочник по учёбе · PDF', icon: FileText, href: 'https://tashenev.edu.kz/docs/Academ/anyktama.pdf' },
  { name: 'Студенческий дом', description: 'Общежития университета', icon: BookOpen, href: 'https://tashenev.edu.kz/ru/student-house' },
]

function Brand() {
  return (
    <a className="brand" href="#about" aria-label="Tashenev University — в начало">
      <span className="brand-mark" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}tashenev-logo.png`} alt="" width="904" height="276" />
      </span>
      <span className="brand-text" aria-hidden="true">TASHENEV{' '}<span>UNIVERSITY</span></span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="shell header-inner">
        <Brand />
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          Меню
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Основное меню" data-open={menuOpen}>
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Перейти к содержанию</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="hero shell" id="about" tabIndex={-1} aria-labelledby="about-title">
          <div className="hero-content">
            <p className="eyebrow"><span aria-hidden="true" />Шымкент, Казахстан</p>
            <h1 id="about-title">Tashenev<br /><span>University</span></h1>
            <p className="hero-name">Университет имени Жумабека<br className="hero-name-break" /> Ахметулы Ташенева</p>
            <p className="hero-description">Высшее образование в Шымкенте по программам бакалавриата и магистратуры. История университета началась в 1998 году.</p>
            <div className="hero-actions flex flex-wrap items-center gap-x-6 gap-y-2">
              <a className="primary-link" href="#education">Направления обучения</a>
              <a className="text-link" href="#students">Студентам</a>
            </div>
          </div>
          <figure className="hero-figure">
            <img src={`${import.meta.env.BASE_URL}campus.jpg`} alt="Фасад корпуса университета Ташенева с флагом Казахстана" width="1280" height="853" fetchPriority="high" />
            <figcaption><MapPin aria-hidden="true" size={15} /> Корпус университета в Шымкенте</figcaption>
          </figure>
        </section>

        <section className="education section-pad" id="education" tabIndex={-1} aria-labelledby="education-title">
          <div className="shell">
            <div className="section-heading">
              <h2 id="education-title">Направления обучения</h2>
              <a className="text-link" href="https://tashenev.edu.kz/ru/faculties">Факультеты и кафедры</a>
            </div>
            <ul className="field-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
              {fields.map(({ name, topics, icon: Icon }) => (
                <li key={name} className="field">
                  <Icon className="field-icon" aria-hidden="true" size={24} strokeWidth={1.65} />
                  <h3>{name}</h3>
                  <p>{topics}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="students shell section-pad" id="students" tabIndex={-1} aria-labelledby="students-title">
          <div>
            <h2 id="students-title">Студентам</h2>
            <p className="section-description">Учебные сервисы и материалы на каждый день.</p>
          </div>
          <ul className="resource-list" role="list">
            {resources.map(({ name, description, href, icon: Icon }) => (
              <li key={name}>
                <a className="resource" href={href}>
                  <span className="resource-icon"><Icon aria-hidden="true" size={21} strokeWidth={1.7} /></span>
                  <span><strong>{name}</strong><span className="resource-description">{description}</span></span>
                  <ExternalLink className="external-icon" size={17} strokeWidth={1.7} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact-section" id="contacts" tabIndex={-1} aria-labelledby="contacts-title">
          <div className="shell contact-inner">
            <h2 id="contacts-title">Контакты</h2>
            <address className="contact-details">
              <div className="contact-item">
                <MapPin size={22} aria-hidden="true" />
                <div><p>Шымкент, проспект Кунаева, 21</p>
                  <a href="https://tashenev.edu.kz/ru/building-map">Карта корпусов</a></div>
              </div>
              <div className="contact-item">
                <Mail size={22} aria-hidden="true" />
                <div><p>Электронная почта</p><a href="mailto:info@tashenev.edu.kz">info@tashenev.edu.kz</a></div>
              </div>
            </address>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© Tashenev University</span>
          <a className="text-link" href="#about">К началу страницы</a>
        </div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
