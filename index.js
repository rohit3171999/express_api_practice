const express = require("express");

const app = express();
app.use(express.json());

app.get("/students/:id", (req, res) => {

    const studentsID = parseInt(req.params.id);
    const student = students.find(
        s => s.id === studentsID
    );
    if (!student) {
        return res.status(404).json({
            message: "Student not Found and not Exist!!!"
        })
    }
    res.json(student);
});

const students = [
    { id: 1, name: "rohit" },
    { id: 2, name: "sachin" },
    { id: 3, name: "virat" },
    { id: 4, name: "dhoni" }
];

const items = [
    { id: 1, name: "laptop" },
    { id: 2, name: "mobile" },
    { id: 3, name: "tablet" },
    { id: 4, name: "monitor" }
]

app.get("/students", (req, res) => {
    res.json(students);
    console.log(req.url);
});

app.post("/students", (req, res) => {

    console.log(req.body);

    if (!req.body.name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }
    const newStudent = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(newStudent);
    res.json({
        message: "Student added successfully",
        student: newStudent
    });
});

app.get("/items", (req, res) => {
    res.json(items);
    console.log(req.url);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//console.log("API's are coming Soon!!")
console.log("API's are coming Soon testing again!!")