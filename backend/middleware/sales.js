const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router.route('/').get(async () => {
  const abc = salesController.getAllSales();
  console.log(abc);
});

router.route('/:id').get(async (req, res) => {
  await salesController.getSaleById(req);
});

router.route('/').post(async () => {
  const result = await salesController.createSale([
    {
      name: 'Teste 28',
      summary: 'Teste 28',
      bedrooms: 28,
      bathrooms: 28,
    },
  ]);
});

module.exports = router;
