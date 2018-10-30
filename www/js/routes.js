angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('stocks', {
    url: '/stock',
    templateUrl: 'templates/stocks/index.html',
    controller: 'stocksCtrl'
  })

  .state('stocksShow', {
    url: '/stock/show',
    templateUrl: 'templates/stocks/show.html',
    controller: 'stocks2Ctrl',
    params: {symbol: null}
  })

$urlRouterProvider.otherwise('/stock')


});