const express = require('express')
const router = express.Router()
const {obtenerEstado} = require('../controllers/health.controller')

router.get('/', obtenerEstado)

module.exports = router