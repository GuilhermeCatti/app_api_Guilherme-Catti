const roteador = require("express").Router();
const produtos = require("../banco_dados/tabelaProdutos")

roteador.get("/", async(requisicao, resposta)=>{
    resposta.send(
        JSON.stringify(await produtos.listar())
    )
})

roteador.post("/",async (requisicao, resposta)=>{
    
    const {nome, descricao, foto, preco, categoria} = requisicao.body

    console.log(requisicao.body);

    const create = await produtos.create({nome: nome, descricao: descricao, foto: foto, preco: preco, categoria: categoria} );

    const produto = await produtos.listar();

    resposta.send(
        JSON.stringify(create)
    )
})

module.exports = roteador;