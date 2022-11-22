const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`💻 Server started @ http://localhost:${PORT}`);
});
