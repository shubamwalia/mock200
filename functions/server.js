const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Middleware to handle all requests and respond with a 200 status code
app.use((req, res) => {
  res.status(200).end();
});

// Export the serverless handler
module.exports.handler = serverless(app); 