const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/status', (req, res) => {
  res.send('Pipeline working good');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

