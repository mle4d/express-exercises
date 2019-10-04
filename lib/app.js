const express = require('express');
const app = express();

const colors = [
  { name: 'Pink', hex: 'FFB5E8', r: 251, g: 181, b: 233 },
  { name: 'Purple', hex: 'B28DFF', r: 178, g: 140, b: 255 },
  { name: 'Green', hex: 'AFF8D8', r: 175, g: 248, b: 215 },
  { name: 'Blue', hex: 'ACE7FF', r: 171, g: 231, b: 255 },
  { name: 'Yellow', hex: 'FFFFD1', r: 255, g: 254, b: 209 }
];

app.use(express.static('./public'));

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});

app.get('/api/v1/colors/:name', (req, res) => {
  const color = colors.find(color => color.name === req.params.name);
  res.send(color);
});

module.exports = app; 

