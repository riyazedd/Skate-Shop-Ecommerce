import express from 'express';
import productRouter from './productRoute.js';
import categoryRouter from './categoryRoute.js';
import adminRouter from './adminRoute.js';
import userRouter from './userRoute.js';
import orderRouter from './orderRoute.js';

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hello");
})


router.use('/product',productRouter);
router.use('/category',categoryRouter);
router.use('/admin',adminRouter);
router.use('/user',userRouter);
router.use('/order',orderRouter);

export default router;