# Portway Docs

This project uses [Create React App](https://github.com/facebook/create-react-app), [Fastify](https://www.fastify.io/), and [Redoc](https://github.com/Redocly/redoc).

## Deployment

See [Deploying Portway Docs](https://portway.app/d/project/3/document/5)

## Scripts

`npm run dev` – Runs the CRA webpack-dev-server for local development. This loads the previously built API spec<br />
`npm run build` – Builds the production React app<br />
`npm start` - Starts the Fastify server<br />
`npm run generate-spec` – Builds the API spec and puts it in public. The Dockerfile runs this step<br />

## Building Docker image
  ```bash
  docker build -t bonkeybong/portway_docs .
  ```

## Linting

Run
  ```bash
  npx speccy lint public/spec/openapi.yml
  ```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
