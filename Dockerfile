FROM node:22.14.0-alpine AS base

FROM base AS build

WORKDIR /app

COPY package.json pnpm-*.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY src ./src
COPY public ./public
COPY next.config.ts tsconfig.json .postcssrc.json ./
RUN pnpm build


FROM base AS production

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --chown=nodejs:nodejs --from=build /app/node_modules ./node_modules
COPY --chown=nodejs:nodejs --from=build /app/public ./public
COPY --chown=nodejs:nodejs --from=build /app/.next ./next
COPY --chown=nodejs:nodejs --from=build /app/package.json /app/pnpm-*.yaml ./
RUN RUN corepack enable && pnpm install --frozen-lockfile --prod 

USER nodejs
EXPOSE 3000

CMD ["pnpm", "start"]
