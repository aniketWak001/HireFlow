# HireFlow

A scalable hiring and resume-processing platform built to demonstrate backend engineering

**Live API:** https://hireflow-api-0p76.onrender.com  
**API Docs:** https://hireflow-api-0p76.onrender.com/api/docs  
**Worker:** https://hireflow-worker-hbwe.onrender.com

---

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Local Setup](#local-setup)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [CI/CD](#cicd)
- [Deployment](#deployment)
- [Architecture Decision Records](#architecture-decision-records)

---

## Project Overview

HireFlow is a full-stack job portal and resume-processing platform. It is built with a focus on backend engineering depth — covering PostgreSQL, Redis caching, BullMQ background jobs, AWS S3, Docker, and GitHub Actions CI/CD.

The project intentionally avoids AI features and over-engineered microservices to stay focused on engineering fundamentals that matter in production systems.

**Key engineering areas covered:**
- JWT authentication with refresh token rotation
- Role-Based Access Control (RBAC) — Candidate, Recruiter, Admin
- Cursor-based pagination
- Redis caching with TTL and event-based invalidation
- Async resume parsing via BullMQ workers
- Email notifications via Resend
- AWS S3 for secure resume storage with pre-signed URLs
- Dockerized services with multi-stage builds
- GitHub Actions CI with Postgres and Redis service containers
- 77 tests (unit + integration) with 91%+ coverage

---

## Architecture

```
hireflow/
├── api/          — Express.js REST API (Node.js + TypeScript)
├── worker/       — BullMQ background worker (resume parsing + email)
├── frontend/     — React.js frontend (TypeScript + Tailwind CSS)
├── prisma/       — Shared Prisma schema and migrations
├── generated/    — Prisma generated client (auto-generated, not committed)
└── .github/      — GitHub Actions CI/CD workflows
```

**Request flow:**
```
Client → API → PostgreSQL (via Prisma)
                    ↓
              Redis (caching)
                    ↓
              BullMQ Queue (Redis)
                    ↓
              Worker Process
              ├── Parse resume (pdf-parse + AWS S3)
              └── Send email (Resend)
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js, TypeScript |
| Database | PostgreSQL, Prisma ORM v7 |
| Caching | Redis (Upstash in production) |
| Queues | BullMQ |
| File Storage | AWS S3 |
| Email | Resend |
| Frontend | React.js, TypeScript, Tailwind CSS |
| Testing | Vitest, Supertest |
| Containerization | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Deployment | Render (API + Worker), Neon (PostgreSQL), Upstash (Redis) |
| Monitoring | Sentry, UptimeRobot |
| Logging | Pino |

---

## Features

### Authentication
- Register and login with JWT access + refresh tokens
- Refresh token rotation with database storage
- Role-based access: Candidate, Recruiter, Admin

### Job System
- Recruiter: create, update, delete, close jobs
- Public: list jobs with search, filter by type/location, cursor-based pagination
- Redis caching on job listings (5 min TTL, invalidated on write)

### Application Pipeline
- Candidate: apply to jobs with cover letter
- Recruiter: view applicants, update status (Applied → Reviewed → Interview → Hired/Rejected)
- Candidate: track own application status

### Resume Processing
- Upload PDF resumes (max 5MB) stored on AWS S3
- BullMQ worker parses resume asynchronously (extracts name, email, skills)
- Secure pre-signed URLs for resume access (1 hour expiry)
- Job retry logic with exponential backoff (3 attempts)
- Dead-letter handling for failed jobs

### Email Notifications
- Application received confirmation
- Status change notification
- Interview invite notification
- Sent asynchronously via BullMQ + Resend

### Admin Analytics
- Total users, jobs, applications
- Breakdown by role and application status
- Redis cached (2 min TTL)

### Security
- Helmet.js for HTTP security headers
- Rate limiting — global (100 req/15 min) + auth routes (10 req/15 min)
- Zod input validation on all routes
- bcrypt password hashing (12 salt rounds)
- JWT secret rotation support

---

## Local Setup

### Prerequisites

- Node.js v22+
- Docker Desktop
- Git

### Step 1 — Clone the repository

```bash
git clone https://github.com/aniketWak001/HireFlow.git
cd HireFlow
```

### Step 2 — Install dependencies

```bash
# root dependencies (Prisma)
npm install

# API dependencies
cd api && npm install && cd ..

# Worker dependencies
cd worker && npm install && cd ..

# Frontend dependencies
cd frontend && npm install && cd ..
```

### Step 3 — Start Postgres and Redis with Docker

```bash
docker compose up -d
```

This starts:
- PostgreSQL on port `5432`
- Redis on port `6379`

Verify containers are running:

```bash
docker ps
```

### Step 4 — Set up environment variables

Copy the example env file for the API:

```bash
cp api/.env.example api/.env
```

Fill in the values — see [Environment Variables](#environment-variables) section below.

For the worker:

```bash
cp worker/.env.example worker/.env
```

Fill in the same `DATABASE_URL`, `REDIS_HOST`, `REDIS_PORT`, `AWS_*`, and `RESEND_API_KEY` values.

### Step 5 — Run database migrations

```bash
# from root
npx prisma migrate deploy
```

### Step 6 — Generate Prisma client

```bash
# from root
npx prisma generate
```

### Step 7 — Start the API

```bash
cd api
npm run dev
```

You should see:
```
Postgres connected
Redis connected
Server running on port 5000
```

### Step 8 — Start the Worker (in a separate terminal)

```bash
cd worker
npm run dev
```

You should see:
```
Worker process started
Resume worker: resume-processing
Email worker: email-notifications
Worker health server running on port 3001
```

### Step 9 — Start the Frontend (in a separate terminal)

```bash
cd frontend
npm run dev
```

### Step 10 — Verify everything is working

- API health check: http://localhost:5000/api/health
- API docs (Swagger): http://localhost:5000/api/docs
- Prisma Studio (DB viewer): `npx prisma studio` from root

---

## Environment Variables

### `api/.env`

```dotenv
PORT=5000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=hireflow
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/hireflow"

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_URL=redis://localhost:6379

# JWT
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=ap-southeast-2
AWS_S3_BUCKET_NAME=your_bucket_name

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com

# Sentry (optional for local)
SENTRY_DSN=your_sentry_dsn
```

### `worker/.env`

Same as `api/.env` but without `PORT`, `DB_*`, and JWT variables. Worker only needs:
- `DATABASE_URL`
- `REDIS_HOST`, `REDIS_PORT`, `REDIS_URL`
- `AWS_*`
- `RESEND_API_KEY`, `EMAIL_FROM`

---

## API Documentation

Full interactive API documentation is available at:
- **Local:** http://localhost:5000/api/docs
- **Production:** https://hireflow-api-0p76.onrender.com/api/docs

### Quick Reference

| Method | Endpoint | Auth | Role |
|---|---|---|---|
| POST | `/api/v1/auth/register` | No | — |
| POST | `/api/v1/auth/login` | No | — |
| POST | `/api/v1/auth/refresh` | No | — |
| POST | `/api/v1/auth/logout` | No | — |
| GET | `/api/v1/jobs` | No | — |
| GET | `/api/v1/jobs/:id` | No | — |
| POST | `/api/v1/jobs` | Yes | Recruiter |
| PATCH | `/api/v1/jobs/:id` | Yes | Recruiter |
| DELETE | `/api/v1/jobs/:id` | Yes | Recruiter |
| PATCH | `/api/v1/jobs/:id/close` | Yes | Recruiter |
| POST | `/api/v1/jobs/:id/apply` | Yes | Candidate |
| GET | `/api/v1/jobs/:id/applications` | Yes | Recruiter |
| GET | `/api/v1/applications` | Yes | Candidate |
| PATCH | `/api/v1/applications/:id/status` | Yes | Recruiter |
| POST | `/api/v1/resumes` | Yes | Candidate |
| GET | `/api/v1/resumes` | Yes | Candidate |
| DELETE | `/api/v1/resumes/:id` | Yes | Candidate |
| GET | `/api/v1/admin/analytics` | Yes | Admin |

---

## Testing

```bash
# run all tests
cd api && npm run test

# run with coverage
cd api && npm run coverage

# watch mode
cd api && npm run test:watch
```

**Test breakdown:**
- 7 unit tests — password hashing, token generation, RBAC middleware
- 70 integration tests — all API endpoints with real DB and mocked S3
- Coverage: 91%+

Tests use a real PostgreSQL database (local Docker or CI service container) and mock AWS S3 using `aws-sdk-client-mock`.

---

## CI/CD

GitHub Actions runs on every push and pull request to `main` and `develop`.

**API job:**
1. Install dependencies
2. Install root dependencies and generate Prisma client
3. Run database migrations
4. ESLint
5. Prettier check
6. Run tests (with Postgres + Redis service containers)
7. Coverage report
8. TypeScript build
9. Docker build

**Worker job:** Same pipeline without migrations.

**Frontend job:** Lint + build.

Auto-deploy to Render triggers on merge to `main`.

---

## Deployment

| Service | Platform | Notes |
|---|---|---|
| API | Render (free tier) | Docker deployment, auto-deploy on push |
| Worker | Render (free tier) | Docker deployment, health server on port 10000 |
| PostgreSQL | Neon.tech (free tier) | Serverless PostgreSQL, Singapore region |
| Redis | Upstash (free tier) | Serverless Redis, TLS enabled |
| Resume Storage | AWS S3 | ap-southeast-2, private bucket, pre-signed URLs |
| Email | Resend | Verified domain mygsts.in |
| Error Monitoring | Sentry (free tier) | Captures unexpected errors |
| Uptime Monitoring | UptimeRobot | Pings every 5 minutes to prevent Render spin-down |

---

## Architecture Decision Records

### ADR 001 — PostgreSQL over MongoDB

**Decision:** Use PostgreSQL instead of MongoDB.

**Reasoning:** The data model has clear relational structure — users, jobs, applications, and resumes have well-defined relationships and foreign key constraints. PostgreSQL enables proper joins, indexing strategies, and transactions which are important for the application pipeline. MongoDB would have required manual management of these relationships.

**Trade-off:** More rigid schema requires migrations for changes, but this is acceptable given the structured nature of hiring data.

---

### ADR 002 — Prisma v7 with PrismaPg adapter

**Decision:** Use Prisma ORM v7 with the `@prisma/adapter-pg` driver adapter.

**Reasoning:** Prisma v7 requires explicit driver adapters instead of the built-in query engine binary. This gives more control over the connection pool and is the correct approach for production deployments. The `PrismaPg` adapter wraps the `pg` library directly.

**Trade-off:** More setup compared to Prisma v5/v6, but better production characteristics.

---

### ADR 003 — Shared Prisma schema at root

**Decision:** Place `prisma/schema.prisma` at the monorepo root rather than inside `api/`.

**Reasoning:** Both the `api/` and `worker/` services need database access. Maintaining two separate schemas would create drift risk. A single shared schema with a single migration history ensures both services always use the same database structure.

**Trade-off:** CI and Docker builds require an extra step to install root dependencies and run `prisma generate` before building individual services.

---

### ADR 004 — BullMQ for background job processing

**Decision:** Use BullMQ with Redis as the job broker for resume parsing and email notifications.

**Reasoning:** Resume parsing is CPU-intensive and should not block the API response. BullMQ provides reliable job queuing with retry logic, exponential backoff, dead-letter queues, and job progress tracking out of the box. Processing asynchronously also means the API can respond immediately while the worker handles the heavy lifting.

**Trade-off:** Adds operational complexity — requires a separate worker process and Redis dependency.

---

### ADR 005 — Cursor-based pagination over offset pagination

**Decision:** Use cursor-based pagination for job listings instead of offset/page-based pagination.

**Reasoning:** Offset pagination has a known performance problem — `OFFSET 1000` requires the database to scan and discard 1000 rows before returning results. At scale this becomes slow. Cursor-based pagination uses the last item's ID as the next page token, enabling consistent O(log n) lookups via the index.

**Trade-off:** Cannot jump to arbitrary pages (e.g., "go to page 5"), but for infinite scroll or "load more" UIs this is not needed.

---

### ADR 006 — Redis caching strategy

**Decision:** Cache job listings (5 min TTL) and admin analytics (2 min TTL) with event-based invalidation on writes.

**Reasoning:** Job listings are the most frequently accessed endpoint and are expensive to query (full-text search, joins, ordering). Caching reduces database load significantly. Cache is invalidated immediately on any write operation (create, update, delete, close) to prevent stale data.

**Trade-off:** Cache misses on the first request after invalidation add latency, but this is acceptable given the write frequency of job data.

---

### ADR 007 — No AI features

**Decision:** Intentionally excluded AI-powered resume matching, job recommendations, and similar features.

**Reasoning:** AI features would obscure the backend engineering fundamentals this project aims to demonstrate. They also introduce dependencies on external AI APIs that are outside the core skill set being showcased.

---

## Author

**Aniket Wakchaure**  
Final-year B.E. Computer Engineering student  
Amrutvahini College of Engineering, Sangamner  
GitHub: [@aniketWak001](https://github.com/aniketWak001)  
Email: waniket011@gmail.com