const express = require('express');
const bodyParser = require('body-parser');

const returnRoutes = require('./routes/returnapi');
const voucherRoutes = require('./routes/voucherapi');
const voucherDetailRoutes = require('./routes/voucherDetailapi');

const app = express();
app.use(bodyParser.json());

app.use('/api', returnRoutes);
app.use('/api', voucherRoutes);
app.use('/api', voucherDetailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
