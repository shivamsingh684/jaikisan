const mongoose=require('mongoose')
const customerModel=require('../models/customerModel')

const createCustomer= async(req,res) => {
try{
   let data = req.body;
  // let {firstName,lastName,mobileNumber,DOB,emailID,address,customerID,status}=data;
   let savedata=await customerModel.create(data) 
   return res.status(201).send({status:true,messsage:'Success',data:savedata})
}
catch(err){
   return res.status(500).send({status:false,message:err.message})
}
}

const getCustomer=async(req,res) =>{
    try{
      let details=await customerModel.find()
      return res.status(200).send({status:true,message:'success',data:details})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

const deleteCustomer=async(req,res) => {
    try{
        let id=req.params.id
        let updated=await customerModel.findByIdAndUpdate({_id:id},{$set:{status:'INACTIVE'}},{new:true})
        return res.status(200).send({status:true,message:'updated',data:updated})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}
module.exports={createCustomer,getCustomer,deleteCustomer}