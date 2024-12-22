import Order from "../models/Orders.js";

class OrderController{
    async index(req,res){
        try{
            const orderData=await Order.find({});
            res.status(200).json(orderData);
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async store(req,res){
        try{
            await Order.create({...req.body});
            res.status(200).json({success:true});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}

export default OrderController;