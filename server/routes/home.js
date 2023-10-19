import express from 'express'
const home = express.Router()

home.get('/', (req, res) => {
  // const template = 'home'
  // res.send('<h1>Welcome to Flash Cards</h1> <h2>Solidfy Your Knowledge</h2>')
  res.render('home')
})

// let readFile = await fsPromises.readFile(
//   Path.resolve('./server/data/data.json')
// )

// readFile = JSON.parse(readFile)
// res.render('home', readFile)
// })

export default home
