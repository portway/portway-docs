const express = require('express')

const PORT = 3003
const app = express()

app.use('/api', express.static('output', { index: ['api.html'] }))

app.use((req, res) => {
  res.status(404).sendFile('./static_pages/404.html', {root: __dirname})
})

app.listen(PORT, () => {
  console.log(`Portway docs running on ${PORT}`);
});