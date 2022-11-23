var http = require('http');
var n = require('./primeiromodulo');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(Date());
    res.write(n.nome()+ '<br>');
    res.end("<center> <h2> OLA. BOA TARDE</h2></center>");
}).listen(80);
