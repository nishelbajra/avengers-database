const express = require('express');
const app = express();
const { characters, findCharacterById } = require('./data');

// Serve static files from public folder
app.use(express.static('public'));

// HOME ROUTE - serves index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API ROUTE - returns all characters as JSON
app.get('/characters', (req, res) => {
  res.json(characters);
});

// DETAIL API ROUTE - returns one character as JSON
app.get('/characters/:id', (req, res) => {
  const character = findCharacterById(req.params.id);

  if (!character) {
    return res.status(404).sendFile(__dirname + '/public/index.html');
  }

  // serve index.html and let JS handle the view
  res.sendFile(__dirname + '/public/index.html');
});

// 404 CATCH-ALL
app.get('*splat', (req, res) => {
  res.status(404).sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));