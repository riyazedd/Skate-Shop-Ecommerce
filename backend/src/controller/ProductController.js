import Product from "../models/Product.js";

class ProductController {
    async index(req, res) {
        try {
            const productData = await Product.find({})
            res.status(200).json(productData)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async store(req, res) {
        try {
            let products = req.body;

            if (!Array.isArray(products)) {
                products = [products];
            }

            const createdProducts = [];
            for (let productData of products) {
                let image = "";
                if (req.file) {
                    image = req.file.filename;
                }

                const newProduct = await Product.create({ ...productData, image });
                createdProducts.push(newProduct);
            }

            res.status(200).json({ success: true });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }


    async show(req, res) {
        try {
            let id = req.params.id;
            const productData = await Product.findById(id);
            res.status(200).json(productData);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async showRelated(req, res) {
        try {
            const relatedProducts = await Product.aggregate([
                { $sample: { size: 4 } }
            ]);
    
            const updatedProducts = relatedProducts.map(product => {
                return {
                    ...product,
                    image: `http://localhost:3000/products/${product.image}`
                };
            });
    
            res.status(200).json(updatedProducts);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            let id = req.params.id;
            let product = await Product.findById(id);
            let image = product.image;

            if (req.file) {
                image = req.file.filename;
            }

            await Product.findByIdAndUpdate(id, { ...req.body, image });
            res.status(200).json({ success: true });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async destroy(req, res) {
        try {
            let id = req.params.id;
            await Product.findByIdAndDelete(id);
            res.status(200).json({ message: "Product Deleted Succesfully" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async decreaseQuantity(req, res) {
        try {
            let id = req.params.id;
            let { quantity } = req.body;
    
            if (!quantity || quantity <= 0) {
                return res.status(400).json({ message: "Invalid quantity value." });
            }
    
            let product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found." });
            }
    
            if (product.quantity < quantity) {
                return res.status(400).json({ message: "Not enough stock available." });
            }
    
            product.quantity -= quantity;
            await product.save();
    
            res.status(200).json({ success: true, message: "Quantity decreased successfully.", product });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    
    
}

export default ProductController;