import React, { useState, useEffect } from 'react';
import './index.css';
import {
  personalInfo, education, skills, languages,
  certifications, projects, blogPosts,
} from './data/portfolioData';
import { TypeAnimation } from 'react-type-animation';

import {
  FiGithub, FiMail, FiMapPin, FiLinkedin,
  FiExternalLink, FiMenu, FiX, FiArrowUpRight,
  FiArrowUp, FiCode, FiLayers, FiShield,
  FiWifi, FiDatabase, FiSmartphone,
  FiBookOpen, FiCalendar, FiClock, FiCheckCircle,
  FiCpu, FiServer, FiLock, FiDownload,
} from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { TbCertificate } from 'react-icons/tb';
import { SiCisco, SiFortinet, SiSololearn } from 'react-icons/si';

/* ─── skill icon map ─── */
const SKILL_ICONS = {
  'Languages':             <FiCode size={16} />,
  'Frameworks & Libraries':<FiLayers size={16} />,
  'Cybersecurity & Pentest':<FiShield size={16} />,
  'Networking & Systems':  <FiWifi size={16} />,
  'AI & Data Science':     <FiCpu size={16} />,
  'DevOps & Tools':        <FiServer size={16} />,
  'Databases':             <FiDatabase size={16} />,
};

/* ─── project icon map ─── */
const PROJ_ICONS = {
  'Networking':    <FiWifi size={18} />,
  'Cybersecurity': <FiShield size={18} />,
  'Systems':       <FiServer size={18} />,
  'Web Dev':       <FiLayers size={18} />,
  'AI / ML':       <FiCpu size={18} />,
  'Mobile':        <FiSmartphone size={18} />,
};

function CertIcon({ issuer }) {
  if (issuer === 'Cisco')     return <SiCisco size={20} />;
  if (issuer === 'Fortinet')  return <SiFortinet size={18} />;
  if (issuer === 'Sololearn') return <SiSololearn size={18} />;
  return <TbCertificate size={20} />;
}

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const ids = ['home','about','skills','projects','certifications','blog','contact'];
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 90;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= y) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home','About','Skills','Projects','Certifications','Blog','Contact'];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="nav-logo">KO<em>.</em></a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? 'active' : ''}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a
            href={personalInfo.cv}
            download
            className="btn btn-cv"
            aria-label="Download CV"
          >
            <FiDownload size={13} /> CV
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <FiGithub size={13} /> GitHub
          </a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
        >
          <FiMenu size={22} />
        </button>
      </nav>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button className="close-nav" onClick={() => setMenuOpen(false)} aria-label="Close">
          <FiX size={22} />
        </button>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {l}
          </a>
        ))}
        <a
          href={personalInfo.cv}
          download
          className="btn btn-cv"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: '0.5rem' }}
        >
          <FiDownload size={13} /> Download CV
        </a>
      </div>
    </>
  );
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
function Hero() {
  const stats = [
    { icon: <FiWifi size={18} />,   value: '6+',  label: 'Network Projects'  },
    { icon: <FiShield size={18} />, value: '4',   label: 'Security Certs'    },
    { icon: <FiCode size={18} />,   value: '10+', label: 'Projects Built'    },
    { icon: <FiLock size={18} />,   value: '2+',  label: 'Years of Practice' },
  ];

  return (
    <section className="hero" id="home">
      <aside className="hero-socials" aria-label="Social links">
        <a href={personalInfo.github}   target="_blank" rel="noreferrer" aria-label="GitHub">
          <FiGithub size={17} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FiLinkedin size={17} />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <FiMail size={17} />
        </a>
      </aside>

      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="hero-dot" aria-hidden="true" />
          Open to final-year internship opportunities
        </p>

        <h1 className="hero-name">Khadija<br />Ourahou.</h1>

        <p className="hero-tagline">
          <TypeAnimation
            sequence={[
              'Network Security Engineer Student', 2400,
              'Systems & Infrastructure Engineer', 2400,
              'Cybersecurity Practitioner',        2400,
              'Full-Stack Developer',              2400,
            ]}
            speed={52}
            repeat={Infinity}
          />
        </p>

        <p className="hero-bio">
          Engineering student in{' '}
          <strong>Information Security &amp; Technology</strong> at FST Marrakech.
          I work on network design, system administration, and secure application
          development — from OSPF topologies and SOC labs to full-stack web apps
          deployed with Docker.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">
            View Projects <FiArrowUpRight size={14} />
          </a>
          <a
            href={personalInfo.cv}
            download
            className="btn btn-secondary"
          >
            <FiDownload size={13} /> Download CV
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-hidden="true">
        {stats.map(s => (
          <div key={s.label} className="hero-stat-card">
            <div className="hsc-icon">{s.icon}</div>
            <div>
              <span className="hsc-value">{s.value}</span>
              <span className="hsc-label">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ABOUT
══════════════════════════════════════ */
function About() {
  const interests = [
    { icon: <FiShield size={15} />, label: 'Blue Team & SOC' },
    { icon: <FiLock size={15} />,   label: 'Offensive Security / Pentest' },
    { icon: <FiWifi size={15} />,   label: 'Network Security' },
    { icon: <FiServer size={15} />, label: 'System Administration' },
  ];

  const courses = [
    'Ethical Hacking', 'Network Security', 'System Administration',
    'DevOps', 'Agile Methods', 'Software Development', 'Artificial Intelligence',
  ];

  return (
    <section id="about">
      <p className="sec-label">About</p>
      <h2 className="sec-title">Who I am</h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm Khadija, a 5th-year Information Security Engineering student at the
            Faculty of Sciences and Techniques of Marrakech,{' '}
            <strong>Cadi Ayyad University</strong>. My academic journey has provided
            me with a solid foundation in cybersecurity, computer networks, system
            administration, software development, and DevOps.
          </p>
          <p>
            I am particularly interested in both <strong>defensive and offensive
            cybersecurity</strong>. On the defensive side, I have worked with tools
            such as Wazuh (EDR/SOC), pfSense, and Windows Server environments, while
            learning about threat monitoring, incident detection, and security best
            practices. On the offensive side, I have practised reconnaissance,
            vulnerability assessment, and ethical hacking through hands-on labs and
            platforms such as TryHackMe.
          </p>
          <p>
            I am also passionate about <strong>computer networks</strong> and have
            completed several projects involving routing protocols, VLAN
            configuration, network simulation with GNS3 and Cisco Packet Tracer,
            and infrastructure deployment. Currently, I am seeking a final-year
            internship in cybersecurity, network
            administration, SOC operations, or DevOps environments.
          </p>

          {/* Interests */}
          <div className="interests-row">
            {interests.map(it => (
              <div key={it.label} className="interest-chip">
                <span className="interest-icon" aria-hidden="true">{it.icon}</span>
                {it.label}
              </div>
            ))}
          </div>

          {/* Courses */}
          <div className="courses-block">
            <p className="courses-label">Relevant coursework</p>
            <div className="courses-list">
              {courses.map(c => (
                <span key={c} className="course-tag">{c}</span>
              ))}
            </div>
          </div>

          <div className="about-actions">
            <a href={personalInfo.cv} download className="btn btn-primary">
              <FiDownload size={13} /> Download CV
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FiLinkedin size={13} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="icard">
            <div className="icard-header">
              <HiOutlineAcademicCap size={14} /> Education
            </div>
            {education.map((e, i) => (
              <div key={i} className="edu-item">
                <div className="edu-dot" aria-hidden="true" />
                <div>
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-period">
                    <FiCalendar size={10} /> {e.period}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="icard">
            <div className="icard-header">
              <FiBookOpen size={13} /> Languages
            </div>
            {languages.map((l, i) => (
              <div key={i} className="lang-item">
                <div className="lang-top">
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
                <div
                  className="lang-bar"
                  role="progressbar"
                  aria-valuenow={l.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${l.name} proficiency`}
                >
                  <div className="lang-fill" style={{ width: `${l.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   SKILLS
══════════════════════════════════════ */
function Skills() {
  return (
    <section id="skills">
      <p className="sec-label">Technical Skills</p>
      <h2 className="sec-title">What I work with</h2>
      <div className="skills-grid">
        {skills.map((cat, i) => (
          <div key={i} className="skill-card fade-up">
            <div className="skill-head">
              <div className="skill-icon-box" aria-hidden="true">
                {SKILL_ICONS[cat.category] || <FiCode size={16} />}
              </div>
              <h3>{cat.category}</h3>
            </div>
            <div className="pill-wrap">
              {cat.items.map((item, j) => (
                <span key={j} className="pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   PROJECTS
══════════════════════════════════════ */
function Projects() {
  const cats = ['All', ...new Set(projects.map(p => p.category))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section id="projects">
      <p className="sec-label">Work</p>
      <h2 className="sec-title">Selected projects</h2>

      <div className="filter-row" role="group" aria-label="Filter by category">
        {cats.map(c => (
          <button
            key={c}
            className={`fpill${active === c ? ' on' : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {filtered.map((p, i) => (
          <article key={`${p.id}-${i}`} className="proj-card fade-up">
            <div className="proj-top">
              <div className="proj-ico" aria-hidden="true">
                {PROJ_ICONS[p.category] || <FiCode size={18} />}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="proj-gh"
                aria-label={`${p.title} — GitHub`}
              >
                <FiGithub size={15} />
              </a>
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.description}</p>
            <div className="proj-tags">
              {p.tags.map((t, j) => (
                <span key={j} className="ptag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   CERTIFICATIONS
══════════════════════════════════════ */
function Certifications() {
  return (
    <section id="certifications">
      <p className="sec-label">Credentials</p>
      <h2 className="sec-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <article key={i} className="cert-card fade-up">
            <div className="cert-icon-box" aria-hidden="true">
              <CertIcon issuer={c.issuer} />
            </div>
            <p className="cert-issuer">{c.issuer}</p>
            <h3 className="cert-name">{c.title}</h3>
            <p className="cert-date"><FiCalendar size={10} /> {c.date}</p>
            {c.link !== '#' && (
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
                aria-label={`View certificate — ${c.title}`}
              >
                <FiExternalLink size={13} /> View credential
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   BLOG
══════════════════════════════════════ */
function Blog() {
  return (
    <section id="blog">
      <p className="sec-label">Writing</p>
      <h2 className="sec-title">Notes &amp; articles</h2>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card fade-up">
            <span className="blog-cat">{post.category}</span>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-tags">
              {post.tags.map((t, i) => (
                <span key={i} className="btag">{t}</span>
              ))}
            </div>
            <footer className="blog-foot">
              <span className="blog-meta"><FiCalendar size={10} /> {post.date}</span>
              <span className="blog-meta"><FiClock size={10} /> {post.readTime}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   CONTACT
══════════════════════════════════════ */
function Contact() {
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const set = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      // eslint-disable-next-line no-undef
      await emailjs.send(
        'YOUR_SERVICE_ID',   // ← replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',  // ← replace with your EmailJS template ID
        {
          from_name:    form.name,
          from_email:   form.email,
          subject:      form.subject,
          message:      form.message,
          to_email:     personalInfo.email,
        },
        'YOUR_PUBLIC_KEY'    // ← replace with your EmailJS public key
      );
      setStatus('success');
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const items = [
    { icon: <FiMail size={17} />,   label: 'Email',    value: personalInfo.email,          href: `mailto:${personalInfo.email}` },
    { icon: <FiGithub size={17} />, label: 'GitHub',   value: 'github.com/khadijaourahou', href: personalInfo.github, ext: true },
    { icon: <FiMapPin size={17} />, label: 'Location', value: personalInfo.location },
  ];

  return (
    <section id="contact">
      <p className="sec-label">Contact</p>
      <h2 className="sec-title">Get in touch</h2>

      <div className="contact-grid">
        <div className="contact-lead">
          <h3>Let's connect</h3>
          <p>
            I'm currently looking for a final-year internship
            in network engineering, systems administration, or cybersecurity. If you
            have a role, a project, or just want to talk about routing protocols —
            feel free to reach out.
          </p>

          <div className="cinfo-list">
            {items.map(item => (
              <div key={item.label} className="cinfo-item">
                <div className="cinfo-icon" aria-hidden="true">{item.icon}</div>
                <div>
                  <p className="cinfo-lbl">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="cinfo-val is-link"
                      {...(item.ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="cinfo-val">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a href={personalInfo.cv} download className="btn btn-primary cv-download-btn">
            <FiDownload size={14} /> Download CV
          </a>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="frow">
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" name="name" type="text" value={form.name}
                onChange={set} placeholder="Your name" required autoComplete="name"
                disabled={status === 'sending'} />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" value={form.email}
                onChange={set} placeholder="your@email.com" required autoComplete="email"
                disabled={status === 'sending'} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-subject">Subject</label>
            <input id="c-subject" name="subject" type="text" value={form.subject}
              onChange={set} placeholder="Internship enquiry, collaboration…" required
              disabled={status === 'sending'} />
          </div>
          <div className="field">
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" value={form.message}
              onChange={set} placeholder="Your message…" rows={6} required
              disabled={status === 'sending'} />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>Sending… <span className="spin" aria-hidden="true" /></>
            ) : (
              <>Send message <FiArrowUpRight size={15} /></>
            )}
          </button>

          {status === 'success' && (
            <div className="form-ok" role="status">
              <FiCheckCircle size={16} />
              Message sent — I'll get back to you shortly.
            </div>
          )}
          {status === 'error' && (
            <div className="form-err" role="alert">
              <FiX size={16} />
              Something went wrong. Please email me directly at{' '}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">
        Designed &amp; built by <span>Khadija Ourahou</span> — 2026
      </p>
      <div className="footer-links">
        <a href={personalInfo.github}   target="_blank" rel="noreferrer">
          <FiGithub size={13} /> GitHub
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
          <FiLinkedin size={13} /> LinkedIn
        </a>
        <a href={personalInfo.cv} download>
          <FiDownload size={13} /> CV
        </a>
        <a href="#home">
          <FiArrowUp size={13} /> Top
        </a>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ══════════════════════════════════════
   APP
══════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
