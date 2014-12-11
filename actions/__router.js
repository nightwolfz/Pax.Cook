module.exports = function(socket){

    // Actions
    var cooking = require('./cooking')(socket);

    // Routes
    socket.on('cooking:get', cooking.getAll);
    socket.on('cooking:getOne', cooking.getOne);
};



