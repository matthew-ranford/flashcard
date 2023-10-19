import * as Path from 'node:path'
// import * as URL from 'node:url'

import express from 'express'
import hbs from 'express-handlebars'

import modify from './routes/add-modify.js'
import testPage from './routes/test.js'
import editHub from './routes/edit-hub.js'
import home from './routes/home.js'

const server = express()

// Server configuration
const publicFolder = Path.resolve('./server/routes/public/main.css')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here

server.use('/', modify)
server.use('/', home)
server.use('/', testPage)
server.use('/', editHub)

export default server
