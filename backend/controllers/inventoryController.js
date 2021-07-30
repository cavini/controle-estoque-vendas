const fs = require('fs');

let inventory = JSON.parse(fs.readFileSync(`${__dirname}/data/inventory.json`));
exports.getInventory = async (_req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      inventory,
    },
  });
};
