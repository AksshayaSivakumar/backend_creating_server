const path=require('path');
const rootDir=require('../util/path');
const fs=require('fs');

const express=require('express');

const router=express.Router();

router.get('/contactus',(req,res)=>{
  res.sendFile(path.join(rootDir,'views','contactus.html'));
})


module.exports=router;