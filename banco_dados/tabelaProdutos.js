const Modelo = require('./ModeloTabelaProdutos')

module.exports = {
    listar () {
        return Modelo.findAll()
    }
}