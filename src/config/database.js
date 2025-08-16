const mongoose = require("mongoose")
const {URI} = require("././utils/urls")
const connectDB = async () => {
    await mongoose.connect(URI)
};

module.exports={
    connectDB
}