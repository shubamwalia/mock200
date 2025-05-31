const express = require('express');
const app = express();

// Middleware to handle all requests and respond with a 200 status code
app.use((req, res) => {
  res.status(200).end();
});

// If not production, start the server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the Express app for production
module.exports = app; 