const express = require('express');
const { productController } = require('./controllers/productController');

const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (_req, res) => {
    res.send('<h1>Use el endpoint "/api/product"</h1>')
})

app.get('/api/product', productController)


app.listen(PORT, (_req, _res) => {
    console.log(`Server listen on port: ${PORT}`);
})