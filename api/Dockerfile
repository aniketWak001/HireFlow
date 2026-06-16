FROM node:22-alpine AS builder

WORKDIR /app

COPY api/package*.json ./

RUN npm ci

COPY api/src ./src
COPY api/tsconfig.json ./
COPY generated ./generated

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY api/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated

EXPOSE 5000

CMD ["node", "dist/server.js"]