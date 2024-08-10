import Category from "../models/Category.js";

class CategoryController{
    async index(req,res){
        try{
            const categoryData=await Category.find({});
            res.status(200).json(categoryData);
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async store(req,res){
        try{
            await Category.create({...req.body});
            res.status(200).json({message:"Category Added"});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}

export default CategoryController;