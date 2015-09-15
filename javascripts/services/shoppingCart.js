storefront.factory('shoppingCart', function() {
  var obj = {};

  obj.listAll = function() {
    return;
  };

  obj.addItem = function(object) {
    obj[object.name] = 1;
    // debug
    console.log(obj[object.name]);
  };

  obj.removeItem = function() {
    return;
  };

  return obj;
});
