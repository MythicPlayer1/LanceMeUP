const express=require('express')
const cors=require('cors');

const app= express();



//middleware 
app.use(cors())
app.use(express.json());

app.get('/', (req,resp)=>{
    resp.send("hhello from server side")
})

app.post('/api_register',(req,resp)=>{
    console.log(req.body)
    resp.json('okay')// yesko response chai hamro react ma jane ho ohhh...
})

app.listen(3500,()=>{
    console.log("server started at 3500")
});