const express = require('express')
const app = express()

const HOSTNAME = "127.0.0.1"
const PORT = 3000

app.get('/', (req,res)=>{
    res.status(200).send("Biendvenido a la pagina tal.")
})

app.get('/api/health', (req,res)=>{
    res.status(200).json({"ok":true,"mensaje":"Api funcionando"})
})

app.listen(PORT,HOSTNAME, ()=>{
    console.log(`Servidor corriendo en HTTP://${HOSTNAME}:${PORT}`);
})