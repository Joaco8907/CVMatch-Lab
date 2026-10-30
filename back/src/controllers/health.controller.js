
const {obtenerEstado} = require ('../services/health.service')

const estado = obtenerEstado()


const obtenerEstado = (res,res) =>{
    res.status(200).json(estado)
}

module.exports = {obtenerEstado}