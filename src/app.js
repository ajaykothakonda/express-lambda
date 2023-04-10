const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
})

const port = 8080
app.listen(port, () => {
    console.log(`server started at http://localhost:$port`);
});


module.exports = app;