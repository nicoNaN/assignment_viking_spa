storefront.controller('productCtrl', ['$scope', '$stateParams', 'products', 'shoppingCart',
  function($scope, $stateParams, products, shoppingCart) {
    $scope.product = products[$stateParams.productId - 1];
    $scope.cart = shoppingCart;
    $scope.productQuantity = $scope.cart.getQuantity($scope.product.name);

    $scope.addToCart = function() {
      $scope.cart.addItem($scope.product, $scope.productQuantity);
      // console.log($scope.cart.listAll());
    };
}]);
