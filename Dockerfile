FROM openjdk:latest

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV development

WORKDIR /docs

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
RUN source ~./bash_profile
RUN nvm install 12.13.0

# Only copy package.json first to take advantage of docker caching
COPY package*.json ./

RUN npm install

# COPY . .
COPY docs/ ./source/

RUN npx openapi-generator generate --skip-validate-spec -i ./source -g ruby -o /output