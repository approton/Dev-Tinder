const express = require("express")

const app = express();
const PORT = 3000;

// app.use("/", (req, res) => {
//     res.send("Hello from Server!")
// })

app.use("/test", (req, res) => {
    res.send("Hello from Test Server!")
})

app.listen(PORT, () =>{
    console.log("Server Started on PORT: ", PORT)
})