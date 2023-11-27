const express= require('express');

const fs=require('fs');

const bodyParser=require('body-parser');

const app=express();


app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err)
        {
            console.log(err);
            data= 'no chat exist'
        }
   
    
    res.send(`${data} <form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')" method="POST"> 
    <input type="text" id="message"  name="message">
    <input  type="hidden" id="username" name="username">
    <button type="submit">send</button></form>`)

    
}) 
 });


 app.post('/',(req,res)=>{
    
   
     fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
     err?console.log(err):res.redirect('/'));
});

app.get('/login',(req,res)=>{
res.send(`<form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)" >
<input id="username" type="text" name="username">

<button type="submit">add</button></form>`)
});

app.post('/login',(req,res)=>{
    
    console.log(`${req.body.username}`)
    fs.writeFile('username.txt',` `,(err)=>
     err?console.log(err):res.redirect('/'));
     
});


app.listen(3002);