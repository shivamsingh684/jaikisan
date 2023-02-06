const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const cardModel=new mongoose.Schema({
    cardNumber:{
        type:String,
        required:true
    },
    cardType:{
        type:String,
        enum:['REGULAR','SPECIAL']
    },
    customerName:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['ACTIVE','INACTIVE'],
        default:'ACTIVE'
    },
    vision:{
        type:String
    },
    customerID:{
        type:ObjectId,
        ref:'customer',
        required:true

    }
})

module.exports=mongoose.model('card',cardModel)