const mongoose=require('mongoose')

const customerModel=new mongoose.Schema({
    firstName :{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    DOB:{
        type:Date
    },
    emailID:{
        type:String,
        required:true
    },
    address:{
        type :String,
        required:true
    },
    customerID:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"],
        default:'ACTIVE'
    }

},{timestamps:true})

module.exports=mongoose.model('customer',customerModel)