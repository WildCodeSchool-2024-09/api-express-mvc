// On fait appel à notre configuration de la DB pour une connection
const { db } = require('../config/db');

// On crée une première méthode
const selectAll = (data) => {
  // On recupère l'ensemble de mes enregistrements de ma table users
  db.query('SELECT * FROM users', (err, result) => {
    // Si nous avons une erreur alors il stoppe le programme et lève une exception
    if (err) throw err;
    // Sinon
    data(null, result);
  });
};

// On exporte notre module
module.exports = { selectAll };
