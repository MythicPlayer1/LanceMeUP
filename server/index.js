const express=require('express')
const cors=require('cors');
const registerSchema = require('./schemas/registerSchemas');
const dbconnect=require('./dbconnection')


const app= express();



//middleware 
app.use(cors())
app.use(express.json());

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
    const user= await registerSchema.find({
        username: req.body.newUsername,
        password:req.body.newPassword
    })
    if(user){
        return(resp.json({status:'okay', user:true}))
    }else{
        return(resp.json({status:'user not found', user:false}))
    }
    
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