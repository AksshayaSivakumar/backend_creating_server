const path=require('path');

const express= require('express');

const bodyParser=require('body-parser');

const login=require('./messages/login');
const chat=require('./messages/chat');
const contactus=require('./messages/contactus');
const success=require('./messages/success');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(login);
app.use(chat);
app.use(contactus);
app.use(success);

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    
})

app.listen(3002);