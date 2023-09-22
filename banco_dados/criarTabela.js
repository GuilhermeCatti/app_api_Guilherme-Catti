const ModeloTabela = require('../banco_dados/ModeloTabelaProdutos')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)