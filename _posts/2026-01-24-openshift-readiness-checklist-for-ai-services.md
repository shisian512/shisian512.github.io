---
title: "OpenShift Readiness Checklist for AI Services"
excerpt: "A production readiness checklist for deploying AI services on OpenShift, covering security, storage, observability, and release safety."
date: 2026-01-24
author: "Tan Shi Sian"
categories:
  - Blog
tags:
  - OpenShift
  - Kubernetes
  - AI Infrastructure
  - DevOps
  - SRE
---

> Summary: This checklist captures the practical controls I review before promoting an AI service to production on OpenShift.

Deploying AI services to production is often less about model quality and more about operational discipline. A model can be accurate and still fail users if scaling, storage, security, or monitoring are weak.

This post summarizes a readiness checklist I use to reduce deployment risk.

---

## 1. Runtime and Container Baseline

- Container starts with non-root compatible settings.
- Resource requests and limits are defined per workload profile.
- Startup, readiness, and liveness probes are implemented and tested.
- Image is pinned to immutable tags, not moving latest tags.

Goal: predictable scheduling and safe pod lifecycle behavior.

---

## 2. Configuration and Secrets

- Environment-specific configs are externalized.
- Secrets are injected through approved secret mechanisms.
- Sensitive values are never committed to source control.
- Service endpoints and credentials are documented and rotated.

Goal: secure, auditable configuration management.

---

## 3. Data and Storage Readiness

- Persistent volumes are defined where state is required.
- Read/write behavior under restart is tested.
- Backup and restore expectations are explicit.
- Model artifacts and feature assets have version traceability.

Goal: stable data behavior under restart, failover, and rollback.

---

## 4. Security and Access Controls

- Authentication and authorization requirements are clear.
- RBAC rules are scoped minimally for service accounts.
- Ingress rules and routes are validated per environment.
- Audit logs for high-risk actions are enabled.

Goal: least privilege and clear accountability.

---

## 5. Observability and Reliability

- Service-level indicators are defined for availability and latency.
- Metrics, logs, and traces are emitted in consistent formats.
- Dashboards show user-impacting health, not only system metrics.
- Alerts are linked to runbooks and escalation paths.

Goal: fast detection and predictable incident response.

---

## 6. Release and Rollback Safety

- Deployment strategy is defined (rolling, canary, or blue/green).
- Rollback path is tested, not assumed.
- CI/CD includes smoke checks and policy gates.
- Version compatibility between service and dependencies is verified.

Goal: safe change velocity without reliability surprises.

---

## 7. Final Readiness Gate

Before production cutover, I use three final checks:

1. Can on-call engineers diagnose common failures quickly?
2. Can we recover safely within agreed service objectives?
3. Is customer impact measurable in near real time?

If these cannot be answered clearly, the release is not ready.

---

## 8. Closing Note

Production readiness is not bureaucracy. It is how we protect users, teams, and delivery velocity at the same time.

---

## 9. Connect

- GitHub: https://github.com/shisian512
- LinkedIn: https://www.linkedin.com/in/tan-shi-sian
- Email: shisian001@gmail.com
