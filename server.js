const express = require("express");
const cors = require('cors'); // using the middleware to allow access origins
const app = express();

app.use(express.json());


// In backend these are mainly the API points 
app.get("/", cors(), (req, res) => {
    res.send("This is the express page");
})

app.get("/api", cors(), (req, res) => {
    res.send("Server is connected with React and  Express");
});


let firstName = ""; // enter your first name or any first name you want to add

app.post("/form", cors(), (req, res) => {
    // console.log(req.body);
    // a JavaScript object is returned
    data = req.body;
    if (req.body['fName'] === "") {
        res.send("empty");
    }
    else if (req.body['fName']===firstName) {
        res.send("yes");
    }
    else {
        res.send("no");
    }
})



app.listen(5000, () => {
    console.log("Server host running on Port:5000");
});