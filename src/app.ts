import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
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
publicRoutes(App)

App.use((request: Request, response: Response, next: NextFunction) => {
  const error = new NotFoundError('Endpoint was not found', null)
  return next(error)
})

App.use(ErrorToResponse())

export default App
