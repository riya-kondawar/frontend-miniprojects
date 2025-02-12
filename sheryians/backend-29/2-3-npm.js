// http module in Nodejs


const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})
server.listen(3000);

