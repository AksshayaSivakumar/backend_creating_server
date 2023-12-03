
const express=require('express');

const router=express.Router();



const logincontroller=require('../controllers/loginpage');

router.get('/chat', logincontroller.getchat);
 router.post('/chat',logincontroller.postchat);

module.exports=router;