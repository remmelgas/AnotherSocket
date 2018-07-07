const net = require('net');


let constClass = null;
const socketRelease = new net.createServer({host:'127.0.0.1'}, (socket) => {
    let sessionState = new constClass(socket);


    socket.on('error', function(errorState) {

    });

    socket.on('close', function() {

    });

    socket.on('data', function(stateData) {
       sessionState.message(stateData);
    });
});


module.exports.initSocket = function(session) {
    socketRelease.listen(3303);

    constClass = session;
    return socketRelease;
};

module.exports.destroySocket = function() {

};