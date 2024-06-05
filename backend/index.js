const cors = require('cors')
const express = require('express');
const connectDB = require('./src/db');
const bodyParser = require('body-parser')
const routesUser = require('./src/routes/routesUser')
const routesMedicine = require('./src/routes/routesMedicine')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api/users', routesUser)
app.use('/api/medicine', routesMedicine)
app.use(express.json());

const port = 3000;

// Conecta no servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`)
})

// Conectar ao MongoDB
connectDB();




