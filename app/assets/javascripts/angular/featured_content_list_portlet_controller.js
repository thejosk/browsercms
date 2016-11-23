angular.module('browsercms.controllers').controller('FeaturedContentListPortletController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.items = [];
  
  $scope.init = function(items)
  {
    $scope.items = items;
  };

  $scope.addNewSlide = function()
  {
    $scope.items.push({title: "", description: "", url: "", image: ""});
    // give time for the UI to render then assign CKEDITOR to the textarea
    $timeout(assignCKEditorToNewItem, 500);
  };

  $scope.removeSlide = function(index)
  {
    $scope.items.splice(index, 1);
  }

  function assignCKEditorToNewItem()
  {
    CKEDITOR.replace("item_" + $scope.items.length + "_description");
  }

  function getTextareaId(ui)
  {
    var textarea = ui.item.find(".ckeditor");
    if(textarea) 
    {
      return textarea.attr("id");
    } 
    else 
    {
       return null;
    }
  }

  function getCkEditorTextareas(ui)
  {
    var items = []
    var searched = ui.item.offsetParent().find(".ckeditor");
    for(var i = 0; i < searched.length; i++)
    {
      items.push(searched[i]);
    }
    return items;
  }

  $scope.sortableOptions = {
    start: function(e, ui) {
      _.forEach(getCkEditorTextareas(ui), function(textarea) {
        CKEDITOR.instances[textarea.id].destroy();
        CKEDITOR.remove(textarea.id)
      });
    },
    stop: function(e, ui) {
      _.forEach(getCkEditorTextareas(ui), function(textarea) {
        CKEDITOR.replace(textarea);
      });
    }
  }
}]);
