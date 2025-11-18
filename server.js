const express = require('express')
const db = require('./db')
const employeeRouter = require('./routers/employeeRouter')

const app = express()
app.use(express.json())

app.use('/employees', employeeRouter)

app.listen(4000, () => console.log('Sever is running...'))

