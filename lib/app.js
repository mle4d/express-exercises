const express = require('express');
const app = express();

const colors = [
  { name: 'Honey Dew', hex: 'F0FFF0', r: 240, g: 255, b: 240 },
  { name: 'Mint Cream', hex: 'F5FFFA', r: 245, g: 255, b: 250 },
  { name: 'Misty Rose', hex: 'FFE4E1', r: 255, g: 228, b: 225 },
  { name: 'Lavender Blush', hex: 'FFF0F5', r: 255, g: 240, b: 245 },
  { name: 'White Smoke', hex: 'F5F5F5', r: 245, g: 245, b: 245 }
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

