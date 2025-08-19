const express = require('express')
const cors = require('cors')

const ConnectToDB = require('./db.service')
const UrlRouter = require('./Routes/url.routes')
const PageRouter = require('./Routes/pages.routes')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const url = process.env.Connection_String
ConnectToDB(url)

app.use('/url', UrlRouter)
app.use('/', PageRouter)

//^ Setting View Engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(PORT, ()=>{
    console.log(`Server Running At http://localhost:${PORT}/`)
})