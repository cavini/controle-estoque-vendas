const fs = require('fs');
let products = JSON.parse(fs.readFileSync(`${__dirname}/data/inventory.json`));

exports.getAllProducts = async (_req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      products,
    },
  });
};
