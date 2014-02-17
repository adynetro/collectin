'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngAnimate'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {templateUrl: 'partials/menu.html', controller: 'Menu', depth:1});
  $routeProvider.when('/locatie', {templateUrl: 'partials/locatie.html', controller: 'Locatie', depth:2});
  $routeProvider.when('/mycollect', {templateUrl: 'partials/mycollect.html', controller: 'MyCollect', depth:2});
  $routeProvider.when('/discover', {templateUrl: 'partials/discover.html', controller: 'Discover', depth:2});
  $routeProvider.when('/treasure', {templateUrl: 'partials/treasure.html', controller: 'Treasure', depth:2});
  $routeProvider.when('/games', {templateUrl: 'partials/games.html', controller: 'Games', depth:2});
  $routeProvider.when('/collectin', {templateUrl: 'partials/collectin.html', controller: 'Collectin', depth:2});
  $routeProvider.otherwise({redirectTo: '/menu'});
}]);


