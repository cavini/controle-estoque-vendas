const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let port = process.env.PORT || 5000;

app.use('/api/products', require('./middleware/products'));
app.use('/api/sales', require('./middleware/sales'));
app.use('/api/inventory', require('./middleware/inventory'));
app.use('/api/sellers', require('./middleware/sellers'));

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
