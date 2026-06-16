FROM node:22-alpine AS builder

WORKDIR /app

COPY worker/package*.json ./

RUN npm ci

COPY worker/src ./src
COPY worker/tsconfig.json ./
COPY generated ./generated

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY worker/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated

CMD ["node", "dist/server.js"]