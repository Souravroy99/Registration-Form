const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL ;
  
const connectDB = async() => {
    try{
        await mongoose.connect(URL);
        console.log(`Successfully connected to Database`);
    }
    catch(error) {
        console.log(`Database connection failed: ${error}`);
        process.exit(0);
    }
}
module.exports = connectDB ;