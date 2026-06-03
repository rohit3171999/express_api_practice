const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Express Server Working Fine!"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

console.log("API's are coming Soon!!")
console.log("API's are coming Soon testing again!!")