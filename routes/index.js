const public = require('./public');
const items = require('./items');

const routes = (app) => {
  app.use('/', public);
  app.use('/items', items);
};

module.exports = routes;
