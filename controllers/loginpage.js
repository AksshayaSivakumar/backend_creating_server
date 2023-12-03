const path=require('path');

const rootDir=require('../util/path');

const express=require('express');

const router=express.Router();

const fs=require('fs');

router.getlogin=((req,res)=>{
    res.sendFile(path.join(rootDir,'views','login.html'));
    });


    router.postlogin=((req,res)=>{
        
        console.log(`${req.body.username}`)
        fs.writeFile('username.txt',` `,(err)=>
         err?console.log(err):res.redirect('/chat'));
         
    });

    router.getchat=((req,res)=>{
        fs.readFile('username.txt',(err,data)=>{
            
              if(err)
              {
                console.log(err);
                data="no chat exist";
              }
              res.sendFile(path.join(rootDir,'views','chat.html'));  
        });
    });
    
    router.postchat=((req,res)=>{
        fs.appendFile('username.txt',`${req.body.username}:${req.body.message}   `,{flag:'a'},(err,data)=>
         err?console.log(err):res.redirect('/chat') );
         //res.send(`${data}`);
    });
    

    module.exports=router;