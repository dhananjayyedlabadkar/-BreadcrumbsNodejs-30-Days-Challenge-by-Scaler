const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

// Apply rate limiting middleware
const limiter = rateLimit({
  windowMs:  60 * 1000, // 15 minutes
  max: 7, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use(limiter);

// Route that demonstrates rate limiting
app.get('/', (req, res) => {
  res.send('Day 12/30 challenge completed , Reached the endpoint');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
