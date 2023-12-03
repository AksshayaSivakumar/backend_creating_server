const path=require('path');

const express= require('express');

const bodyParser=require('body-parser');

const app=express();

const logincontroller=require('./controllers/404');

const login=require('./messages/login');
const chat=require('./messages/chat');
const contactus=require('./messages/contactus');
const success=require('./messages/success');
const loginpage=require('./controllers/loginpage');



app.use(bodyParser.urlencoded({extended:false}));

app.use(login);
app.use(chat);
app.use(contactus);
app.use(success);
app.use(loginpage);

app.use(logincontroller.get404);

app.listen(3002);