const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

// Define a route for the API
app.get('/', (req, res) => {
  res.send('Hello, welcome to my API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
