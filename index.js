const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Express Server Working Fine!"
    });
});

const students = [
    {id: 1, name: "rohit"},
    {id: 2, name: "sachin"},
    {id: 3, name: "virat"},
    {id: 4, name: "dhoni"}   
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//console.log("API's are coming Soon!!")
console.log("API's are coming Soon testing again!!")