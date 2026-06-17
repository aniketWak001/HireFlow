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

# copy node_modules to /app level so Prisma runtime can find its deps
# when resolving from /app/generated/prisma/runtime/
COPY --from=builder /app/worker/node_modules /app/node_modules

CMD ["node", "dist/server.js"]