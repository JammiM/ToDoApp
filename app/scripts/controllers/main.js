'use strict';

/**
 * @ngdoc function
 * @name toDoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toDoAppApp
 */
angular.module('toDoAppApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    /**
    $watch will watch for chages in the $scope.todos
    and it will sync it with the todos in local storage
    */
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);



    //function to add todo then clears the field
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    //Remove todo
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };







  });
