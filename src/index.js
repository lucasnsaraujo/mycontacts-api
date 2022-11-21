const express = require('express');

const app = express();

const PORT = 1234;

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => {
  console.log(`💻 Server started @ http://localhost:${PORT}`);
});
