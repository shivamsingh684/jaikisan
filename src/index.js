const express = require('express')
const mongoose=require('mongoose')
const route= require('./route/route')
const app=express()

app.use(express.json())

mongoose.connect('mongodb+srv://shivamsinghh_684:hFY7Ym3BsbQi0JuT@cluster0.broqahz.mongodb.net/jaikisan',{useNewUrlParser:true})
.then(() => console.log('MongoDb is Connected'))
.catch((err) => console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 3000, function(){
    console.log('Express is running on port'+(process.env.PORT || 3000))
})