const express = require("express")
// const {adminAuth, userAuth} = require("./middlewares/auth")
const {connectDB} = require("./config/database")
const {User} = require("./models/user")
const app = express();
const PORT = 3000;


app.use(express.json());

app.post("/signup", async (req, res) => {

    const user= new User(req.body);

    try{
        user.save();
        res.send("User Added Successfully!")
    }
    catch(err){
        res.status(400).send("error in saving data", err.message);
    }
    //console.log(req.body.firstName); //right now won't work because we are not parsing incoming request
    // const user = new User({
    //     firstName: "Amitabh",
    //     lastName: "Bacchan",
    //     emailId: "amit@bachchan.in",
    //     password: "amit@123",
    // });
    // try{
    // await user.save();
    // res.send("User Added Successfully!");
    // }
    // catch(err){
    //     res.status(400).send("Error in saving the data", err.message)
    // }
})

app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    //const users = await User.findOne({emailId: userEmail}); Gives the first user which matches
    const users = await User.find({emailId: userEmail});
    console.log(users)
    try{
        if(users.length===0){

            res.status(404).send("User not found")
        }
        else{
            res.send(users);
        }
    }
    catch(err){
        res.status(400).send("Something Went Wrong!")
    }
})

app.get("/feed", async (req, res) => {
    const users = await User.find({});
    try{
        if(users.length===0){
            res.status(404).send("User not found")
        }
        else{
            res.send(users);
        }
    }
    catch(err){
        res.status(400).send("Something Went Wrong!")
    }

})

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("User Deleted Successfully!")
    }
    catch(err){
        res.status.send("Something went wrong !")
    }
})
//Update Data in Database

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body
    try{
        await User.findByIdAndUpdate({_id: userId}, data);
        res.send("User Updated Successfully!");
    }
    catch(err){
        res.status(400).send("Something went wrong !")
    }
})
connectDB()
.then(()=>{
    console.log("Connected to Database Successfully");
    app.listen(PORT, () =>{
    console.log("Server Started on PORT: ", PORT)
})
})
.catch(()=>{
    console.error("Database connection failed")
})