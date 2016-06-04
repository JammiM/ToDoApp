'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoAppApp
 */
angular.module('toDoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['clean room', 'Get milk', 'get tea bags'];

    //function to add todo then clears the field
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
      
    };







  });
