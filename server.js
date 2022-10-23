const express = require("express");

const app = express();

const PORT = 1122;

app.get("/", (req, res) => {
    console.log("hitting hello1");
    res.send("hello1");
});

app.listen(PORT, () => {

    console.log("listening");
});