const express=require('express')
const cors=require('cors');
const registerSchemas = require('./schemas/registerSchemas');

const app= express();



//middleware 
app.use(cors())
app.use(express.json());

app.get('/', (req,resp)=>{
    resp.send("hhello from server side")
})

app.post('/api_register',async (req,resp)=>{
   
    const data= new registerSchemas(req.body)//suru ma frontend bata aako data hamro registerSchemas ma jancha ani tes pachi save huncha
    const result=await data.save();
    console.log(result);
    resp.send(result)

    resp.json('okay')// yesko response chai hamro react ma jane ho ohhh...
})

app.listen(3500,()=>{
    console.log("server started at 3500")
});