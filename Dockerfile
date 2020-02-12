FROM node:12.13.0-alpine

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /portway_docs

# Only copy package.json first to take advantage of docker caching
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run generate-docs
RUN npm run build

RUN rm -rf node_modules/
RUN rm -rf src/
RUN rm -rf public/

ENV NODE_ENV production
RUN npm install --only=production

CMD ["npm", "start"]
