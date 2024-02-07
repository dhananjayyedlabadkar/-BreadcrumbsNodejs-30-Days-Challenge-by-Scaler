const express = require('express');
const app = express();


function requestLoggerMiddleware(req, res, next) {
    // Get current timestamp
    const timestamp = new Date().toISOString();
    // Get HTTP method of the incoming request
    const method = req.method;
    // Log the timestamp and HTTP method
    console.log(`${timestamp} - ${method} request received`);
    // Call next middleware in the chain
    next();
  }

  
// Add the requestLoggerMiddleware
app.use(requestLoggerMiddleware);

// Define your routes and other middleware as needed...
app.get('/', (req, res) => {
    res.send('Hello!! Its me Nodejs ');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
