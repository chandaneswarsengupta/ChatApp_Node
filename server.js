var http = require('http');
var server = http.createServer(function(req,resp){
    resp.write("Hello world");
    resp.end();
});

server.listen(8081, function(){
    console.log("Server started at port 8081");
})
