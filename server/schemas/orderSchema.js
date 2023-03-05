const mongoose= require('mongoose');

const orderSchemas=new mongoose.Schema({
    name:String,
    price:Number,
    des:String,
    img:String

})


module.exports=mongoose.model('orderitem',orderSchemas);