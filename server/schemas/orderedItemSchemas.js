const mongoose= require('mongoose');

const orderedItemSchemas=new mongoose.Schema({
   order:[
       {
           name:String ,
           price:Number, 
           des:String , 
           img:String
       }
   ]

})


module.exports=mongoose.model('orderitemadmin',orderedItemSchemas);