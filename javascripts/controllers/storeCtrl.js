storefront.controller('storeCtrl', ['$scope', 'products', 'shoppingCart',
  function($scope, products, shoppingCart) {
    $scope.products = products;

    $scope.cart = shoppingCart;

    $scope.addToCart = function(item) {
      $scope.cart.addItem(item);
    }
}]);
