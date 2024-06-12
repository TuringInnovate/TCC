const cors = require('cors')
const express = require('express');
const connectDB = require('./src/db');
const bodyParser = require('body-parser')
const routesUser = require('./src/routes/routesUser')
const routesMedicine = require('./src/routes/routesMedicine')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', routesUser)
app.use('/medicine', routesMedicine)

const port = 3000;

// Conecta no servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`)
})

// Conectar ao MongoDB
connectDB();




