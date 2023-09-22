const server = require('express');
const app = server();

const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());

const roteador = require("../rotas/rota_produto");

app.listen(3000, ()=>{"Olá, mundo!"});

app.use("/api/produtos", roteador)
