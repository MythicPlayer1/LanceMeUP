const express=require('express')
const cors=require('cors');

const app= express();



//middleware 
app.use(cors())
app.use(express.json());

app.post('/api/register',(req,resp)=>{
    console.log(req.body)
    resp.json({status:'ok'})
})

app.listen(3500,()=>{
    console.log("server started at 3500")
});