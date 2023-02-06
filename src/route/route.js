const express=require('express')
const router=express.Router()

const {createCustomer,getCustomer,deleteCustomer}=require('../controllers/customer')
const {createCard,getCard}=require('../controllers/card')


///////////////////////customer///////////////////
router.post('/createCustomer',createCustomer) 

router.get('/getCustomer',getCustomer)

router.delete('/deletCustomer/:id',deleteCustomer)


////////////////////card//////////////////////////

router.post('/createCard',createCard)

router.get('/getCards',getCard)

router.all('/*',function(req,res){
    return res.status(400).send({status:false,message:'invalid path'})
})
module.exports=router