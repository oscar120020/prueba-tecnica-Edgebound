const { products } = require("../data");

const productController = (req, res) => {
  const { name = "" } = req.query;

  // Si no se envía el query name, devuelve todos los productos
  if (!name) {
    return res.json({
      encontrados: products,
      sugeridos: [],
    });
  }

  // Busca todos los productos que incluyan lo que viene en name
  const encontrados = products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );

  // Si no se encontraron productos devuelve los arreglos vacios
  if (encontrados.length === 0) {
    return res.json({
      encontrados: [],
      sugeridos: [],
    });
  }

  const sugeridos = [];

  /* Busca solo 2 productos que tengan la misma categoría
  que el primer producto encontrado anteriormente */
  for (let product of products) {
    if (sugeridos.length === 2) {
      break;
    }

    // verificar si el producto a ser sugerido tiene la misma categoría
    // y si su nombre no tiene coincidencia con el query de busqueda
    // para no repetir productos entre encontrados y sugeridos
    if (
      product.category === encontrados[0].category &&
      !product.name.toLowerCase().includes(name.toLowerCase())
    ) {
      sugeridos.push(product);
    }
  }

  res.json({
    encontrados,
    sugeridos,
  });
};

module.exports = {
  productController,
};
