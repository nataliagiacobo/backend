const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const banco = require('banco');
app.use(express.json());

app.use('/users', userRoutes);



function connectarBanco(){
    banco.connect(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}


app.listen(3000, connectarBanco);
