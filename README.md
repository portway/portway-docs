# Portway Docs

This project uses [Create React App](https://github.com/facebook/create-react-app), [Fastify](https://www.fastify.io/), and [Redoc](https://github.com/Redocly/redoc).

## Deployment

See [Deploying Portway Docs](https://portway.app/d/project/3/document/5)

## Scripts

`npm run dev` – Runs the CRA webpack-dev-server for local development. This loads the previously built API spec
`npm run build` – Builds the production React app
`npm start` - Starts the Fastify server

**Note** This command creates an unused file. App currently just directly loads openapi.yaml
`npm run generate-docs` – Builds the API spec

## Building Docker image
`docker build -t bonkeybong/portway_docs .`

## Linting

Run `npx speccy lint public/docs/openapi.yml`

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
