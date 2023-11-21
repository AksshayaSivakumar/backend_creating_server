
const express= require('express');

const app=express();
app.use((req,res,next)=>{
    console.log("middleware1");
    next();
});

app.use((req,res,next)=>{
    console.log("middleware3");
    res.send('<h1>hello to nodejs</h1>')
});


app.listen(3002);