require('express-async-errors')

const AppError = require('./utils/AppError')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.use((error, req, res, next) =>{
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status:"error",
            message:error.message
        })
    }

    return res.status(500).json({
        status:"error",
        message:"Erro interno no servidor"
    })
})

app.listen(3333, ()=>console.log("Servidor rodando na porta 3333"))