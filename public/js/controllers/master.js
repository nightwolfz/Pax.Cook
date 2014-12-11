angular.module('pax.controllers').controller('MasterController', function($scope, $data, $selected, socket) {

  $scope.items = $data.get();

  socket.on('cooking:get', function(items){
      $scope.items = items;
      $data.set(items);
  });

  socket.on('cooking:getOne', function(item){
      $selected.set(item);
      $scope.ons.navigator.pushPage('detail.html');
  });

  $scope.refresh = function(){
      socket.emit('cooking:get', {});
  };
  
  $scope.showDetail = function(index) {
    socket.emit('cooking:getOne', {href: $scope.items[index].href, id: index});
  };

});