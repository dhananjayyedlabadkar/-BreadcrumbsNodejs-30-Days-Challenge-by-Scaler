const express = require('express');

function loggingMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const headers = req.headers;
  const body = req.body;

  console.log(`[${timestamp}] ${method} ${url}`);
  console.log('Headers:', headers);
  console.log('Body:', body);

  next();
}

const app = express();
app.use(express.json());
app.use(loggingMiddleware);

app.get('/', (req, res) => {
  res.send('Day 15 Completed : Login requests');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
