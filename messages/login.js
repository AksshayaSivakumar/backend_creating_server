const path=require('path');

const rootDir=require('../util/path');
const fs=require('fs');
const express=require('express');

const router=express.Router();


router.get('/login',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','login.html'));
    });
    
router.post('/login',(req,res)=>{
        
        console.log(`${req.body.username}`)
        fs.writeFile('username.txt',` `,(err)=>
         err?console.log(err):res.redirect('/chat'));
         
    });
module.exports=router;