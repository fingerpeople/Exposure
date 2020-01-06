import cors from 'cors'
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import { resolve } from 'path'

import { ErrorToResponse, KeyValidation } from './middlewares'
import NotFoundError from './commons/http/NotFoundError'

import publicRoutes from './routes'

const App = express()

App.use('/public', express.static(resolve(__dirname, '../public')))
App.use(cors({
  origin: [
    '*'
  ],
  optionsSuccessStatus: 200
}))

App.use(methodOverride())
App.use(bodyParser.json({ limit: '250kb' }))
App.use(bodyParser.urlencoded({ extended: true }))

App.use(KeyValidation())

const UplineRouter = express.Router()
App.use('/api', UplineRouter)

publicRoutes(UplineRouter)

App.use((_: Request, response: Response) => {
  const notFoundError = new NotFoundError('Endpoint was not found', null)
  return response.status(404).json({ message: notFoundError.message })
})

App.use(ErrorToResponse())

export default App
