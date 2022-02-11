const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mi server express');
});

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}/`);
});
