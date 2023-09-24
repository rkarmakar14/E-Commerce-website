import mongoose  from "mongoose";

const collectionSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true, 'Name is required'],
            trim: true,
            maxLength: [50, 'Max 50 characters']
        },
        
    },
    {
        timestamps: true
    }
)

export default mongoose.model('collections', collectionSchema)