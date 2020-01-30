# portway-docs
API docs for Portway

## Linting
Run `npx speccy lint docs/openapi.yml`

## Generate API doc html
To build the html files from the OpenAPI yaml:
`npm run generate-docs`

## Building Docker image
`docker build -t bonkeybong/portway_docs .`

## Running the node.js server
`npm start`