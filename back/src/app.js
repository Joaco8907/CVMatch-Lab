const express = require('express')
const app = express()



app.get('/', (req,res)=>{
    res.status(200).send("Biendvenido a la pagina tal.")
})

app.get('/api/health', (req,res)=>{
    res.status(200).json({"ok":true,"mensaje":"Api funcionando"})
})

module.exports = app


