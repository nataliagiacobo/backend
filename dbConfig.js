const { query } = require('express');
const mysql = require('mysql');

const banco = mysql.createConnection({
    host: 'localhost',
    port: 3305,
    user: "root",
    password: "root",
    database: 'aula'
});

function createDataBase(nome) {
    banco.query(`CREATE DATABASE ${nome}`, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

function dropDataBase(nome) {
    banco.query(`DROP DATABASE ${nome}`, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

//createDataBase("Aula");

function createTableCadastro() {
    const query = "CREATE TABLE cadastro (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50) NOT NULL, idade INT NOT NULL);";
    banco.query(query, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

function dropTable(nome) {
    query = `DROP TABLE ${nome}`
    banco.query(query, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}


function insertTableCadastro(nome, idade) {
    const query = `INSERT INTO cadastro (nome, idade) VALUES ('${nome}', ${idade})`;
    banco.query(query, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

module.exports = banco;