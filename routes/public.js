const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = 'Hola';
  return res.send({ message: data });
});

module.exports = router;
