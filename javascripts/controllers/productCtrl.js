storefront.controller('productCtrl', ['$scope', '$stateParams', 'products',
  function($scope, $stateParams, products) {
    $scope.product = products[$stateParams.productId - 1];
}]);
