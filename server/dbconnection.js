const mongoose= require('mongoose');
mongoose.set('strictQuery', true)

const dbconnect=()=>{
    return(mongoose.connect("mongodb://localhost:27017/E-commerce"))
}

module.exports=dbconnect;
