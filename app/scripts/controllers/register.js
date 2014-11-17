'use strict';


angular.module('tokenAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, $rootScope, alert) {
    $scope.submit = function() {

      var  url = '/';
      var user = {};
      $http.post(url, user)
        .success(function(res) {
          alert('success', 'OK!', 'You are now registered')
        })
        .error(function(res) {
          alert('warning', 'Opps!', 'Could not register')
        })
    }
  });
