
const express= require('express');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    
   res.send('<form action="/product" method="post"><input type="text" name="title" placeholder="add product"><input type="text" name="title" placeholder="add size"><button type="submit">submit</button><br><br></form>')
   
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    
    res.send('<h1>hello to nodejs</h1>')
});


app.listen(3002);