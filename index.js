const express = require('express');
const app = express();

// Middleware to handle all requests
app.use((req, res) => {
  res.status(200).end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 