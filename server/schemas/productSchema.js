const mongoose= require('mongoose');
const { buffer } = require('stream/consumers');

const productSchema= mongoose.Schema(
    {
        name:String,
        price:Number,
        des:String,
        img:{
            data:Buffer,
            contentType:String,
        }
    }
)

module.exports=mongoose.model('addproductdetails',productSchema);