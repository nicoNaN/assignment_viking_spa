var storefront = angular.module('storefront', ['ui.router']);

storefront.config(function($stateProvider, $urlRouterProvider) {

  // default route
  $urlRouterProvider.otherwise("/store");

  // state definitions
  $stateProvider
    .state('store', {
      url: "/store",
      templateUrl: "javascripts/templates/store.html",
      controller: "storeCtrl"
    })
})
