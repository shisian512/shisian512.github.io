import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useScroll } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Copy,
  Github, Linkedin, Mail, Moon, Phone, RotateCcw, Sun, Terminal,
} from 'lucide-react'

const navItems = [
  ['About', 'about'], ['Trajectory', 'trajectory'], ['Experience', 'experience'],
  ['Skills', 'skills'], ['Projects', 'projects'], ['Education', 'education'], ['Contact', 'contact'],
]

const introLines = [
  '> Initializing agent...',
  '> Loading profile: Tan Shi Sian...',
  '> Analyzing... [##########] 100%',
  '',
  '> CANDIDATE ANALYSIS COMPLETE',
  '> ---------------------------',
  '> Name: Tan Shi Sian',
  '> Role: Site Reliability Engineer',
  '> Location: Melaka, Malaysia',
  '',
  '> KEY FINDINGS:',
  '> - Productionized AI platform on OpenShift',
  '> - Manages 50+ servers globally',
  '> - 1 year from trainee to senior SRE',
  '> - Docker Certified Associate',
  '',
  '> STATUS: Open to Senior DevOps Engineer roles',
  '> Type \'help\' to explore. Scroll down to begin.',
]

const stats = [
  { value: 50, suffix: '+', label: 'servers & VMs managed globally' },
  { value: 67, suffix: '%', label: 'KPI improvement reported' },
  { value: 1, suffix: ' year', label: 'trainee to senior SRE' },
  { value: 3.82, suffix: '/4.00', label: 'CGPA · First Class Honours', decimals: 2 },
]

const experience = [
  {
    company: 'Infineon Technologies',
    role: 'Site Reliability Engineer',
    date: 'Nov 2025 - Present',
    place: 'Melaka, Malaysia',
    achievements: [
      'Productionized an AI technical documentation platform across OpenShift development, staging, and production.',
      'Implemented authentication, RBAC, audit logging, and persistent storage for secure enterprise LLM access.',
      'Operate 50+ Windows Server, VM, and OpenShift environments globally.',
      'Support monthly Azure DevOps production releases and investigate incidents with ELK/Kibana and Matomo.',
    ],
  },
  {
    company: 'Intel Corporation',
    role: 'Graduate Trainee',
    date: 'Jul 2024 - Jun 2025',
    place: 'Malaysia',
    achievements: [
      'Built an open-source GenAI education platform with Next.js, FastAPI, Payload CMS, Docker, and GitHub Actions.',
      'Designed modular RAG workflows across Intel CPU, integrated GPU, discrete GPU, and XPU environments.',
      'Containerized OPEA GenAI inference workflows and replaced systemd orchestration with Docker Compose.',
      'Validated AI workloads on Intel Xeon and documented reproducible Jira defects.',
    ],
  },
  {
    company: 'Infineon Technologies',
    role: 'Business Intelligence Intern',
    date: 'May 2022 - Jul 2022',
    place: 'Melaka, Malaysia',
    achievements: [
      'Automated SAP BusinessObjects order comparison using Python.',
      'Built a Tableau dashboard with 5-minute refreshes and audible alerts.',
      'Contributed to a 67% KPI reduction, from 45 minutes to 15 minutes.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Platform & Infrastructure',
    color: 'blue',
    skills: ['OpenShift', 'Kubernetes', 'Docker', 'Helm', 'Windows Server', 'RHEL', 'AWS'],
  },
  {
    title: 'CI/CD & Automation',
    color: 'coral',
    skills: ['Azure DevOps', 'GitHub Actions', 'Jenkins', 'Argo CD', 'Terraform'],
  },
  {
    title: 'Observability',
    color: 'mint',
    skills: ['ELK Stack', 'Kibana', 'Prometheus', 'Grafana', 'Matomo'],
  },
  {
    title: 'Software Engineering',
    color: 'blue',
    skills: ['Python', 'PowerShell', 'Bash', 'REST APIs', 'Neo4j', 'RAG'],
  },
  {
    title: 'Security & Governance',
    color: 'coral',
    skills: ['Authentication', 'RBAC', 'Audit logging', 'Security patching', 'SSO', 'License management'],
  },
]

const projects = [
  { title: 'Mini AI Factory', category: 'AI/ML', tech: ['MLOps', 'RAG', 'AI Platform'], privateRepo: true, timeline: 'Personal project', description: 'An ML and RAG delivery showcase demonstrating an enterprise-ready path from prototype to production.' },
  { title: 'End-to-End Regression MLOps Pipeline', category: 'SRE/Platform', tech: ['MLflow', 'DVC', 'Kubernetes', 'Prometheus'], privateRepo: true, timeline: 'Jul 2025 - Oct 2025', description: 'Traceable machine learning pipeline with processing, training, experiment tracking, versioning, containerization, deployment, and monitoring.' },
  { title: 'University Curriculum Enabling Tool', category: 'SRE/Platform', tech: ['Next.js', 'FastAPI', 'Payload CMS', 'RAG'], link: 'https://github.com/intel/university-curriculum-enabling-tool', privateRepo: false, timeline: 'Intel · Jul 2024 - Jun 2025', description: 'Open-source GenAI education platform converting an early codebase into a deployable full-stack application with repeatable CI/CD validation.' },
  { title: 'Intel OPEA Platform', category: 'SRE/Platform', tech: ['OPEA', 'Docker Compose', 'Intel GPUs'], link: 'https://github.com/opea-project', privateRepo: false, timeline: 'Intel · Jul 2024 - Jun 2025', description: 'Containerized microservice-based GenAI inference workflows for Intel GPUs, with portable Docker Compose startup workflows.' },
  { title: 'Intel Workload Services Framework', category: 'SRE/Platform', tech: ['Intel Xeon', 'AI workloads', 'Jira'], link: 'https://github.com/intel/workload-services-framework', privateRepo: false, timeline: 'Intel · Jul 2024 - Jun 2025', description: 'Validated AI and benchmark workloads, isolated edge cases, and documented actionable engineering defects.' },
  { title: 'Deep Learning Image Colorization', category: 'AI/ML', tech: ['TensorFlow', 'Keras', 'cGAN', 'U-Net'], privateRepo: false, timeline: 'Final Year Project · Oct 2022 - Jul 2023', description: 'Color Stack cGAN architecture combining conditional GAN, CNN, autoencoder, and U-Net techniques for grayscale-to-color translation.' },
  { title: 'AI-Powered Password Manager', category: 'Personal', tech: ['Python', 'AI', 'Security'], privateRepo: true, timeline: 'Personal project', description: 'A private personal project exploring AI-assisted credential security and password management.' },
  { title: 'Cost-of-Living ML Dashboard', category: 'Personal', tech: ['Machine Learning', 'Dashboard', 'Data'], privateRepo: true, timeline: 'Personal project', description: 'A private machine learning dashboard exploring cost-of-living data and analytical trends.' },
]

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return [theme, setTheme]
}

function Section({ id, eyebrow, title, children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </motion.div>
    </section>
  )
}

function Counter({ item }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!inView) return
    let frame
    const start = performance.now()
    const duration = 1200
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(item.value * (1 - Math.pow(1 - progress, 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, item.value])
  const text = item.decimals ? display.toFixed(item.decimals) : Math.round(display).toString()
  return (
    <div className="stat-card" ref={ref}>
      <strong>{text}{item.suffix}</strong>
      <span>{item.label}</span>
    </div>
  )
}

function TerminalHero() {
  const [lines, setLines] = useState([])
  const [command, setCommand] = useState('')
  const [commandLines, setCommandLines] = useState([])
  const [deploying, setDeploying] = useState(false)
  const timerRef = useRef()

  useEffect(() => {
    let index = 0
    const type = () => {
      setLines(introLines.slice(0, index + 1))
      index += 1
      if (index < introLines.length) timerRef.current = setTimeout(type, introLines[index - 1] === '' ? 140 : 85)
    }
    timerRef.current = setTimeout(type, 350)
    return () => clearTimeout(timerRef.current)
  }, [])

  const runCommand = (event) => {
    event?.preventDefault()
    const value = command.trim().toLowerCase()
    if (!value) return
    let output = ''
    if (value === 'help') output = 'Commands: whoami · kubectl get pods · sudo · deploy · ls · cat resume · clear'
    else if (value === 'whoami') output = 'Tan Shi Sian, Site Reliability Engineer'
    else if (value === 'kubectl get pods') output = 'ai-platform  1/1 Running  |  docs-platform  1/1 Running  |  observability  1/1 Running'
    else if (value === 'sudo') output = 'Nice try. You do not have root here.'
    else if (value === 'ls') output = 'about/  trajectory/  experience/  skills/  projects/  education/  contact/'
    else if (value === 'cat resume') output = 'SRE · OpenShift · Kubernetes · Azure DevOps · ELK · MLOps · AI infrastructure'
    else if (value === 'deploy') {
      setDeploying(true)
      setTimeout(() => setDeploying(false), 2500)
      output = 'Deploying portfolio...[done]  Environment: production'
    } else if (value === 'clear') {
      setCommandLines([])
      setCommand('')
      return
    } else output = `command not found: ${command}`
    setCommandLines((previous) => [...previous, `$ ${command}`, output])
    setCommand('')
  }

  return (
    <div className={`terminal-wrap ${deploying ? 'deploying' : ''}`}>
      <div className="terminal-top">
        <div className="terminal-dots"><i /><i /><i /></div>
        <span><Terminal size={14} /> tan-sian-agent</span>
        <span className="terminal-live"><i /> live</span>
      </div>
      <div className="terminal-body" aria-live="polite">
        {lines.map((line, index) => (
          <div className={line.includes('STATUS') ? 'terminal-status' : ''} key={`${line}-${index}`}>
            {line || '\u00a0'}
          </div>
        ))}
        {commandLines.map((line, index) => (
          <div className={index % 2 ? 'terminal-output' : 'terminal-command'} key={index}>{line}</div>
        ))}
        {window.innerWidth >= 640 && (
          <form className="terminal-input" onSubmit={runCommand}>
            <span>$</span>
            <input
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              placeholder="type a command..."
              aria-label="Terminal command"
              disabled={deploying}
            />
            <i className="cursor" />
          </form>
        )}
      </div>
    </div>
  )
}

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  return (
    <button className="copy-button" onClick={copy} title={`Copy ${label}`}>
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? 'Copied' : label}</span>
    </button>
  )
}

function App() {
  const [theme, setTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openExperience, setOpenExperience] = useState(0)
  const [projectFilter, setProjectFilter] = useState('All')
  const [flipped, setFlipped] = useState(null)
  const [activeSkill, setActiveSkill] = useState(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === projectFilter)

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <header className="header">
        <a className="brand" href="#top" aria-label="Back to top">
          <span>T</span><b>Tan Shi Sian</b>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <Sun size={15} />
            <motion.span animate={{ x: theme === 'light' ? 0 : 19 }} />
            <Moon size={15} />
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <i /><i /><i />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="hero-kicker">
              <span /> HELLO, I'M
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
              Tan Shi Sian
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="hero-role">
              Site Reliability Engineer
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="hero-summary">
              I make enterprise platforms reliable, observable, and ready for AI.
            </motion.p>
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="hero-link" href="#about">
              Explore my story <ArrowDown size={17} />
            </motion.a>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="hero-terminal">
            <TerminalHero />
          </motion.div>
        </section>

        <Section id="about" eyebrow="01 / ABOUT" title="A systems thinker. A builder. An operator.">
          <div className="about-grid">
            <div className="about-copy">
              <p>
                Site Reliability Engineer with experience across enterprise platform operations, OpenShift/Kubernetes
                environments, production releases, observability, incident investigation, automation, security controls,
                and AI infrastructure.
              </p>
              <p>
                I support business-critical technical documentation platforms across 50+ servers and virtual machines
                globally, while building AI-enabled internal products from prototype to production.
              </p>
              <div className="work-badges">
                {['Site Reliability Engineering', 'Platform Operations', 'DevOps & CI/CD', 'Observability', 'MLOps & AI Infrastructure'].map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </div>
            <div className="stats-grid">
              {stats.map((item) => <Counter item={item} key={item.label} />)}
            </div>
          </div>
        </Section>

        <Section id="trajectory" eyebrow="02 / CAREER TRAJECTORY" title="One trajectory. Increasing responsibility." className="trajectory-section">
          <div className="trajectory">
            {[
              ['Jul 2024', 'Intel Graduate Trainee', 'Started in enterprise AI and platform engineering'],
              ['Jul 2025', 'MLOps & AI Projects', 'Built repeatable source-to-deployment pipelines'],
              ['Nov 2025', 'Infineon Senior SRE', 'Owning production AI platforms across 50+ systems'],
              ['Next', 'Senior DevOps Engineer', 'Targeting the next level of platform leadership'],
            ].map(([date, role, detail], index) => (
              <motion.div
                className="trajectory-item"
                key={role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="trajectory-node">{index + 1}</div>
                <time>{date}</time>
                <h3>{role}</h3>
                <p>{detail}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="03 / EXPERIENCE" title="Built through real production environments">
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article
                className={openExperience === index ? 'timeline-item open' : 'timeline-item'}
                key={item.company + item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <button className="timeline-trigger" onClick={() => setOpenExperience(openExperience === index ? null : index)}>
                  <span className="timeline-marker"><BriefcaseBusiness size={17} /></span>
                  <span className="timeline-heading">
                    <small>{item.date} · {item.place}</small>
                    <strong>{item.role}</strong>
                    <em>{item.company}</em>
                  </span>
                  <ChevronDown className="timeline-chevron" size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {openExperience === index && (
                    <motion.div
                      className="timeline-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <ul>
                        {item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="04 / SKILLS" title="A connected platform toolkit">
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className={`skill-card ${group.color}`} key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-pills">
                  {group.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                      className={activeSkill === skill ? 'active' : ''}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="pipeline" aria-label="CI/CD pipeline visualization">
            {['Source', 'Build', 'Test', 'Deploy', 'Observe'].map((stage, index) => (
              <div className="pipeline-stage" key={stage}>
                <motion.span
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.14 }}
                >
                  {index === 0 ? 'Git' : index === 1 ? 'CI' : index === 2 ? 'QA' : index === 3 ? 'CD' : 'Ops'}
                </motion.span>
                <b>{stage}</b>
                {index < 4 && <i />}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="05 / PROJECTS" title="Systems, models, and tools shipped">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {['All', 'SRE/Platform', 'AI/ML', 'Personal'].map((filter) => (
              <button className={projectFilter === filter ? 'active' : ''} onClick={() => setProjectFilter(filter)} key={filter}>
                {filter}
              </button>
            ))}
          </div>
          <motion.div layout className="project-grid">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className={flipped === index ? 'project-card flipped' : 'project-card'}
                  key={project.title}
                  onClick={() => setFlipped(flipped === index ? null : index)}
                >
                  <div className="project-card-inner">
                    <div className="project-face project-front">
                      <div className="project-number">{String(projects.indexOf(project) + 1).padStart(2, '0')}</div>
                      <div className="project-category">{project.category}</div>
                      <h3>{project.title}</h3>
                      {project.privateRepo && <span className="private-badge">(PRIVATE repo)</span>}
                      <p>{project.description}</p>
                      <div className="tech-badges">
                        {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                      </div>
                      <button className="flip-button" type="button">View details <RotateCcw size={14} /></button>
                    </div>
                    <div className="project-face project-back">
                      <div className="project-category">{project.timeline}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      {project.privateRepo ? (
                        <div className="private-note">Architecture summaries available on request</div>
                      ) : (
                        project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>
                            View open-source project <ArrowUpRight size={16} />
                          </a>
                        )
                      )}
                      <button className="flip-button" type="button"><RotateCcw size={14} /> Back</button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </Section>

        <Section id="education" eyebrow="06 / EDUCATION & CERTIFICATIONS" title="Strong foundations, continuously upgraded">
          <div className="education-grid">
            <article className="education-card">
              <div className="education-mark">MMU</div>
              <div>
                <small>2019 - 2023</small>
                <h3>Bachelor of Computer Science (Artificial Intelligence)</h3>
                <p>Multimedia University, Malaysia</p>
                <strong>First Class Honours · CGPA 3.82/4.00</strong>
                <p>AI, machine learning, deep learning, software engineering, data analytics, and applied research.</p>
              </div>
            </article>
            <div className="cert-grid">
              <article>
                <span className="cert-icon">DCA</span>
                <div><small>Certification · 2023</small><h3>Docker Certified Associate</h3></div>
              </article>
              <article>
                <span className="cert-icon award">★</span>
                <div><small>Recognition</small><h3>Intel Outstanding Performance Award</h3></div>
              </article>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="07 / CONTACT" title="Let’s build reliable systems together" className="contact-section">
          <div className="contact-grid">
            <div>
              <p className="contact-status"><span /> Open to Senior DevOps Engineer opportunities</p>
              <p className="contact-copy">Interested in platform engineering, SRE, DevOps, MLOps, or AI infrastructure work? Let’s connect.</p>
              <div className="contact-actions">
                <a className="primary-button" href="mailto:shisian001@gmail.com">
                  <Mail size={17} /> Send an email
                </a>
                <a className="icon-button" href="https://github.com/shisian512" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={19} />
                </a>
                <a className="icon-button" href="https://linkedin.com/in/tan-shi-sian" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={19} />
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div><Mail size={18} /><span><small>Email</small>shisian001@gmail.com</span><CopyButton value="shisian001@gmail.com" label="Copy" /></div>
              <div><Phone size={18} /><span><small>Phone</small>+60 10 899 4433</span><CopyButton value="+60 10 899 4433" label="Copy" /></div>
              <div><BriefcaseBusiness size={18} /><span><small>Location</small>Melaka, Malaysia</span></div>
            </div>
          </div>
        </Section>
      </main>

      <footer>
        <a className="brand" href="#top"><span>T</span><b>Tan Shi Sian</b></a>
        <p>© 2026 Tan Shi Sian</p>
        <a href="#top" className="back-top" aria-label="Back to top">↑</a>
      </footer>
    </>
  )
}

export default App
