---
title: "SRE Fundamentals (Part 3): Applying SRE Thinking in Small Teams and Startups"
date: 2025-12-25
categories:
  - Blog
tags:
  - SLI
  - SLO
  - SLA
  - Monitoring
  - Observability
  - SRE
author: "Tan Shi Sian"
---

> Summary: The final part shows how small teams and startups can apply SRE principles effectively, balancing reliability, speed, and cost.

## Series Overview

- **Part 1**: SLIs, SLOs, and SLAs  
- **Part 2**: Error Budgets, Alerts, and Incident Response  
- **Part 3**: Applying SRE Thinking in Small Teams and Startups (this post)  

---

## 1. Introduction

By now, you’ve seen how SLIs, SLOs, SLAs, error budgets, and alerts form a framework to reason about reliability. But most examples come from large organizations like Google or AWS, where teams are huge and services complex.  

So how do you **apply SRE thinking in a small team or startup** where resources are limited, and speed is often more important than perfect availability?

That’s what this post is about.

---

## 2. Start Small, Focus on Core User Journeys

- Identify **1–2 critical user journeys**.  
  - Example: payment flow, login, or core API call.  
- Define **SLIs only for these critical paths**.  
- Don’t try to measure everything at once. Start simple.

**Tip:** If your product is early-stage, even one SLI per critical path is better than ten metrics nobody watches.

---

## 3. Use SLOs to Guide Trade-Offs

- Set **realistic internal SLOs**, slightly stricter than your external SLA (if any).  
- Use **error budgets** to decide when it’s safe to push new features versus focusing on stability.  
- Keep SLO windows manageable (e.g., weekly for startups) so you get quick feedback.

**Example:**  
- Core API SLO: 99.5% uptime / 7 days  
- Error budget: 0.5% downtime → ~50 minutes per week  
- If error budget consumption exceeds 80% → pause risky releases

---

## 4. Alerts Without Overhead

- Focus alerts on **SLO impact**, not raw system metrics.  
- Small teams cannot afford alert fatigue.  
- Consider **tiered alerts**:
  - Warning → Slack or email
  - Critical → Phone call / SMS for the person on-call

**Tip:** Even one engineer on call can manage if alerts are meaningful and actionable.

---

## 5. Lightweight Incident Response

- Keep incident response **lean**:
  - Mitigate impact first  
  - Record key events  
  - Postmortem after the fact  
- Use **blameless postmortems** to document lessons and reduce repeat failures.  

**Startup-friendly practices:**
- Use shared docs or lightweight tools instead of full-blown incident management software.  
- Keep a simple checklist for common outages.  

---

## 6. Infrastructure and Automation

- Start with **managed services** when possible (AWS RDS, GCP Cloud Run) to reduce operational load.  
- Automate basic monitoring dashboards and alerts.  
- Infrastructure as code is great, but only implement what you need for reliability.  

**Remember:** SRE is about **measured trade-offs**, not over-engineering.

---

## 7. Culture and Collaboration

- Reliability is **everyone’s responsibility**, not just the ops person.  
- Integrate SLOs and error budget awareness into **standups and planning**.  
- Make small, incremental improvements over time instead of trying to reach perfect reliability immediately.

---

## 8. Quick Checklist for Startups

- [ ] Identify core user journeys and 1–2 SLIs  
- [ ] Set internal SLOs and calculate error budgets  
- [ ] Connect error budgets to release decisions  
- [ ] Implement meaningful alerts tied to SLOs  
- [ ] Maintain lean incident response process  
- [ ] Review SLOs and SLIs as product evolves  
- [ ] Encourage blameless culture and learning from failures

---

## 9. References

- Google SRE Book: https://landing.google.com/sre/book.html  
- Prometheus Docs: https://prometheus.io/docs/introduction/overview/  
- OpenTelemetry: https://opentelemetry.io/  

---

## 10. Let’s Connect

I’m still learning, and I’d love to exchange ideas or learn from others’ experiences.

- GitHub: https://github.com/shisian512  
- LinkedIn: https://www.linkedin.com/in/tan-shi-sian  
- Email: shisian001@gmail.com
