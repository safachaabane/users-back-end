const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL,
            {
                useUnifiedTopology:true,
                useNewUrlParser:true,
            }
        );
        console.log("db connected")
    } catch (error) {
        console.error(error)
        
    }
}
module.exports = connectDB;
