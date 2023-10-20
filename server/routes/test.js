import express from 'express'
import fsPromises from 'node:fs/promises'
import * as Path from 'node:path'

const testPage = express.Router()

testPage.get('/test', async (req, res) => {
  let json = JSON.parse(
    await fsPromises.readFile(Path.resolve('server/data/data.json'), 'utf-8')
  )

  const randomNum = getRandomInt(0, json.data.length)

  res.render('test', {
    question: json.data[randomNum].question,
    answer: json.data[randomNum].answer,
  })

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
})

export default testPage
