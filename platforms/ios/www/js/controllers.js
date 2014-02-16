'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('Menu', ['$scope', '$rootScope', '$window', '$location', function($scope,$rootScope,$window,$location) {
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