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

const items = [
    {id:1, name: "laptop"},
    {id:2, name: "mobile"},
    {id:3, name: "tablet"},
    {id:4, name: "monitor"}
]

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/items", (req, res) => {
    res.json(items);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//console.log("API's are coming Soon!!")
console.log("API's are coming Soon testing again!!")