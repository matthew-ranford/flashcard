// import express from 'express'
// const editHub = express.Router()
// editHub.get('/edithub', (req, res) => {
//   res.render('edithub', { body: 'Hello World! i am edit-hub' })
// })

// export default editHub

import * as Path from 'node:path'

import express from 'express'
import hbs from 'express-handlebars'

import fsPromises from 'node:fs/promises'

const editHub = express.Router()

editHub.get('/edit-hub', async (req, res) => {
  let json = JSON.parse(
    await fsPromises.readFile(Path.resolve('server/data/data.json'), 'utf-8')
  )
  // res.send('<h1> Please work </h1>')
  res.render('cardHub', json)
})

// editHub.get('/edithub', async (req, res) => {
//   //   const readDataPlease = Number(id)
//   //   res.send('<h1> please work </h1>')
//   res.render('edithub', { body: 'Hello World! i am edit-hub' })
// })

export default editHub
