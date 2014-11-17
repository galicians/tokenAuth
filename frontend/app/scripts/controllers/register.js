'use strict';


angular.module('tokenAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, $rootScope, alert) {
    $scope.submit = function() {

      var  url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };
      $http.post(url, user)
        .success(function(res) {
          alert('success', 'OK!', 'You are now registered')
        })
        .error(function(res) {
          alert('warning', 'Opps!', 'Could not register')
        })
    }
  });
