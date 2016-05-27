'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toDoAppApp
 */
angular.module('toDoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
