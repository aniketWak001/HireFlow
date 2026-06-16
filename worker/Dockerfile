FROM node:22-alpine AS builder

WORKDIR /app/worker

COPY worker/package*.json ./

RUN npm ci

COPY worker/src ./src
COPY worker/tsconfig.json ./

# mirror local structure: /app/generated mirrors hireflow/generated
COPY generated /app/generated

RUN npm run build

FROM node:22-alpine

WORKDIR /app/worker

COPY worker/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/worker/dist ./dist
COPY --from=builder /app/generated /app/generated

CMD ["node", "dist/server.js"]