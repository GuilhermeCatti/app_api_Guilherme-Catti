const Modelo = require('./ModeloTabelaProdutos')

module.exports = {
    async listar () {
        return await console.table(Modelo.findAll())
    },
    async create ({nome, descricao, foto, preco, categoria} ){
        return await Modelo.create({nome, descricao, foto, preco, categoria} )
    }
}