storefront.controller('storeCtrl', ['$scope', 'products',
  function($scope, products) {
    $scope.products = products;
}]);
