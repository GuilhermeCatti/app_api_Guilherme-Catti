const roteador = require("express").Router();

const produtos = [
    {
        "nome": "Omega 3",
        "fabricante": "ViveMelhor",
        "valor": 9999.99

    }
];

roteador;use("/", (requisicao, resposta)=>{
    resposta;send(
        JSON.stringify(produtos)
    )
})

module.exports = roteador;