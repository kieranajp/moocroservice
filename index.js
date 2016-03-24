const http = require('http');
const exec = require('child_process').exec;

const server = http.createServer();

server.on('request', (req, res) => {
    exec('fortune | cowsay', (err, stdout) => {
        res.end(stdout);
    });
});

server.listen(3000, () => console.log('Listening on port 3000'));

