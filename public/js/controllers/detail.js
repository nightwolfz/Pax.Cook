angular.module('pax.controllers').controller('DetailController', function($scope, $sce, $selected, $data) {

	console.debug($data.get());
	//console.debug($data[$selected.get().id].thumb);

  $scope.selectedItem = {
      thumb: $data.get()[$selected.get().id].thumb, 
      name: $sce.trustAsHtml($selected.get().name),
      preparation: $sce.trustAsHtml($selected.get().preparation),
      ingredients: $sce.trustAsHtml($selected.get().ingredients)
  };

  $scope.save = function(){
    $scope.saveButton = 'Saved!';
  };

});