var io = require('socket.io').listen(9999),
    fs = require('fs'),
    incoming = "/var/lib/debian.js/incoming/";

io.sockets.on('connection', function (socket) {
});

setInterval(function() {
    fs.readdir(incoming, function(err, files) {
        if ( err ) {
            console.log(err);
            return;
        }
        for ( var i in files ) {
            console.log("New file.");
            var file = incoming + "/" + files[i],
                info = JSON.parse(fs.readFileSync(file));
            io.sockets.emit(info.class, info);
            // we're done here.
            fs.unlink(file);
        }
    });
}, 500);
