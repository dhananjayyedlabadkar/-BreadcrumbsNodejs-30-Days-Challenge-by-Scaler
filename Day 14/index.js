// Object to store cached responses
const cache = {};

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function cachingMiddleware(req, res, next) {
  const url = req.url;

  // Check if the response is cached
  if (cache[url] && cache[url].expirationTime > Date.now()) {
    // Return cached response
    res.send(cache[url].data);
    return;
  }

  // Cache the response
  const originalSend = res.send;
  res.send = function (data) {
    cache[url] = {
      data: data,
      expirationTime: Date.now() + (60 * 1000) // Cache expiration time (1 minute)
    };
    originalSend.apply(res, arguments);
  };

  next();
}

// Example usage:
const express = require('express');
const app = express();

// Apply caching middleware to all routes
app.use(cachingMiddleware);

// Define routes
app.get('/', (req, res) => {
  res.send('This is the that you requested!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
