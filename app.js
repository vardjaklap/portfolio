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
        {name:'Fitonia', type: 'Web Application', desc:'A small fitness application I made as my graduation project.', link:'https://vardjaklap.github.io/FitoniaFinal/#!/registration'},
        {name:'Modest', type: 'Landing page', desc:'A landing, made from scratch from a template.', link:'https://vardjaklap.github.io/Modest/'}
    ];


    }])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
