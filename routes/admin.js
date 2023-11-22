const express=require('express');

const router=express.Router();


router.get('/add-product',(req,res,next)=>{
    
   res.send('<form action="/admin/product" method="post"><input type="text" name="title" placeholder="add product"><input type="text" name="title" placeholder="add size"><button type="submit">submit</button><br><br></form>')
   
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports=router;