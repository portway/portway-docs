# portway-docs
API docs for Portway

## Linting
Run `npx speccy lint -s operation-tags  docs/openapi.yml`

## Bundling
To build the html files from the OpenAPI yaml:
`npx redoc-cli bundle docs/openapi.yml`