storefront.factory('products', function() {
  var products = [];

  for (i = 1; i <= 50; i++) {
    var newProd = {
      id: i,
      price: faker.commerce.price(),
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph()
    };

    products.push(newProd);
  }

  return products;
});
