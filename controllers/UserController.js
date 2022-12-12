const fs = require('fs');

let dados = [];

function getDados() {
    dados = JSON.parse(fs.readFileSync('./db.json'));
}

function setDados() {
    fs.writeFileSync('./db.json', JSON.stringify(dados));
}

function obterDados(req, res) {
    getDados();
    res.send(dados);
}

function obterPorId(req, res) {
    getDados();
    const id = req.params.id;
    const usuario = dados.filter(function (item) {
        return item.id == id;
    })

    res.send(usuario);
}

function postarDados(req, res) {
    const novoUsuario = {
        nome: req.body.nome,
        idade: req.body.idade
    }
    getDados();
    novoUsuario.id = dados.length + 1;
    dados.push(novoUsuario);
    setDados();
    res.sendStatus(201);
}

module.exports = { obterDados, obterPorId, postarDados };