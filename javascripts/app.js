var storefront = angular.module('storefront', ['ui.router', 'angular.filter']);

storefront.config(function($stateProvider, $urlRouterProvider) {

  // default route
  $urlRouterProvider.otherwise("/products/index");

  // state definitions
  $stateProvider
    .state('products', {
      templateUrl: "javascripts/templates/products.html",
      url: "/products"
    })

    .state('products.index', {
      url: "/index",
      controller: "storeCtrl"
    })
})
