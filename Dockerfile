FROM node:24-alpine AS builder

WORKDIR /client

RUN npm install -g pnpm 

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY public ./public
COPY src ./src
COPY components.json ./
COPY eslint.config.mjs ./
COPY next.config.ts ./
COPY postcss.config.mjs ./
COPY tsconfig.json ./

RUN pnpm build

FROM nginx:alpine

COPY nginx.conf /etc/nginx
COPY --from=builder /client/out /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]