import express from 'express';
import productRouter from './productRoute.js';
import categoryRouter from './categoryRoute.js';

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hello");
})


router.use('/product',productRouter);
router.use('/category',categoryRouter);

export default router;