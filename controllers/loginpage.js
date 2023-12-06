const path=require('path');

const rootDir=require('../util/path');

const express=require('express');

const router=express.Router();

const fs=require('fs');

const loginmodel=require('../Models/loginmodel');

router.getlogin=((req,res)=>{
    res.sendFile(path.join(rootDir,'views','login.html'));
    });


    router.postlogin=((req,res)=>{
        
       // console.log(`${req.body.username}`)
        //const Loginmodule=new loginmodule(req.body.username)


        fs.writeFile('username.txt',' ',(err)=>
            err?console.log(err):res.redirect('/chat'));
        
        
         
    });

    router.getchat=((req,res)=>{
        const Loginmodel=new loginmodel();
        Loginmodel.fetch();
        res.sendFile(path.join(rootDir,'views','chat.html'));
               
       });
    
    router.postchat=((req,res)=>{
        
        
        const Loginmodel=new loginmodel(`${req.body.username}:${req.body.message}`);
         Loginmodel.save();
         //res.send(`${data}`);
         res.redirect('/chat') 
        
    });

    
   
    

    module.exports=router;