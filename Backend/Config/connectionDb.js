const mongoose= require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cluster0.mongodb.net/",
      {
        dbName: "TheNoteOfficial",
        user: "fahadbutt",
        pass: ".24eNjRMkYg94MN"
      }
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
module.exports = connectDB;







