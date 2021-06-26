const mongoose = require("mongoose");

// function connectDB() {
//   mongoose
//     .connect(procces.env.MONGO_URL,{
//         useUnifiedTopology:true,
//         useNewUrlParser:true,
//     })
//     .then(() => console.log("DB connected"))
//     .catch((err) => console.error(err));
// }
// module.exports=connectDB;
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