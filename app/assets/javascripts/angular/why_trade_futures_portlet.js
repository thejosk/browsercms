angular.module('browsercms.controllers').controller('WhyTradeFuturesPortletController', ['$scope', function($scope) {
  $scope.items = [];
  
  $scope.init = function(items)
  {
    $scope.items = items;
  };

  $scope.addNewSlide = function()
  {
    $scope.items.push({number: $scope.items.length+1, text: ''});
  };

  $scope.removeSlide = function(index)
  {
    $scope.items.splice(index, 1);
  }
}]);