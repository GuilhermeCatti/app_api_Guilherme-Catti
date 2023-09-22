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

roteador.get("/:id", async(requisicao, resposta)=>{
    const {id} = requisicao.params;
    const produto = await produtos.localizar(id);
    resposta.send(
        JSON.stringify(produto)
    )
}
)

roteador.put("/:id", async(requisicao, resposta)=>{
    const {id} = requisicao.params;
    const {nome, descricao, foto, preco, categoria} = requisicao.body;
    const produto = await produtos.atualizar(id, nome, descricao, foto, preco, categoria);
    resposta.send(
        JSON.stringify(produto)
    )
}
)

roteador.delete("/:id", async(requisicao, resposta)=>{
    const {id} = requisicao.params;
    await produtos.remover(id)
    resposta.send(
        JSON.stringify({mensagem:"Produto removido"})
    )
}
)

module.exports = roteador;