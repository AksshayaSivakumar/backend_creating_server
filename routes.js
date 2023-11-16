
const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    //res.write(`<body>${data}</body>`)
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></body></form>');
    res.write('</html>');

     return res.end();
     
    }
    if(url==='/message'&& method==='POST')
    {
        const body=[];
        req.on('data',(chunks)=>{
            body.push(chunks);
            //console.log(chunks);
        });
         req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            const message=parsedbody.split('=')[1];
            fs.writeFile('mess.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('location','/');
                //res.write('mess.txt');
                return res.end();
            });
          
             })  
    }
 
else{
    res.setHeader("Content-Type","text/html");
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1></h1>hello from nodejs </h1></body>');
    res.write('</html>');
    res.end();
}
    


};
module.exports=requestHandler;

    