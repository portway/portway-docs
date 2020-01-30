const express = require('express')
// do node server things

const PORT = 3003

const app = express()

app.use('/api', express.static('output', { index: ['api.html'] }))

app.listen(PORT, () => {
  console.log(`Portway docs running on ${PORT}`);
});