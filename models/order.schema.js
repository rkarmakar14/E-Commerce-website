import mongoose  from "mongoose";
import userOrder from "../utilities/user.order";

const ordersSchema = mongoose.Schema(
    {
        //products, users, Phonenumber, amount, address, coupon, transactionId, orderstatus,
        products:{
            types:[
                {
                productId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'products',
                    required:true
                    },
                    count:Number,
                    price:Number,
                },
            ]
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users",
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phoneNumber: Number,
        coupon:String,
        transactionId: String,
        orderstatus:{
            enum:Object.values(userOrder),
            default:userOrder.ORDERED
        }
    },
    {
        timestamps:true
    }    
)

export default mongoose.model('orders', ordersSchema)