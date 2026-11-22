# Portfolio Revamp Specification
## Tan Shi Sian - Site Reliability Engineer Portfolio

**Version:** 3.0 (Final Draft for Approval)
**Date:** 2026-11-22
**Status:** All design decisions made. Ready for user approval before development.

---

## 1. Overview

Replace the current Jekyll/minimal-mistakes portfolio with a modern React + Tailwind CSS application. The goal is a fun, interactive portfolio that makes visitors want to explore and understand what Tan Shi Sian does - not just a page to read.

- **Hosting:** GitHub Pages (free, no paid services)
- **Content scope:** Portfolio-only (no blog - existing posts dropped)
- **Repo must stay public** for free GitHub Pages
- **Career positioning:** Subtly position Tan as a candidate for Senior DevOps Engineer roles. The site shows the path from Intel graduate trainee, through self-directed MLOps and AI projects, to an SRE role at Infineon in November 2025.

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 | Interactive, component-based, ideal for "playable" UI |
| Build tool | Vite | Fast builds, GitHub Pages compatible |
| Styling | Tailwind CSS | Rapid responsive design, utility-first |
| Animation | Framer Motion | Smooth, declarative animations |
| Icons | lucide-react | Clean modern icon set |
| Routing | Single-page smooth scroll | More engaging for a portfolio, no page reloads |
| Deployment | GitHub Actions to GitHub Pages | Free, automated |
| Package manager | npm | Standard |

All tools are free and open source. No paid services or APIs.

---

## 3. Design Philosophy

**Core principle: "Play with my resume"**

The portfolio should feel like an experience, not a document. Visitors should be drawn in, want to click around, and discover information through interaction rather than passive reading.

Three goals:
1. **Fun** - animations, micro-interactions, playful elements that surprise and delight
2. **Clear** - a visitor should understand "SRE / DevOps / AI infrastructure" within 10 seconds
3. **Responsive** - works beautifully on phone, tablet, and desktop

### Career Positioning (indirect, not boastful)

The site subtly communicates:
- Career progression: graduate trainee, self-directed project work, and SRE
- Enterprise-scale impact: 50+ servers, global production platforms
- Production responsibility from the start at Infineon: productionization, RBAC, audit logging, multi-environment deployment
- Breadth: platform ops, CI/CD, observability, AI infrastructure, MLOps
- Ready for next step: Senior DevOps Engineer

Techniques:
- Timeline naturally shows the progression without commentary
- Stats highlight impact with real numbers
- Project descriptions frame work as outcomes, not tasks
- Overall polish and quality signals competence
- A career trajectory visual shows the upward arc
- SEO keywords tuned for recruiter discoverability

---

## 4. Color and Theme (FINAL)

### Chosen: "Playful Light" with dark/light toggle

**Light mode (default):**
- Base: Off-white (#fafafa)
- Surface/cards: White (#ffffff)
- Primary: Blue (#3b82f6)
- Secondary: Coral (#f97316)
- Tertiary: Mint (#10b981)
- Text: Dark slate (#1e293b)
- Muted text: (#64748b)

**Dark mode:**
- Base: Dark slate (#0f172a)
- Surface/cards: (#1e293b)
- Primary: Blue (#60a5fa)
- Secondary: Coral (#fb923c)
- Tertiary: Mint (#34d399)
- Text: Off-white (#f1f5f9)
- Muted text: (#94a3b8)

Both modes share the same accent identity. Toggle switches with a smooth Framer Motion transition. Default is light mode. User preference saved to localStorage.

---

## 5. Layout and Sections

Single-page application with smooth-scroll navigation and a sticky header.

### Section 1: Hero - Fake AI Agent Terminal

A futuristic terminal that auto-types as if an AI agent is analyzing the candidate.

**Auto-typing sequence (example):**
```
> Initializing agent...
> Loading profile: Tan Shi Sian...
> Analyzing... [##########] 100%
>
> CANDIDATE ANALYSIS COMPLETE
> ---------------------------
> Name: Tan Shi Sian
> Role: Site Reliability Engineer
> Location: Melaka, Malaysia
>
> KEY FINDINGS:
> - Productionized AI platform on OpenShift
> - Manages 50+ servers globally
> - Progressed from trainee to SRE in 16 months
> - Docker Certified Associate
>
> STATUS: Open to Senior DevOps Engineer roles
>
> Type 'help' to explore. Scroll down to begin.
> _
```

**After intro, visitors can type SRE commands (easter eggs):**
- `help` - lists available commands
- `whoami` - "Tan Shi Sian, SRE"
- `kubectl get pods` - fake pod list with project names as pods
- `sudo` - "Nice try. You don't have root here."
- `deploy` - triggers a fun deploy animation
- `ls` - lists portfolio sections
- `cat resume` - outputs a brief resume summary
- `clear` - clears the terminal

**Styling:**
- Futuristic glowing cursor, blinking
- Progress bar during "analysis"
- Status indicators (checkmarks, loading spinners)
- Subtle scanline or grid background animation
- On mobile: auto-typing only, no manual input field

### Section 2: About
- Brief intro paragraph (from resume professional summary)
- Animated stat counters that count up on scroll:
  - 50+ servers and VMs managed globally
  - 67% KPI reduction (45 min to 15 min)
  - 16 months from graduate trainee to SRE
  - First Class Honours, CGPA 3.82
- "What I Work On" badges with hover effects:
  - Site Reliability Engineering
  - Platform Operations
  - DevOps and CI/CD Automation
  - Observability
  - MLOps and AI Infrastructure

### Section 3: Career Trajectory
- A visual career arc showing the upward path:
  - Intel Graduate Trainee (Jul 2024)
  - Self-learning projects and MLOps pipeline (Jul-Oct 2025)
  - Infineon SRE (Nov 2025)
  - Next: Senior DevOps Engineer (target)
- Animated progression line that fills as you scroll
- Each node shows role, company, and one key achievement
- Subtle, not boastful - the facts speak for themselves

### Section 4: Experience Timeline
- Animated vertical timeline with career milestones
- Automatically expand the role nearest the viewport focus as the visitor scrolls; keep click-to-toggle available
- Animated progress line that fills as you scroll
- Three main entries:
  1. Infineon Technologies - SRE (Nov 2025 - Present)
  2. Intel Corporation - Graduate Trainee (Jul 2024 - Jun 2025)
  3. Infineon Technologies - BI Intern (May 2022 - Jul 2022)

### Section 5: Skills
- Animated capability cards with icons, category colors, and short descriptions
- Categories: Platform and Infrastructure, CI/CD and Automation, Observability, Software Engineering, Security and Governance
- Link every technology chip to its official documentation
- Add a delivery roadmap from source control through deployment and operations, with a flowing progress animation

### Section 6: Projects
- Illustrated, animated flip cards
- Front: project artwork, category, timeline, short description, and technology badges
- Back: project field notes, technology stack, and public project links or private-project note
- Filterable by category (SRE/Platform, AI/ML, Personal)
- Private projects are clearly marked and do not expose repository links
- All 8 projects included:
  1. Mini AI Factory (PRIVATE repo)
  2. End-to-End Regression MLOps Pipeline (PRIVATE repo)
  3. University Curriculum Enabling Tool (Intel, public)
  4. Intel OPEA Platform (public)
  5. Intel Workload Services Framework (public)
  6. Deep Learning Image Colorization (no repo)
  7. AI-Powered Password Manager (PRIVATE repo)
  8. Cost-of-Living ML Dashboard (PRIVATE repo)

### Section 7: Education and Certifications
- Animated degree feature card with university, dates, academic result, and focus areas
- Dedicated certification and recognition cards (Docker Certified Associate, Intel Outstanding Performance Award)

### Section 8: Contact
- Social links (GitHub, LinkedIn, Email)
- Phone: +60 10 899 4433 (displayed publicly)
- Copy-to-clipboard buttons for email and phone
- Call-to-action: "Open to Senior DevOps Engineer opportunities"

---

## 6. Interactive Elements (ALL INCLUDED)

| # | Feature | Description | Complexity |
|---|---|---|---|
| 1 | Fake AI Agent Terminal | Auto-typing futuristic hero. AI agent "analyzes" the candidate. SRE command easter eggs after intro. | Medium |
| 2 | Interactive Timeline | Career details auto-expand as each milestone enters view; retain click-to-toggle. | Medium |
| 3 | Flip Project Cards | Animated, illustrated 3D cards - front shows summary, back shows project notes and links. | Medium |
| 4 | Skills Roadmap | Color-coded capability groups with official documentation links and an animated delivery loop. | High |
| 5 | Animated Counters | Key stats count up when scrolled into view (50+ servers, 67% KPI, etc.) | Low |
| 6 | Pipeline Visualization | Animated CI/CD pipeline as a decorative or interactive background element. | High |
| 7 | Theme Toggle | Dark/light mode switch with smooth transition. Preference saved to localStorage. | Low |
| 8 | Easter Eggs | Secret SRE terminal commands (kubectl, sudo, deploy, etc.) and hidden surprises. | Low |
| 9 | Scroll Progress Indicator | Top bar showing scroll progress through the page. | Low |
| 10 | Section Transitions | Sections fade or slide in as you scroll. Content reveals progressively. | Medium |
| 11 | Career Trajectory | Visual career arc showing upward progression from trainee to SRE to target role. | Medium |

---

## 7. Responsive Design

Mobile-first approach. The site must work well on all devices.

| Breakpoint | Width | Layout | Interaction |
|---|---|---|---|
| Mobile | under 640px | Single column, stacked sections | Auto-typing terminal (no input), tap to flip cards, touch-friendly |
| Tablet | 640-1024px | Two-column where appropriate | Tap interactions, larger touch targets |
| Desktop | over 1024px | Full layout, side-by-side | Hover effects, terminal input, keyboard navigation |

Key considerations:
- Terminal: auto-typing only on mobile, interactive with command input on desktop
- Flip cards: tap to flip on touch, hover/click on desktop
- Timeline: horizontal scroll on mobile, vertical on desktop
- Skill constellation: grid on mobile, network graph on desktop
- Career trajectory: vertical on mobile, horizontal on desktop
- All text readable at 320px width

---

## 8. Content Map (from resume)

### Personal Info
- Name: Tan Shi Sian
- Role: Site Reliability Engineer
- Location: Melaka, Malaysia
- Phone: +60 10 899 4433 (shown on site)
- Email: shisian001@gmail.com
- Links: Portfolio (shisian512.github.io), LinkedIn (/in/tan-shi-sian), GitHub (/shisian512)

### Professional Summary
Site Reliability Engineer with experience across enterprise platform operations, OpenShift/Kubernetes environments, production releases, observability, incident investigation, automation, security controls, and AI infrastructure. Experienced supporting business-critical technical documentation platforms across 50+ servers and virtual machines globally, while also building AI-enabled internal products from prototype to production.

### Experience
1. Infineon Technologies - SRE (Nov 2025 - Present, Melaka)
   - Productionized AI-enabled technical documentation platform on OpenShift (dev, staging, prod)
   - Implemented authentication, RBAC, audit logging, persistent storage for enterprise LLM app
   - Operate 50+ Windows Server 2019/2025 servers, VMs, OpenShift components, enhanced-security env
   - Monthly production releases via Azure DevOps pipelines
   - Incident investigation using ELK/Kibana, Matomo telemetry, alerts, dependency views
   - OS patching, app upgrades, license renewals, operational governance

2. Intel Corporation - Graduate Trainee (Jul 2024 - Jun 2025, Malaysia)
   - University Curriculum Enabling Tool: Next.js, FastAPI, Payload CMS, modular RAG workflows
   - OPEA: Containerized GenAI inference for Intel GPUs, Docker Compose migration
   - Workload Services Framework: Validated AI workloads on Intel Xeon, documented Jira defects

3. Infineon Technologies - BI Intern (May 2022 - Jul 2022, Melaka)
   - Automated SAP BusinessObjects order comparison with Python
   - Tableau dashboard with 5-minute refreshes and audible alerts
   - 67% KPI reduction (45 min to 15 min)

### Projects (all 8 included)
1. Mini AI Factory - ML + RAG delivery showcase (PRIVATE repo)
2. End-to-End Regression MLOps Pipeline (PRIVATE repo)
3. University Curriculum Enabling Tool (Intel, public open source)
4. Intel OPEA Platform (public open source)
5. Intel Workload Services Framework (public open source)
6. Deep Learning Image Colorization (Final Year Project, no repo)
7. AI-Powered Password Manager (PRIVATE repo)
8. Cost-of-Living ML Dashboard (PRIVATE repo)

### Repo Visibility (verified via GitHub API on 2026-11-22)
- shisian512/mini-ai-factory: 404 (PRIVATE)
- shisian512/mlops: 404 (PRIVATE)
- shisian512/password-manager-AI: 404 (PRIVATE)
- shisian512/malaysia-cost-living-ml-dashboard: 404 (PRIVATE)
- Public repos: shisian512.github.io, profile README, open-webui fork
- Intel repos: public open source

### Skills
- Platform and Infrastructure: OpenShift, Kubernetes, Docker, Helm, Windows Server, RHEL, AWS
- CI/CD and Automation: Azure DevOps, GitHub Actions, Jenkins, Argo CD, Terraform
- Observability: ELK Stack, Kibana, Prometheus, Grafana, Matomo
- Software Engineering: Python, PowerShell, Bash, REST APIs, Databases, Neo4j, RAG
- Security and Governance: Authentication, RBAC, audit logging, security patching, license management, SSO

### Education
- Bachelor of Computer Science (Artificial Intelligence), First Class Honours
- Multimedia University, Malaysia, CGPA: 3.82/4.00
- Academic focus: AI, machine learning, deep learning, software engineering, data analytics, applied research

### Certifications
- Docker Certified Associate (2023)
- Intel Outstanding Performance Award

---

## 9. Private Repo Marking

All 4 personal project repos are private. Implementation:
- Badge next to project name: "(PRIVATE repo)"
- No clickable link to the private repo
- Note: "Architecture summaries available on request"
- Intel open-source projects: link to public repos normally

---

## 10. Deployment

- Build: Vite produces static files in dist/
- Deploy: GitHub Actions workflow builds and pushes to GitHub Pages
- Domain: shisian512.github.io (already configured)
- Cost: $0 - GitHub Pages is free for public repos
- The repo must remain PUBLIC for free GitHub Pages

---

## 11. SEO and Recruiter Discoverability

Keywords for meta tags and content:
- Senior DevOps Engineer
- Site Reliability Engineer
- Platform Engineer
- SRE
- Kubernetes, OpenShift
- CI/CD, Azure DevOps
- Observability, Prometheus, Grafana, ELK
- MLOps, AI Infrastructure
- Cloud-native

Open Graph tags for social sharing. Structured data (JSON-LD) for person/professional profile.

---

## 12. Decisions Summary

All design decisions are finalized:

| Decision | Choice |
|---|---|
| Build approach | React 18 + Vite + Tailwind CSS |
| Color palette | Playful Light (blue/coral/mint) |
| Theme | Dark and light toggle (light default) |
| Content scope | Portfolio-only (no blog, drop existing posts) |
| Interactive features | All 11 included |
| Terminal hero | Fake AI agent demo, auto-typing, futuristic |
| SRE easter eggs | kubectl, sudo, deploy, whoami, ls, cat resume, clear |
| Phone number | Yes, display publicly (+60 10 899 4433) |
| Extra projects | Keep all (Mini AI Factory, Password Manager, Cost-of-Living) |
| Navigation | Single-page smooth scroll |
| Private repos | All 4 personal repos marked "(PRIVATE repo)" |
| Career positioning | Subtle trajectory visual, stats, outcome-framed descriptions |
| Hosting | GitHub Pages (free) |

---

## 13. Migration Notes

- Current Jekyll files (index.html, _config.yml, _pages/, _data/, _posts/) will be replaced by the React app
- All 10 existing blog posts will be dropped (portfolio-only per user choice)
- The React app will be a complete replacement, not a modification of the Jekyll site
- README.md should be updated to reflect the new project structure
- GitHub Actions workflow for building and deploying the React app needs to be created
- The existing bio-photo.jpg asset can be reused if desired

---

This is the final planning specification. No development should begin until the user reviews and approves this spec.
