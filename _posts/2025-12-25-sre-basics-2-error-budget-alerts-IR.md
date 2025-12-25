---
title: "SRE Fundamentals (Part 2): Error Budgets, Alerts, and Incident Response"
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

> Summary: I’ve been learning SRE fundamentals by reading Google’s SRE materials and related articles. This post is Part 2 of a short series where I整理 what I’ve learned about error budgets, alerting, and incident response—and how these ideas directly affect release decisions and operational behavior.

## Series Overview

- **Part 1**: SLIs, SLOs, and SLAs  
- **Part 2**: Error Budgets, Alerts, and Incident Response (this post)  
- **Part 3**: Applying SRE Thinking in Small Teams and Startups  

---

## 1. Introduction

In Part 1, I covered the foundations: SLIs, SLOs, and SLAs. But defining targets alone doesn’t change how systems are operated. The real shift happens when those targets start influencing day-to-day decisions.

This is where **error budgets** come in.

While reading Google’s SRE materials, I realized error budgets are not just a metric—they are a mechanism. They connect reliability targets to engineering behavior, alerting strategy, and even release velocity. This post focuses on how error budgets work, how alerts should be designed around them, and how they shape incident response.

---

## 2. What Is an Error Budget (Really)?

An error budget is the amount of unreliability you are allowed within a given SLO window.

If your SLO is:
- **99.9% availability over 30 days**

Then your error budget is:
- **0.1% downtime**
- About **43.2 minutes per month**

Instead of asking:
> “Did we break the SLA?”

You ask:
> “How much of our error budget have we consumed?”

This subtle change turns reliability into something measurable and actionable.

---

## 3. Why Error Budgets Matter

Error budgets solve a common tension:
- Product teams want to ship faster.
- Ops teams want stability.

Without error budgets:
- Decisions are emotional or opinion-based.
- Incidents trigger blame.
- Reliability becomes a blocker.

With error budgets:
- Reliability becomes a shared constraint.
- Risk is allowed, but quantified.
- Trade-offs are explicit.

In practice:
- **Low error budget usage** → you can afford more risk.
- **High error budget usage** → slow down, stabilize, and fix fundamentals.

---

## 4. Error Budgets and Release Decisions

This is one of the most practical applications of SRE thinking.

A common policy used by mature teams:
- If error budget consumption is **below threshold** → normal releases allowed.
- If error budget is **nearly exhausted** → freeze risky changes.
- If error budget is **fully consumed** → reliability work only.

This reframes release discussions from:
> “Can we deploy today?”

To:
> “Can we afford the reliability risk right now?”

The key point:  
Error budgets do not eliminate failures. They define how much failure is acceptable.

---

## 5. Alerts Should Protect SLOs, Not Metrics

One thing Google emphasizes strongly: **alerts are not for every metric**.

Bad alerting looks like:
- Alerts on raw CPU usage.
- Alerts that fire constantly.
- Alerts that don’t require action.

Good alerting is SLO-driven:
- Alerts fire when user experience is at risk.
- Alerts are tied to error budget burn.
- Alerts require a clear response.

A useful mental model:
- **Metrics** → for debugging  
- **Alerts** → for waking humans up  

If an alert doesn’t indicate an SLO risk, it probably shouldn’t page someone.

---

## 6. Fast Burn vs Slow Burn Alerts

A pattern I found particularly useful is separating alerts into two types:

**Fast-burn alerts**
- Detect rapid error budget consumption.
- Catch incidents that will breach SLOs quickly.
- Usually page immediately.

**Slow-burn alerts**
- Detect gradual degradation.
- Warn about long-term reliability risk.
- Often non-paging or ticket-based.

This approach reduces alert fatigue while still protecting SLOs.

---

## 7. Incident Response Through an SRE Lens

Traditional incident response often focuses on:
- Who caused the issue?
- How fast can we restore service?

SRE reframes this slightly:
- How much user impact occurred?
- How much error budget was consumed?
- What systemic changes reduce future risk?

Key SRE principles during incidents:
- Focus on mitigation first, root cause later.
- Measure impact using SLIs, not assumptions.
- Treat incidents as learning opportunities, not failures.

---

## 8. Postmortems and Learning Culture

Google strongly advocates **blameless postmortems**.

The goal is not:
- To find who made a mistake.

The goal is:
- To understand why the system allowed the mistake to cause impact.

Good postmortems:
- Reference SLO impact and error budget usage.
- Identify contributing factors, not just a single root cause.
- Produce concrete follow-up actions.

Over time, this builds a system that fails less—and recovers faster.

---

## 9. How This Scales Down to Small Teams

A key realization for me: you don’t need a large SRE team to apply this thinking.

Even small teams can:
- Define one availability SLO.
- Track rough error budget consumption.
- Use it to guide releases.
- Reduce unnecessary alerts.

Start simple. Precision can improve later.

---

## 10. What’s Next (Part 3 Preview)

In **Part 3**, I’ll focus on:
- Applying SRE principles in startups.
- Common mistakes when adopting SRE too early.
- How to balance speed, cost, and reliability with limited resources.

---

## 11. References

- Google SRE Book: https://landing.google.com/sre/book.html  
- Prometheus Docs: https://prometheus.io/docs/introduction/overview/  
- OpenTelemetry: https://opentelemetry.io/

---

## 12. Let’s Connect

I’m still learning, and I’d love to exchange ideas or learn from others’ experiences.

- GitHub: https://github.com/shisian512  
- LinkedIn: https://www.linkedin.com/in/tan-shi-sian  
- Email: shisian001@gmail.com
