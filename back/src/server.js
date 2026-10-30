const app = require ('./app')

const HOSTNAME = "127.0.0.1"
const PORT = 3000

app.listen(PORT,HOSTNAME, ()=>{
    console.log(`Servidor corriendo en HTTP://${HOSTNAME}:${PORT}`);
})

