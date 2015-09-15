storefront.controller('productCtrl', ['$scope', '$stateParams', 'products', 'shoppingCart',
  function($scope, $stateParams, products, shoppingCart) {
    $scope.product = products[$stateParams.productId - 1];
    $scope.cart = shoppingCart;

    $scope.addToCart = function() {
      // alert('yeah');
      $scope.cart.addItem($scope.product);
    };
}]);
