'use strict';

// Declare individual modules
angular.module('pax.controllers', []);
angular.module('pax.factories', []);
angular.module('socket.io', []);

// Declare app level module + dependencies
angular.module('pax', [
  'socket.io',
  'onsen',
  'pax.controllers',
  'pax.factories'
]);

angular.module('pax.controllers').controller('AppController', function($scope, socket) {

});
