const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellersController');

router.route('/').get(sellerController.getAllSellers);
router.route('/:id').get(async (req, res) => {
  await sellerController.getSellerById(req);
});

router.route('/').post(async () => {
  const result = await sellerController.createSeller([
    {
      name: 'Teste 28',
      summary: 'Teste 28',
      bedrooms: 28,
      bathrooms: 28,
    },
  ]);
});

module.exports = router;
