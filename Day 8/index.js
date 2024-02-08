const express = require('express');
const app = express();

// Error handling middleware
function errorHandler(err, req, res, next) {
  if (err instanceof PositiveIntegerError) {
    res.status(400).json({ error: 'Parameter "number" must be a positive integer' });
  } else {
    next(err);
  }
}

// Custom error class for positive integer error
class PositiveIntegerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PositiveIntegerError';
  }
}

// Middleware to check if the "number" parameter is a positive integer
function checkPositiveInteger(req, res, next) {
  const number = parseInt(req.query.number);
  if (!Number.isInteger(number) || number <= 0) {
    next(new PositiveIntegerError('Parameter "number" must be a positive integer'));
  } else {
    next();
  }
}

// Express route handler
app.get('/positive', checkPositiveInteger, (req, res) => {
  const number = parseInt(req.query.number);
  res.json({ message: `Success! ${number} is a positive integer` });
});

// Register error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
