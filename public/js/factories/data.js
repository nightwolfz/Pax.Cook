angular.module('pax.factories').factory('$data', function() {
    var data = [
        { 
            title: '',
            label: '',
            desc: 'Nothing yet, refresh!'
        }
    ]; 

    return {
      get: function(){
        return data;
      },
      set: function(newVal){
        data = newVal;
      }
    };
});

angular.module('pax.factories').factory('$selected', function() {
    var data = {
      name: 'n/a',
      preparation: 'n/a',
      ingredients: 'n/a',
      thumb: ''
    };

    return {
      get: function(){
        return data;
      },
      set: function(newVal){
        data = newVal;
      }
    };
});