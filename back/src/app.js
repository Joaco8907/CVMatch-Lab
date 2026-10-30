const express = require('express')
const app = express()
const healthRouter = require('./routes/health.routes')

app.use('/api/health', healthRouter)

app.get('/', (req,res)=>{
    res.status(200).send("Biendvenido a la pagina tal.")
})


module.exports = app


