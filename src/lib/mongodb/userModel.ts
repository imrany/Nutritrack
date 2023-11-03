import mongoose from 'mongoose';
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required: [true, 'User name is required'],
        minLength: 3,
        maxLength: 40,
    },
    age:{
        type:Number,
        required:[true,"Enter age"]
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const userModel=mongoose.model('user',UserSchema)
export default userModel