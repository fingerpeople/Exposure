import * as express from 'express'
import PublicRouter from './public'

export default (App: any) => {
  const UplineRouter = express.Router()
  App.use('/', UplineRouter) // Register Upline Router

  const LocalRouter = express.Router()

  LocalRouter.use(PublicRouter.path, PublicRouter.router)

  UplineRouter.use(LocalRouter) // Register Local Router to Upline Router
}
