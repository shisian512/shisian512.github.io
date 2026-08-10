---
title: "Building a Production-Ready MLOps Pipeline: From Data to Deployment"
excerpt: "How I built an end-to-end MLOps pipeline for regression, covering data versioning, deployment, monitoring, and CI/CD."
date: 2025-07-30
author: "Tan Shi Sian"
categories:
  - Blog
tags:
  - MLOps
  - ML
  - MLflow
  - FastAPI
  - DevOps
  - Regression
  - CI/CD
---

Over the past few weeks, I have been building a production-oriented MLOps pipeline for regression tasks. My goal is to implement an end-to-end system that reflects real deployment needs: modularity, automation, reproducibility, and observability.

The project is still evolving, but it has become a strong learning benchmark in my MLOps journey.

---

## What Does the Pipeline Include?

The system covers the full lifecycle of an ML project — from data ingestion to deployment, with CI/CD and monitoring in place:

- Data Processing: pandas + DVC for version-controlled pipelines, because tracking data changes is just as important as tracking code changes.
- Model Training & Registry: scikit-learn + MLflow for experiment tracking and model management, so I can compare different models and versions without getting lost.
- Online Inference API: FastAPI, containerized with Docker for scalable serving.
- Interactive Dashboard: Streamlit for simple visualization and interaction.
- Monitoring & Alerts: Prometheus + Grafana for performance metrics and system health. So I'll know when something's wrong before it becomes a major problem.
- CI/CD & Automation: GitHub Actions for continuous integration and deployment.
- Drift Detection: EvidentlyAI + Airflow for scheduled data and model drift checks.

---

## Why I Built This

There are three key motivations behind this project:

1.  To bridge the gap between experimentation and production — understanding how ML systems are built, deployed, and maintained in real-world scenarios.
2.  To get hands-on experience with modern MLOps tools and workflows — including data versioning, pipeline orchestration, observability, and CI/CD.
3.  To document and reflect on my learning process — including design decisions, trade-offs, implementation challenges, and lessons learned.

This project represents a milestone in my transition from model-centric development to system-level ML engineering.

---

## Architecture Snapshot

Here’s a high-level view of the current system (auto-generated and evolving):
![MLOps Architecture Diagram](https://raw.githubusercontent.com/shisian512/mlops/main/diagram/mlops_e2e_pipeline.png)

> I use architecture diagrams to understand component relationships and track system evolution over time.

---

## Progress Over Perfection

This project is intentionally public, imperfect, and iterative.

I document each step, including design choices, integration pain points, and technical trade-offs, both as a personal reference and to help others on a similar path.

Feel free to:
- Ask questions
- Share feedback
- Fork the repo and adapt it for your own use case

---

## Project Links

GitHub: [shisian512/mlops](https://github.com/shisian512/mlops)
Project Focus: End-to-end regression pipeline with production-level MLOps features
Upcoming Work: CI/CD extensions, real-time drift alerts, cloud deployment modules and more.

---

## Let's Connect

Are you building MLOps pipelines, deploying ML systems, or navigating similar challenges in production ML?

I would love to exchange ideas and learn from your experience.

* [Connect with me on LinkedIn](https://www.linkedin.com/in/tan-shi-sian) for project updates and lessons learned.
* Reach me at **[shisian001@gmail.com](mailto:shisian001@gmail.com)** for collaboration or technical discussion.
* [Check out the project on GitHub](https://github.com/shisian512/mlops) and feel free to share feedback.

> Whether you are just starting with MLOps or already deploying at scale, I am always open to learning together.

---
