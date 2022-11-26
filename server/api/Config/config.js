const mongoose = require('mongoose');

exports.database_config = async(request,response) => {
    try {
        //        0a9Q2RjWX8R4D3cc
        const mongoDB = "mongodb+srv://abidgullshahid:0a9Q2RjWX8R4D3cc@cluster0.b54ur9v.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(mongoDB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db_connection = mongoose.connection;
        console.log("Database Connected");

    }
    catch (e) {
        console.log("Something Wrong with your database connection.",e)
        response.send("Something WRong")

    }

}