import express from 'express'
import CategoryController from '../controller/CategoryController.js';

const categoryRouter=express.Router();
const cInstance=new CategoryController();


categoryRouter.get('/',cInstance.index);
categoryRouter.post('/',cInstance.store);

export default categoryRouter;