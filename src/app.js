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

// app.get("/user", (req, res) =>{
//     console.log(req.query)
//     res.send({firstName: "Ram", lastName: "Pandey"});
// });

// app.post("/user", (req, res)=>{
//     res.send("Data Saved to DB Successfully!");
// });

// app.put("/user", (req, res) => {
//     res.send("Data Updated Successfully")
// });
// app.patch("/user", (req, res)=>{
//     res.send("Data Field updated Successfully")
// });

// app.delete("/user", (req, res) => {
//     res.send("Data Deleted from DB Successfully")
// })

// app.get("/user/:userId/:username/:password", (req, res)=>{
//     console.log(req.params);
//     res.send("Complex Regex Pattern")
// })

app.use("/user",
    (req, res, next)=>{
        console.log("1st Route Handler");
        next();
    },
    (req, res, next)=>{
        console.log("2nd Route Handler");
        next();
    },
    (req, res, next)=>{
        console.log("3rd Route Handler");
        next();
    },
    (req, res, next)=>{
        console.log("4th Route Handler");
        next();
    },
    (req, res, next)=>{
        console.log("5th Route Handler");
        res.send("5th Handler")
    },
)
app.listen(PORT, () =>{
    console.log("Server Started on PORT: ", PORT)
})