import express from 'express';
import productRouter from './productRoute.js';

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hello");
})


router.use('/product',productRouter);

export default router;