const mongoose= require('mongoose');

const registerSchema= mongoose.Schema(
    {
       
        fullname:{ type: String, required: true },
        username:{ type: String, required: true, index: { unique: true } },
        email:{ type: String, required: true },
        password:{ type: String, required: true },
        phone:{type:Number, require:true},
       
    }
)

module.exports=mongoose.model('userDetails',registerSchema);