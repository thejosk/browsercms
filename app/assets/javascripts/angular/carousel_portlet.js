angular.module('browsercms.controllers').controller('CarouselPortletController', ['$scope', function($scope) {
  $scope.slides = [];
  $scope.html_blocks = [];

  $scope.init = function(slides, html_blocks)
  {
    $scope.slides = slides;
    $scope.html_blocks = html_blocks;
  };

  $scope.addNewSlide = function()
  {
    $scope.slides.push({id: $scope.html_blocks[0].id});
  };

  $scope.removeSlide = function(index)
  {
    $scope.slides.splice(index, 1);
  }
}]);