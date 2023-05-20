# Descripción de la prueba
## **Prueba Backend**

Se requiere elaborar un servicio REST con las tecnologías (Node.JS) el cual tendrá las
siguientes consideraciones:

Servicio REST GET (simulador de búsqueda ecommerce)
El servicio debe responder con un listado de productos (encontrados y sugeridos).

Para los productos encontrados debe basarse en el parámetro “filter” de tipo String que
este tenga coincidencia con el atributo nombre del producto.

Para los productos sugeridos debe regresar 2 productos de la misma categoría
```
{
    "product": [
        {
            "name": "Samsung Galaxy",
            "category": "electronics"
        },
        {
            "name": "Motorola V3",
            "category": "electronics"
        },
        {
            "name": "Iphone 12",
            "category": "electronics"
        },
        {
            "name": "Skippy",
            "category": "grocery store"
        }
    ]
}
```

## **Prueba Front**

Se requiere del diseño de una pantalla con las tecnologías (React.js, bootstrap) que
consuma la API https://pokeapi.co/ para realizar la búsqueda y representación de los
datos en los diferentes navegadores.

Ejemplo: https://pokeapi.co/api/v2/pokemon/ditto
Debe mostrar la información de la búsqueda en pantalla con un diseño e interfaz
agradable para el usuario

#

# Instrucciones

## **Backend**
El backend está hecho con Express, para correrlo en modo desarrollo usar el comando  ```dev``` con yarn o npm.

El servidor corre por defecto en el puerto 3500 y el endpoint a lo que requiere la prueba es /api/products.

## **Frontend**
El frontend como dice la prueba está usando React y Bootstrap, empaquetado con Vite.