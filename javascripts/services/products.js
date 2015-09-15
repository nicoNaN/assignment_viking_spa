storefront.factory('products', function() {
  var products = [];
  var categories = [];

  for (i = 1; i <= 10; i++) {
    var newCategory = {
      name: faker.commerce.department()
    };

    categories.push(newCategory);
  }

  for (i = 1; i <= 50; i++) {
    var newProd = {
      id: i,
      price: faker.commerce.price(),
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      category: categories[Math.floor(Math.random()*categories.length)]
    };

    products.push(newProd);
  }

  return products;
});
