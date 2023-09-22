const Modelo = require('./ModeloTabelaProdutos')

module.exports = {
    async listar () {
        return await Modelo.findAll()
    },
    async create ({nome, descricao, foto, preco, categoria} ){
        return await Modelo.create({nome: nome, descricao: descricao, foto: foto, preco: preco, categoria: categoria} )
    },
    async lozalicar(id){
        return await Modelo.findByPk({id})
    },
    async atualizar(id, nome, descricao, foto, preco, categoria){
        return await Modelo.update({nome, descricao, foto, preco, categoria}, {where: {id}})
    },
    async remover(id){
        return await Modelo.destroy({where:{id}})
    }
}