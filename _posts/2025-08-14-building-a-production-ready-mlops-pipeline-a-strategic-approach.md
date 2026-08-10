---
title: "From Roadmap to Reality: Key Learnings from My MLOps Project"
excerpt: "A practical reflection on building an end-to-end MLOps pipeline and why local-first integration with Docker Compose mattered."
date: 2025-08-14
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

# Building an MLOps Pipeline: A Practical Reflection

I have been building an end-to-end MLOps pipeline for regression tasks, and this phase has taught me a lot about systems thinking beyond model training.

One major lesson was to focus on local integration first. I used **Docker Compose** to validate how core components behaved together before scaling further. This included orchestration with **Airflow**, experiment tracking in **MLflow**, and model serving through **FastAPI**.

The project is still in progress, especially around automated retraining and drift monitoring, but it already provides a realistic view of how MLOps components interact in production-like workflows.

I am sharing this openly to document the process, learn faster, and invite feedback from others building similar systems.

Check out the project here: [https://github.com/shisian512/mlops](https://github.com/shisian512/mlops)

---
