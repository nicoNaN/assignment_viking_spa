var storefront = angular.module('storefront', ['ui.router', 'angular.filter']);

storefront.config(function($stateProvider, $urlRouterProvider) {

  // default route
  $urlRouterProvider.otherwise("/products/index");

  // state definitions
  $stateProvider
    .state('products', {
      url: "/products",
      templateUrl: "javascripts/templates/products.html"
    })

    .state('products.index', {
      url: "/index",
      templateUrl: "javascripts/templates/productsIndex.html",
      controller: "storeCtrl"
    })

    .state('products.show', {
      url: "/:productId",
      templateUrl: "javascripts/templates/product.html",
      controller: "productCtrl"
    })

    .state('cart', {
      url: "/cart",
      templateUrl: "javascripts/templates/cart.html",
      controller: "cartCtrl"
    })
})
