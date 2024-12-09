const router = require('express').Router();
const controller = require('../controllers/items');

// ICI c'est les routes CRUD
router.get('/', controller.selectAll);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
