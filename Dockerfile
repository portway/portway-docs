FROM node:12.13.0-alpine

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /portway_docs

# Only copy package.json first to take advantage of docker caching
COPY package*.json ./

RUN npm install --only=production

COPY index.js ./
COPY output/ ./output/

CMD ["node", "index.js"]