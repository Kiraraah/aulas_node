const express =require("express") 

const app = express()

app.get('/', (requisição, resposta) => {
    resposta.send("Seja bem-vindo(a) ao meu servidor!")
})

app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000")
})

