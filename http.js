const http=require('http')
http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('Aksshaya');
    res.end();
}).listen(4000);
