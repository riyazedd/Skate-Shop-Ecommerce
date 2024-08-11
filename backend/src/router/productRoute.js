import express from 'express';
import ProductController from '../controller/ProductController.js';
import UploadMiddleware from '../middleware/UploadMiddleware.js';

const productRouter=express.Router();
const pInstance=new ProductController();
const fInstance=new UploadMiddleware();
const upload=fInstance.upload('products');

productRouter.get('/related',pInstance.showRelated);
productRouter.get('/:id',pInstance.show);
productRouter.get('/',pInstance.index);
productRouter.post('/',upload.single('image'),pInstance.store);
productRouter.put('/:id',upload.single('image'),pInstance.update);
productRouter.delete('/:id',pInstance.destroy);

export default productRouter;