var app = angular.module('ShoppingListApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.items = [
    {name: 'Milk', description: 'Non-Fat', price: '100', bought: true},
    {name: 'Bread', description: 'Wheat', price: '50', bought: false}
  ];
}]);