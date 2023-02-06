const mongoose=require('mongoose')
const cardModel=require('../models/cardModel')

const createCard= async(req,res) => {
    try{
       let data = req.body;
       let savedata=await cardModel.create(data) 
       return res.status(201).send({status:true,messsage:'Success',data:savedata})
    }
    catch(err){
       return res.status(500).send({status:false,message:err.message})
    }
}


const getCard=async(req,res) =>{
    try{
      let details=await cardModel.find()
      return res.status(200).send({status:true,message:'success',data:details})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

module.exports={createCard,getCard}