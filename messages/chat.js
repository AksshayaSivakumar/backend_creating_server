const path=require('path');
const rootDir=require('../util/path');
const express=require('express');

const router=express.Router();

const fs=require('fs');

router.get('/chat',(req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
        
          if(err)
          {
            console.log(err);
            data="no chat exist";
          }
          res.sendFile(path.join(rootDir,'views','chat.html'));  
    });
  
});
   
 router.post('/chat',(req,res)=>{
    fs.appendFile('username.txt',`${req.body.username}:${req.body.message}   `,{flag:'a'},(err,data)=>
     err?console.log(err):res.redirect('/chat') );
     //res.send(`${data}`);
});

module.exports=router;