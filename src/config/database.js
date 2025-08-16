const mongoose = require("mongoose")
const URI= "mongodb+srv://rnpandey:Ramniwash.123@rnpandey.xi6juj9.mongodb.net/devTinder"
const connectDB = async () => {
    await mongoose.connect(URI)
};

module.exports={
    connectDB
}