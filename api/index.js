const server = require('express');
const app = server();

const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());

const roteador = require("./rotas/rotas_produto.js");

app.use("/api/produtos", roteador);

app.listen(3000, ()=>{"Olá, mundo!"});
