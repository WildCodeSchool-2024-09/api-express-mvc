const itemModel = require('../models/item');

exports.selectAll = async (req, res) => {
  itemModel.selectAll((err, data) => {
    if (err) throw err;
    res.send(data);
  });
};

exports.create = (req, res) => {
  return res.send({ message: 'je suis la route qui insert un nouveau item' });
};

exports.update = (req, res) => {
  const id = req.params.id;

  return res.send({
    message: `je suis la route qui met à jour un item (${id}) existant`,
  });
};
