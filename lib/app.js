const express = require('express');
const app = express();

const dogs = [
  { dog: 'a dog' },
  { dog: 'another dog' },
  { dog: 'here is a dog' },
  { dog: 'more dog' },
  { dog: 'many dog' }
];

app.use(express.static('./public'));

app.get('/api/v1/dogs', (req, res) => {
  res.send(dogs);
});

module.exports = app; 

