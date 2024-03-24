require('dotenv').config();

const mongoose = require('mongoose');


function connnectDB()
{
    // mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true,
    // useFindAndModify:true });

    mongoose.connect("mongodb+srv://test1:1234@cluster0.zawog2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


    const connection = mongoose.connection;

    connection.once('open', () =>{
        console.log('Database connected.');
    });
}

module.exports = connnectDB;