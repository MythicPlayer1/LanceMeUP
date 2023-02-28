const express=require('express')
const cors=require('cors');
const registerSchema = require('./schemas/registerSchemas');
const dbconnect=require('./dbconnection')
const jwt= require('jsonwebtoken');
// const uploadImage= require('./middleware/multer');
const productSchema = require('./schemas/productSchema');
const fs= require('fs');
const multer=require('multer')


const app= express();



//middleware 
app.use(cors())
app.use(express.json());


const uploadImage=  multer({
    storage:multer.diskStorage({
        destination:function(req, file, cb){
            cb(null, 'uploadImageFiles');

        },
        filename:function(req, file, cb){
            cb(null,file.fieldname+"-"+Date.now()+'.jpg'); 
        }
        
        
    })
}).single("user_file");




app.get('/', (req,resp)=>{
    resp.send("hhello from server side")
})

app.post('/api_register',async (req,resp)=>{

    try{
        const data= new registerSchema(req.body)//suru ma frontend bata aako data hamro registerSchemas ma jancha ani tes pachi
        const result=await data.save();
        resp.send(result);
        console.log(result)
    }
    catch(err){
       resp.json({status:'error',error:'duplicate username'})

    }    // resp.json('okay')// yesko response chai hamro react ma jane ho ohhh...
})
app.post('/api_login',async (req,resp)=>{
    const user= await registerSchema.findOne(
        {username: req.body.newUsername,
        password:req.body.newPassword}
    )
    if(user){
        const token= jwt.sign({
            fullname:registerSchema.fullname,
            email:registerSchema.email

        },'magicword')
        return(resp.json({status:'okay', user:token}))
    }else{
        return(resp.json({status:'user not found', user:false}))
    }
     resp.send(user)
    
})


// api for product 

app.post('/api_addproduct',uploadImage, async (req,resp)=>{
    const result= await new productSchema({
        name:req.body.name,
        price:req.body.price,
        des:req.body.des,nae,
        img:{
            data:fs.readFileSync("uploadImageFiles/" + req.file.filename),
            contentType: "image/png/jpeg"
        }
    })
    const data=result.save();

     resp.send(data)


})


const start=async ()=>{
    try{await dbconnect()
        app.listen(3500);
    }
    catch(err){
        console.log('connection failed ')
    }
}

start();