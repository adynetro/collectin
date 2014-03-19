'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('Menu', ['$scope', '$rootScope', '$window', '$location', function($scope,$rootScope,$window,$location) {


    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

    $scope.slide = '';
    $rootScope.back = function() {
      $scope.slide = 'slide-right';
      $window.history.back();
    }
    $rootScope.go = function(path) {
      $scope.slide = 'slide-left';
      $location.url(path);
    }
}]);

