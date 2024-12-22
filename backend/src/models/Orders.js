import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    orderedBy: {
        type: String,
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },

    quantity: {
        type: Number,
        trim: true,
    },
    price: {
        type: Number,
    }


});

const Order = mongoose.model('Order', orderSchema);

export default Order