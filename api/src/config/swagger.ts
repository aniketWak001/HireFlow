import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "HireFlow API",
    version: "1.0.0",
    description:
      "A scalable hiring and resume-processing platform API built with Node.js, TypeScript, PostgreSQL, Redis, and BullMQ.",
    contact: {
      name: "Aniket Wakchaure",
      email: "waniket011@gmail.com",
      url: "https://github.com/aniketWak001",
    },
  },
  servers: [
    {
      url: "https://hireflow-api-0p76.onrender.com",
      description: "Production server",
    },
    {
      url: "http://localhost:5000",
      description: "Local development server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          name: { type: "string" },
          email: { type: "string", format: "email" },
          role: { type: "string", enum: ["candidate", "recruiter", "admin"] },
          isVerified: { type: "boolean" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      Job: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          title: { type: "string" },
          description: { type: "string" },
          location: { type: "string" },
          jobType: {
            type: "string",
            enum: ["full_time", "part_time", "remote", "contract"],
          },
          salaryMin: { type: "integer" },
          salaryMax: { type: "integer" },
          skillsRequired: { type: "array", items: { type: "string" } },
          status: { type: "string", enum: ["open", "closed", "draft"] },
          createdAt: { type: "string", format: "date-time" },
        },
      },
      Application: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          candidateId: { type: "string", format: "uuid" },
          jobId: { type: "string", format: "uuid" },
          status: {
            type: "string",
            enum: ["applied", "reviewed", "interview", "hired", "rejected"],
          },
          coverLetter: { type: "string" },
          atsScore: { type: "integer" },
          appliedAt: { type: "string", format: "date-time" },
        },
      },
      Resume: {
        type: "object",
        properties: {
          id: { type: "string", format: "uuid" },
          candidateId: { type: "string", format: "uuid" },
          fileName: { type: "string" },
          parseStatus: {
            type: "string",
            enum: ["pending", "processing", "done", "failed"],
          },
          parsedSkills: { type: "array", items: { type: "string" } },
          uploadedAt: { type: "string", format: "date-time" },
        },
      },
      Error: {
        type: "object",
        properties: {
          success: { type: "boolean", example: false },
          message: { type: "string" },
        },
      },
      Success: {
        type: "object",
        properties: {
          success: { type: "boolean", example: true },
          data: { type: "object" },
        },
      },
    },
  },
  paths: {
    "/api/health": {
      get: {
        tags: ["Health"],
        summary: "Health check",
        responses: {
          200: {
            description: "API is running",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { status: { type: "string", example: "ok" } },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Register a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "email", "password", "role"],
                properties: {
                  name: { type: "string", example: "John Doe" },
                  email: {
                    type: "string",
                    format: "email",
                    example: "john@example.com",
                  },
                  password: {
                    type: "string",
                    minLength: 8,
                    example: "password123",
                  },
                  role: {
                    type: "string",
                    enum: ["candidate", "recruiter"],
                    example: "candidate",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "User registered successfully" },
          400: { description: "Validation error" },
          409: { description: "Email already registered" },
        },
      },
    },
    "/api/v1/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "password"],
                properties: {
                  email: {
                    type: "string",
                    format: "email",
                    example: "john@example.com",
                  },
                  password: { type: "string", example: "password123" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login successful",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    success: { type: "boolean" },
                    data: {
                      type: "object",
                      properties: {
                        accessToken: { type: "string" },
                        refreshToken: { type: "string" },
                        user: { $ref: "#/components/schemas/User" },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { description: "Invalid credentials" },
        },
      },
    },
    "/api/v1/auth/refresh": {
      post: {
        tags: ["Auth"],
        summary: "Refresh access token",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["refreshToken"],
                properties: {
                  refreshToken: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "New access token returned" },
          401: { description: "Invalid or expired refresh token" },
        },
      },
    },
    "/api/v1/auth/logout": {
      post: {
        tags: ["Auth"],
        summary: "Logout user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["refreshToken"],
                properties: {
                  refreshToken: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Logged out successfully" },
        },
      },
    },
    "/api/v1/jobs": {
      get: {
        tags: ["Jobs"],
        summary: "List all open jobs with search, filter, and pagination",
        parameters: [
          {
            in: "query",
            name: "search",
            schema: { type: "string" },
            description: "Search by title or description",
          },
          {
            in: "query",
            name: "jobType",
            schema: {
              type: "string",
              enum: ["full_time", "part_time", "remote", "contract"],
            },
          },
          {
            in: "query",
            name: "location",
            schema: { type: "string" },
          },
          {
            in: "query",
            name: "cursor",
            schema: { type: "string" },
            description: "Cursor for pagination",
          },
          {
            in: "query",
            name: "limit",
            schema: { type: "integer", default: 10 },
          },
        ],
        responses: {
          200: { description: "List of jobs returned" },
        },
      },
      post: {
        tags: ["Jobs"],
        summary: "Create a new job (recruiter only)",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["title", "description", "jobType"],
                properties: {
                  title: { type: "string", example: "Backend Engineer" },
                  description: { type: "string" },
                  location: { type: "string", example: "Remote" },
                  jobType: {
                    type: "string",
                    enum: ["full_time", "part_time", "remote", "contract"],
                  },
                  salaryMin: { type: "integer", example: 50000 },
                  salaryMax: { type: "integer", example: 80000 },
                  skillsRequired: {
                    type: "array",
                    items: { type: "string" },
                    example: ["Node.js", "TypeScript"],
                  },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "Job created successfully" },
          401: { description: "Unauthorized" },
          403: { description: "Forbidden — recruiters only" },
        },
      },
    },
    "/api/v1/jobs/{id}": {
      get: {
        tags: ["Jobs"],
        summary: "Get job by ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        responses: {
          200: { description: "Job returned" },
          404: { description: "Job not found" },
        },
      },
      patch: {
        tags: ["Jobs"],
        summary: "Update a job (recruiter owner only)",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  description: { type: "string" },
                  location: { type: "string" },
                  jobType: {
                    type: "string",
                    enum: ["full_time", "part_time", "remote", "contract"],
                  },
                  salaryMin: { type: "integer" },
                  salaryMax: { type: "integer" },
                  skillsRequired: {
                    type: "array",
                    items: { type: "string" },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Job updated" },
          403: { description: "Forbidden" },
          404: { description: "Job not found" },
        },
      },
      delete: {
        tags: ["Jobs"],
        summary: "Delete a job (recruiter owner only)",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        responses: {
          200: { description: "Job deleted" },
          403: { description: "Forbidden" },
          404: { description: "Job not found" },
        },
      },
    },
    "/api/v1/jobs/{id}/close": {
      patch: {
        tags: ["Jobs"],
        summary: "Close a job (recruiter owner only)",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        responses: {
          200: { description: "Job closed" },
          400: { description: "Job already closed" },
          403: { description: "Forbidden" },
        },
      },
    },
    "/api/v1/jobs/{id}/apply": {
      post: {
        tags: ["Applications"],
        summary: "Apply to a job (candidate only)",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  coverLetter: { type: "string", minLength: 10 },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "Application submitted" },
          400: { description: "Job is closed" },
          409: { description: "Already applied" },
        },
      },
    },
    "/api/v1/jobs/{id}/applications": {
      get: {
        tags: ["Applications"],
        summary: "Get all applicants for a job (recruiter only)",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        responses: {
          200: { description: "Applicants returned" },
          403: { description: "Forbidden" },
        },
      },
    },
    "/api/v1/applications": {
      get: {
        tags: ["Applications"],
        summary: "Get candidate's own applications (candidate only)",
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "Applications returned" },
          403: { description: "Forbidden" },
        },
      },
    },
    "/api/v1/applications/{id}/status": {
      patch: {
        tags: ["Applications"],
        summary: "Update application status (recruiter only)",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["status"],
                properties: {
                  status: {
                    type: "string",
                    enum: [
                      "applied",
                      "reviewed",
                      "interview",
                      "hired",
                      "rejected",
                    ],
                  },
                },
              },
            },
          },
        },
        responses: {
          200: { description: "Status updated" },
          403: { description: "Forbidden" },
          404: { description: "Application not found" },
        },
      },
    },
    "/api/v1/resumes": {
      post: {
        tags: ["Resumes"],
        summary: "Upload a resume (candidate only)",
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  resume: {
                    type: "string",
                    format: "binary",
                    description: "PDF file only, max 5MB",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: { description: "Resume uploaded and queued for parsing" },
          400: { description: "Invalid file type or no file uploaded" },
          403: { description: "Forbidden" },
        },
      },
      get: {
        tags: ["Resumes"],
        summary:
          "Get candidate's resumes with pre-signed URLs (candidate only)",
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: "Resumes returned with download URLs" },
          403: { description: "Forbidden" },
        },
      },
    },
    "/api/v1/resumes/{id}": {
      delete: {
        tags: ["Resumes"],
        summary: "Delete a resume (candidate only)",
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string", format: "uuid" },
          },
        ],
        responses: {
          200: { description: "Resume deleted" },
          403: { description: "Forbidden" },
          404: { description: "Resume not found" },
        },
      },
    },
    "/api/v1/admin/analytics": {
      get: {
        tags: ["Admin"],
        summary: "Get platform analytics (admin only)",
        security: [{ bearerAuth: [] }],
        responses: {
          200: {
            description: "Analytics returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    users: {
                      type: "object",
                      properties: {
                        total: { type: "integer" },
                        byRole: { type: "array" },
                      },
                    },
                    jobs: {
                      type: "object",
                      properties: {
                        total: { type: "integer" },
                        active: { type: "integer" },
                      },
                    },
                    applications: {
                      type: "object",
                      properties: {
                        total: { type: "integer" },
                        byStatus: { type: "array" },
                      },
                    },
                  },
                },
              },
            },
          },
          403: { description: "Forbidden" },
        },
      },
    },
  },
};

export function setupSwagger(app: Express) {
  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      customSiteTitle: "HireFlow API Docs",
    }),
  );
}
