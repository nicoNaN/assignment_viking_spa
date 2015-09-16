storefront.controller('cartCtrl', ['$scope', '$stateParams', 'products', 'shoppingCart',
  function($scope, $stateParams, products, shoppingCart) {
    $scope.cart = shoppingCart.listAll();
    $scope.products = products;
}]);
