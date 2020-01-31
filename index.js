const express = require('express')

const PORT = 3003
const app = express()

app.use('/api', express.static('output', { index: ['api.html'] }))

// This is temporarily sending the api docs page because
// we need this app to respond to the base path in order
// to get letsencrypt to issue a cert
app.get('/', (req, res) => {
  res.status(200).sendFile("./output/api.html", { root: __dirname });
})

app.use((req, res) => {
  res.status(404).sendFile('./static_pages/404.html', {root: __dirname})
})

app.listen(PORT, () => {
  console.log(`Portway docs running on ${PORT}`);
});