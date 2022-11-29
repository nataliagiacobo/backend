const express = require('express');

const app = express();

app.use('/', function (req, res) {
    res.send("alo mundi");
});

app.listen(3000, () => {
    console.log("shduishidhs")
})