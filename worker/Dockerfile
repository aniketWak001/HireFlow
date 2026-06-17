FROM node:22-alpine AS builder

WORKDIR /app/worker

COPY worker/package*.json ./

RUN npm ci

COPY worker/src ./src
COPY worker/tsconfig.json ./
COPY generated /app/generated

RUN npm run build

FROM node:22-alpine

WORKDIR /app/worker

COPY worker/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/worker/dist ./dist
COPY --from=builder /app/generated /app/generated

# copy Prisma runtime dependencies from builder
COPY --from=builder /app/worker/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/worker/node_modules/@prisma/client-runtime-utils ./node_modules/@prisma/client-runtime-utils

CMD ["node", "dist/server.js"]