var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.blah = false;
  $scope.toggle = function() {
      $scope.blah = !$scope.blah;
  }
});
