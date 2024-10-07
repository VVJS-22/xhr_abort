const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Counters for each endpoint
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

// Delay middleware
const delayMiddleware = (req, res, next) => {
  setTimeout(() => {
    next(); // Proceed to the next middleware or route after 5 seconds
  }, 5000); // 5-second delay
};

// Apply the delay middleware to the API routes
app.use('/api', delayMiddleware);

// Define API endpoints
app.post('/api/endpoint1', (req, res) => {
  count1++;
  const param = req.body.param;
  res.json({ message: `Endpoint 1 called with param: ${param}`, count: count1 });
});

app.post('/api/endpoint2', (req, res) => {
  count2++;
  const param = req.body.param;
  res.json({ message: `Endpoint 2 called with param: ${param}`, count: count2 });
});

app.post('/api/endpoint3', (req, res) => {
  count3++;
  const param = req.body.param;
  res.json({ message: `Endpoint 3 called with param: ${param}`, count: count3 });
});

app.post('/api/endpoint4', (req, res) => {
  count4++;
  const param = req.body.param;
  res.json({ message: `Endpoint 4 called with param: ${param}`, count: count4 });
});

app.post('/api/endpoint5', (req, res) => {
  count5++;
  const param = req.body.param;
  res.json({ message: `Endpoint 5 called with param: ${param}`, count: count5 });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
