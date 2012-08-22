var io = require('socket.io').listen(9999),
    fs = require('fs');

io.sockets.on('connection', function (socket) {
});

fs.readdir("/var/lib/debian.js/incoming/", function(err, files) {
    if ( err ) {
        console.log(err);
        return;
    }
    for ( var file in files ) {
        console.log(file)
    }
});
