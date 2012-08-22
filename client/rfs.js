var     io = require('socket.io-client'),
    socket = io.connect('localhost', {
        port: 9999
    });

socket.on('rfs', function(rfs) {
    console.log(rfs);
});
