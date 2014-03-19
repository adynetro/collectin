'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'google-maps',
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {templateUrl: 'partials/menu.html', controller: 'Menu'});
  $routeProvider.when('/locatie', {templateUrl: 'partials/locatie.html', controller: 'Menu'});
  $routeProvider.when('/mycollect', {templateUrl: 'partials/mycollect.html', controller: 'Menu'});
  $routeProvider.when('/discover', {templateUrl: 'partials/discover.html', controller: 'Menu'});
  $routeProvider.when('/treasure', {templateUrl: 'partials/treasure.html', controller: 'Menu'});
  $routeProvider.when('/games', {templateUrl: 'partials/games.html', controller: 'Menu'});
  $routeProvider.when('/collectin', {templateUrl: 'partials/collectin.html', controller: 'Menu'});
  $routeProvider.otherwise({redirectTo: '/menu'});
}]);

