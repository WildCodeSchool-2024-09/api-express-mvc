const public = require('./public');
const items = require('./items');
const chaises = require('./chaises');

const routes = (app) => {
  app.use('/', public);
  app.use('/items', items);
  app.use('/chaises', chaises);
};

module.exports = routes;
