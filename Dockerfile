FROM node:18-bookworm AS builder

RUN apt-get -y update \
    && apt-get install -y git \
    && apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare yarn@stable --activate

COPY . /srv/codybentley.dev

WORKDIR /srv/codybentley.dev

RUN yarn && yarn build-only

FROM nginx:alpine
COPY --from=builder /srv/codybentley.dev/dist/. /usr/share/nginx/html/.
