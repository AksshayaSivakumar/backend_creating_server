const express=require('express');

const router=express.Router();

router.get('/success',(req,res)=>{
  res.send('<h2>Form successfully filled</h2>');
});

module.exports=router;