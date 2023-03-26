const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{useNewUrlParser:true, useUnifiedTopology: true})
    console.log("Connected successfully...")
}

module.exports = connectToMongo;
