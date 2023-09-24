import mongoose  from "mongoose";

const productsSchema = mongoose.Schema(
    {// name, price, description, photos, stock, sold, collectionId,
        name:{
            type: String,
            required:[true, 'Name is required'],
            trim: true,
            maxlength: [50, 'Max 50 characters should be there for name']
        },
        price:{
            type: Number,
            required:[true, 'Price is required'],
            trim: true,
            maxlength: [5, 'Max 5 digit is reuqired for price']
        },
        description:{
            type: String,
            required:[true, 'Please provide Description of the Product']
        },
        photos: [
            {
                photo_url:{
                    type:String,
                    required:true
                }

            }
        ],
        stocks:{
            type: Number,
            default:0
        },
        sold:{
            type: Number,
            default:0
        },
        collectionId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"collections"
        }

    },
    {
        timestamps: true
    }
)

export default mongoose.model('products', productsSchema)