import express from 'express'
import fsPromises from 'node:fs/promises'
import * as Path from 'node:path'

const testPage = express.Router()

testPage.get('/test', async (req, res) => {
  let json = JSON.parse(
    await fsPromises.readFile(Path.resolve('server/data/data.json'), 'utf-8')
  )

  res.render('test', json)
})

export default testPage
