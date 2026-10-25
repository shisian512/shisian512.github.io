# Project purpose
Personal portfolio for Tan Shi Sian, highlighting Site Reliability Engineering, DevOps, platform engineering, MLOps, and AI infrastructure experience.

# Current status
- Jekyll portfolio with home, About, Projects, Contact, and article/archive pages.
- CV page added at `/cv/`; top navigation links to it.
- Profile and project content updated from the supplied CV. Mini AI Factory is documented as an existing portfolio project; its Argo CD live sync is explicitly unverified.
- Public CV page omits the phone number from the source document.

# Architecture and key files
- `_config.yml`: Jekyll settings, Minimal Mistakes remote theme, plugins, author, and defaults.
- `_data/navigation.yml`: site navigation.
- `index.html`: home page content using the theme's home layout.
- `_pages/`: About, CV, Projects, and Contact pages; included by Jekyll config.
- `_posts/`: blog posts.
- `Gemfile`: GitHub Pages Jekyll dependencies.

# Development environment
- Active workspace is Windows PowerShell.
- Site uses Jekyll through the `github-pages` Ruby gem and the Minimal Mistakes remote theme.
- Ruby and Bundler are not available in the active PowerShell environment.

# How to run and test
- Install dependencies with `bundle install`.
- Serve locally with `bundle exec jekyll serve`.
- Build with `bundle exec jekyll build`.
- Front matter, the CV permalink, navigation entry, profile CV link, and `git diff --check` were verified.
- A Jekyll build was not run because Ruby and Bundler are unavailable.

# Deployment workflow
- The configured site URL is `https://shisian512.github.io`.
- Hosting/deployment workflow was not verified in this session; no workflow file was found in the inspected root listing.

# Important technical decisions
- Content pages live under `_pages` and use explicit permalinks.
- Keep project status factual; the Mini AI Factory Argo CD synchronization has not been verified.
- Do not publish private contact details from the source CV unless explicitly requested.

# Known issues and next steps
1. Run a local Jekyll build and verify the `/cv/` and navigation output.
2. Review the live CV and profile after the next site deployment.

# Last updated
2026-10-25
