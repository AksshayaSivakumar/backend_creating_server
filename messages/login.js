
const express=require('express');

const logincontroller=require('../controllers/loginpage');



const router=express.Router();


router.get('/login',logincontroller.getlogin);
    
router.post('/login',logincontroller.postlogin);

module.exports=router;