const { useState, useEffect, useRef } = React;
const D = window.DATA;

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeSection({ id, children, className = '' }) {
  const [ref, visible] = useInView();
  return (
    <section id={id} ref={ref} className={`section ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="section-div">
      <div className="section-div-line"></div>
    </div>
  );
}

function SectionHead({ title }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = ['contact', 'skills', 'certifications', 'projects', 'experience', 'about', 'hero'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">IT</a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>{l.label}</a>
          ))}
          <a href={D.resume} className="nav-cta" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </div>
      </div>
    </nav>
  );
}

function TypedSpecialty() {
  const words = D.specialties;
  const [wi, setWi] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');
  useEffect(() => {
    const word = words[wi % words.length];
    let t;
    if (phase === 'typing') {
      if (text.length < word.length) t = setTimeout(() => setText(word.slice(0, text.length + 1)), 55);
      else t = setTimeout(() => setPhase('deleting'), 1800);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 28);
      else { setWi(wi + 1); setPhase('typing'); }
    }
    return () => clearTimeout(t);
  }, [text, phase, wi]);
  return (
    <p className="hero-specialty">
      Specialised in <span className="typed">{text}</span><span className="caret">|</span>
    </p>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Indrajeet<br />Thakare</h1>
          <p className="hero-role">{D.role}</p>
          <TypedSpecialty />
          <p className="hero-bio">{D.bio}</p>
          <div className="hero-actions">
            <a href={D.resume} className="btn-primary" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href={D.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </a>
            <a href={D.linkedin} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-photo-col">
          <div className="photo-wrap">
            <div className="photo-frame">
              <img src="assets/IMG.png" alt="Indrajeet Thakare" className="photo-img" />
            </div>
            <div className="photo-glow"></div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <FadeSection id="about" className="alt">
      <div className="container">
        <SectionHead title="About Me" />
        <div className="about-grid">
          <div className="about-text">
            {D.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-path">
            <div className="path-step"><span className="path-co">Blinkit</span><span className="path-role">Quick-commerce supply chain</span></div>
            <div className="path-arrow">↓</div>
            <div className="path-step"><span className="path-co">Tesla</span><span className="path-role">Global service parts planning</span></div>
            <div className="path-arrow">↓</div>
            <div className="path-step now"><span className="path-co">Levare</span><span className="path-role">S&OP analytics ownership</span></div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

function Experience() {
  return (
    <FadeSection id="experience" className="alt">
      <div className="container">
        <SectionHead label="01 · Experience" title="Where I've Worked" />
        <div className="exp-list">
          {D.experience.map((e, i) => (
            <div key={i} className={`exp-card${i === 0 ? ' featured' : ''}`}>
              <div className="exp-meta">
                <span className="exp-period">{e.period}</span>
                <span className="exp-badge">{e.type}</span>
              </div>
              <div className="exp-body">
                <div className="exp-title-row">
                  <span className="co-logo">{e.company.charAt(0)}</span>
                  <h3 className="exp-role">{e.role}</h3>
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="exp-company" onClick={ev => ev.stopPropagation()}>
                    {e.company} ↗
                  </a>
                </div>
                {e.progression && (
                  <div className="exp-progression">
                    {e.progression.map((p, j) => (
                      <div key={j} className="prog-step">
                        <span className="prog-title">{p.title}</span>
                        <span className="prog-period">{p.period}</span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="exp-summary">{e.summary}</p>
                <div className="tag-row">
                  {e.tools.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? D.projects : D.projects.filter(p => p.category === filter);
  return (
    <FadeSection id="projects">
      <div className="container">
        <SectionHead label="02 · Projects" title="Projects" />
        <div className="featured-grid">
          {D.featuredProjects.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="featured-card">
              <span className="featured-flag">Featured</span>
              <h4 className="featured-title">{p.title}</h4>
              <p className="featured-desc">{p.description}</p>
              <div className="tag-row sm">
                {p.tools.map(t => <span key={t} className="tag sm">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
        <div className="filter-tabs">
          {D.projectCategories.map(c => (
            <button key={c} className={`filter-tab ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>
              {c}
              {filter === c && <span className="tab-count">{filtered.length}</span>}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-cat">{p.category}</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <h4 className="project-title">{p.title}</h4>
              <div className="tag-row sm">
                {p.tools.map(t => <span key={t} className="tag sm">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

function Certifications() {
  return (
    <FadeSection id="certifications" className="alt">
      <div className="container">
        <SectionHead label="03 · Certifications" title="Credentials" />
        <div className="certs-grid">
          {D.certifications.map((c, i) => (
            <div
              key={i}
              className={`cert-card ${c.url ? 'clickable' : ''}`}
              onClick={() => c.url && window.open(c.url, '_blank')}
            >
              <div className="cert-logo-wrap">
                <img src={c.img} alt={c.issuer} className="cert-logo" />
              </div>
              <div className="cert-info">
                <p className="cert-name">{c.name}</p>
                <p className="cert-issuer">{c.issuer}</p>
                {c.date && <p className="cert-date">{c.date}</p>}
                {c.url && <span className="cert-link">View credential ↗</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

function Skills() {
  return (
    <FadeSection id="skills">
      <div className="container">
        <SectionHead label="04 · Skills" title="Tech Stack" />
        <div className="skills-groups">
          {Object.entries(D.skills).map(([group, items]) => (
            <div key={group} className="skill-group">
              <h4 className="skill-group-name">{group}</h4>
              <div className="skill-tags">
                {items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeSection>
  );
}

function Contact() {
  return (
    <FadeSection id="contact" className="alt">
      <div className="container">
        <div className="contact-inner">
          <SectionHead label="05 · Contact" title="Get In Touch" />
          <p className="contact-text">Whether you have an opportunity or just want to connect — my inbox is always open.</p>
          <a href={`mailto:${D.email}`} className="contact-email">{D.email}</a>
          <div className="social-row">
            <a href={D.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </a>
            <a href={D.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>Designed &amp; built by Indrajeet Thakare</span>
      <span className="footer-sep">·</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

window.PortfolioApp = App;
