const express = require("express")

const app = express();
const PORT = 3000;


// app.use("/test", (req, res) => {
//     res.send("Hello from Test Server!")
// })
// app.use("/hello", (req, res) => {
//     res.send("Hello from Hello!")
// })
// app.use("/", (req, res) => {
//     res.send("Hello from Server!")
// })

app.get("/user", (req, res) =>{
    res.send({firstName: "Ram", lastName: "Pandey"});
});

app.post("/user", (req, res)=>{
    res.send("Data Saved to DB Successfully!");
});

app.put("/user", (req, res) => {
    res.send("Data Updated Successfully")
});
app.patch("/user", (req, res)=>{
    res.send("Data Field updated Successfully")
});

app.delete("/user", (req, res) => {
    res.send("Data Deleted from DB Successfully")
})

app.listen(PORT, () =>{
    console.log("Server Started on PORT: ", PORT)
})