const app = require('./app');

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  console.log('get on ${PORT}');
});
