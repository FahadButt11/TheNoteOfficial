const mongoose= require("mongoose");
const env=require('dotenv');
env.config();


const connectDB = async () => {

   mongoose.connect(process.env.CONN_STRING, {
    dbName: process.env.DB_NAME,
    pass:process.env.PASSWORD,
    user:process.env.USER_NAME
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
};
module.exports = connectDB;







