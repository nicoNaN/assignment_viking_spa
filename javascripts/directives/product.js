storefront.directive('product', function() {
  return {
    templateUrl: "javascripts/directives/product.html",
    restrict: "E",
    replace: true,
    scope: {
      product: "="
    }
  };
});
