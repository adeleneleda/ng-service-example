var app = angular.module('ShoppingListApp', []);

app.controller('MainCtrl', ['$scope', 'ItemService', function($scope, ItemService) {
  $scope.items = ItemService.list

  $scope.addItem = function() {
    return ItemService.addItem($scope.newItem);
  };

  $scope.deleteItem = function(item) {
    return ItemService.deleteItem(item);
  };

}]);

app.factory('ItemService', [function() {
  factory = {};

  factory.list = [
    {name: 'Milk', description: 'Non-Fat', price: '100', bought: true},
    {name: 'Bread', description: 'Wheat', price: '50', bought: false}
  ];

  factory.addItem = function(item) {
    factory.list.push(item);
  };

  factory.deleteItem = function(item) {
    index = factory.list.indexOf(item);
    factory.list.splice(index, 1);
  };

  return factory;
}]);