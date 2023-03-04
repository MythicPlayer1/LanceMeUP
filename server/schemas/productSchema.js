const mongoose= require('mongoose');
const { buffer } = require('stream/consumers');

const productSchema= mongoose.Schema(
    {
        name:{type:String,require:true},
        price:{type:Number,require:true},
        des:{type:String,require:true},
        img:{type:String,require:true}
    }
)

module.exports=mongoose.model('addproductdetails',productSchema);