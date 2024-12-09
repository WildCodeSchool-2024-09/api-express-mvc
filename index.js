const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
routes(app);

// La logique V du MVC
app.get('/exemple', (req, res) => {
  // La logique M du MVC
  const data = 'je suis la route exemple';

  // La logique C du MVC
  return res.send({
    message: data,
  });
});

app.listen(3001, () => console.log('le serveur tourne http://localhost:3001'));

module.exports = app;