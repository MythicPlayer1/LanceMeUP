const express = require('express')
const cors = require('cors');
const registerSchema = require('./schemas/registerSchemas');
const dbconnect = require('./dbconnection')
const jwt = require('jsonwebtoken');
// const uploadImage= require('./middleware/multer');
const productSchema = require('./schemas/productSchema');
const fs = require('fs');
// const multer=require('multer')
const bodyParser = require('body-parser');
const orderSchema = require('./schemas/orderSchema');
const orderedItemSchemas = require('./schemas/orderedItemSchemas');


const app = express();



//middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb', parameterLimit: 10000 }));
app.use(cors())
app.use(express.json());




// const uploadImage=  multer({
//     storage:multer.diskStorage({
//         destination:function(req, file, cb){
//             cb(null, 'uploadImageFiles');

//         },
//         filename:function(req, file, cb){
//             cb(null,file.fieldname+"-"+Date.now()+'.jpg'); 
//         }


//     })
// }).single("user_file");






app.post('/api_register', async (req, resp) => {

    try {
        const data = new registerSchema(req.body)//suru ma frontend bata aako data hamro registerSchemas ma jancha ani tes pachi
        const result = await data.save();
        resp.send(result);
        console.log(result)
    }
    catch (err) {
        resp.json({ status: 'error', error: 'duplicate username' })

    }    // resp.json('okay')// yesko response chai hamro react ma jane ho ohhh...
})
app.post('/api_login', async (req, resp) => {
    const user = await registerSchema.findOne(
        {
            username: req.body.newUsername,
            password: req.body.newPassword
        }
    )
    if (user) {
        const token = jwt.sign({
            fullname: registerSchema.fullname,
            email: registerSchema.email

        }, 'magicword')
        return (resp.json({ status: 'okay', user: token }))
    } else {
        return (resp.json({ status: 'user not found', user: false }))
    }
    resp.send(user)

})

app.post('/addedProduct', async (req, resp) => {
    const data = new productSchema({
        name: req.body.name,
        price: req.body.price,
        des: req.body.des,
        img: req.body.img
    })
    const result = await data.save();
    resp.send(result);
})

app.get('/getAddedProduct', async (req, resp) => {
    try {
        await productSchema.find().then(data => {
            resp.send({ status: 'okay', datas: data })
        })

    }
    catch (err) {
        resp.json({ status: 'error' })

    }
})

app.get('/addproduct', async (req, resp) => {
    const productItem = await productSchema.find();
    resp.send(productItem)


})

app.post('/orderItem', async (req, resp) => {

    try {
        const data = new orderSchema({
            name: req.body.name,
            price: req.body.price,
            des: req.body.des,
            img: req.body.img
        })
        const result = await data.save();
        resp.send(result)
    }
    catch (err) { resp.json({ status: 'error', error: 'Already added' }) }
})

app.get('/getorderItem', async (req, resp) => {
    try {
        await orderSchema.find().then(data => {
            resp.send({ status: 'okay', datas: data })
        })

    }
    catch (err) {
        resp.json({ status: 'error' })

    }
})


// api for product 

// app.post('/api_addproduct',uploadImage, async (req,resp)=>{
//     const result= await new productSchema({
//         name:req.body.name,
//         price:req.body.price,
//         des:req.body.des,
//         img:{
//             data:fs.readFileSync("uploadImageFiles/" + req.file.filename),
//             contentType: "image/png"
//         }
//     })
//     const data=result.save();

//      resp.send(data)


// })


//Ordered item apis 


app.post('/orderedItem', async (req, resp) => {

    try {
        const data = new orderedItemSchemas({
            name: req.body.name,
            price: req.body.price,
            des: req.body.des,
            img: req.body.img
        })
        const result = await data.save();
        resp.send(result)
    }
    catch (err) { resp.json({ status: 'error', error: 'Already added in  orderd list ' }) }
})

app.get('/getorderedItem', async (req, resp) => {
    try {
        await orderedItemSchemas.find().then(data => {
            resp.send({ status: 'okay', ordereddatas: data })
        })

    }
    catch (err) {
        resp.json({ status: 'error' })

    }
})




const start = async () => {
    try {
        await dbconnect()
        app.listen(3500);
    }
    catch (err) {
        console.log('connection failed ')
    }
}

start();