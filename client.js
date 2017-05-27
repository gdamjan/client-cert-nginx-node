var fs = require('fs');
var https = require('https');

var options = {
    hostname: '127.0.0.1',
    servername: 'server',
    port: 8443,
    path: '/',
    method: 'GET',
    key: fs.readFileSync('./ca/private/client.key'),
    cert: fs.readFileSync('./ca/certs/client.crt'),
    ca: fs.readFileSync('./ca/certs/ca.crt')
};

var req = https.request(options, function(res) {
    res.on('data', function(data) {
        process.stdout.write(data);
    });
});

req.end();

req.on('error', function(e) {
    console.error(e);
});
