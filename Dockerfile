# This is a multi-stage Docker file that requires at least Docker 17.05
# https://docs.docker.com/engine/userguide/eng-image/multistage-build/

# ---- base image -----
FROM node:14 as BASE
WORKDIR /app
# cache files
COPY package-lock.json /app
COPY package.json /app
RUN npm ci
# copy src
COPY . /app
RUN npm run build:app
ENV BROWSERSLIST_IGNORE_OLD_DATA=true

# ---- build release app ----
FROM BASE as BUILD
WORKDIR /app
RUN npm ci --production

# ---- prod image stage ----
FROM node:14-slim as RELEASE
USER node
EXPOSE 5000
WORKDIR /app
COPY --chown=node:node --from=BUILD /app /app
ENV BROWSERSLIST_IGNORE_OLD_DATA=true
HEALTHCHECK --start-period=5s CMD curl -f http://localhost:5000/ping || exit 1
CMD ["npx", "serve", "-u", "build"]
