import * as Path from 'node:path'
// import * as URL from 'node:url'

import fsPromises from 'node:fs/promises'

import express from 'express'
import hbs from 'express-handlebars'

import modify from './routes/add-modify.js'
import testPage from './routes/test.js'
import editHub from './routes/edit-hub.js'
import home from './routes/home.js'

const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here
server.post('/new', async (req, res) => {
  // let file = await fsPromises.writeFile(
  //   Path.resolve('server/data/data.json'),
  //   'utf-8'
  // )
  // console.log(file)

  // let jsonObj = JSON.parse(file)

  // // let body = JSON.stringify(req.body)
  // // jsonObj.data.push({
  // //   question: body.question,
  // //   answer: body.answer,
  // // })

  // // await fsPromises.writeFile(Path.resolve('server/data/data.json'), jsonObj)

  res.render('home')
})

server.use('/', modify)
server.use('/', home)
server.use('/', testPage)
server.use('/', editHub)

export default server
