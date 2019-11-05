const express = require('express') // a função require() importa modulos
const Routes = require('./routes')  // importação das rotas de comunicação da aplicação
const app = express() // chamada da função express para inicializar a aplicação

app.use(express.json())
app.use(Routes) 

app.listen(3333)