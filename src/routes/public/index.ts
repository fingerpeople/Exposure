import express from 'express'
import PublicController from '@/controllers/public.controller'

const router = express.Router()
router.route('/')
  .get(
    PublicController.root
  )

export default {
  path: '/',
  router
}
