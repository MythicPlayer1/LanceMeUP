const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/E-commerce");
        console.log('connected')
    }
    catch(err) {
            console.log('failed to conect', err)


    }
}

module.exports = dbconnect;
