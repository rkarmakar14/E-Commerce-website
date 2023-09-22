import mongoose from "mongoose";
import AuthRoles from "../utilities/user.role";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = mongoose.Schema(
    {
    name:{
        type:String,
        reuqired: [true, "Name is required"],
        maxLength: [50, "maximum length should be 50"]
    },
    email:{
        type:String,
        required: [true, "email id is required"],
        unique: true
    },
    password:{
        type:String,
        required: [true, "Password is required"],
        minLength: [8, " Password should be 8 chararcter minimum"],
        // password should be given to frontend 
        select: false
    },
    role:{
        type: String,
        //getting the roles as and array
        enum: Object.values(AuthRoles),
        // the default value is given beacuse it will auto select the user role
        default: AuthRoles.USER,
    },
    passwordforgettentoken: String,
    passwordforgettenexpiry: Date,
    },
    // adding cretedAt and updateAt two properties to the schema
    {
        timestamps: true 
    }
)
// emcrypt the password before saving it to database
// adding features/methods directly to schema
// compare the password
//generate JWToken

export default mongoose.Schema("User",userSchema);

