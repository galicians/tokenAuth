angular.module('tokenAuthApp').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

   $stateProvider

   .state('main', {
      url: '/main',
      templateUrl: '/views/main.html'
  })

  .state('register', {
      url: '/register',
      templateUrl: '/views/register.html'
  })
}])

