import express from 'express'
import PublicRouter from './public'
import FileRouter from '../modules/file/route'

export default (UplineRouter: any) => {
  const LocalRouter = express.Router()

  LocalRouter.use(PublicRouter.path, PublicRouter.router)
  LocalRouter.use(FileRouter.path, FileRouter.router)

  UplineRouter.use(LocalRouter) // Register Local Router to Upline Router
}
