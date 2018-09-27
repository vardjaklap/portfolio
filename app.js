'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
    controller('MainCtrl', ['$scope','$interval', '$timeout',function($scope, $interval, $timeout){

    $scope.works = [
        {name:'Fitonia', link:'https://vardjaklap.github.io/FitoniaFinal/#!/registration'},
        {name:'Modest', link:'https://vardjaklap.github.io/Modest/'},
        {name: 'Intersog', link:'https://vardjaklap.github.io/Intersog/'}
    ];

    }])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
