storefront.factory('shoppingCart', function() {
  var obj = {};
  obj.products = {};

  obj.listAll = function() {
    return obj.products;
  };

  obj.getQuantity = function(name) {
    return obj.products[name];
  }

  obj.addItem = function(object, quantity) {
    obj.products[object.name] = quantity;
  };

  obj.removeItem = function() {
    return;
  };

  return obj;
});
