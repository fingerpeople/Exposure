import express from 'express'
import PublicController from '@/controllers/public.controller'
import InputValidation from '@/middlewares/InputValidation'

import TelegramPassport from '@/commons/passport'

import { publicMessageValidation } from './validations'

const router = express.Router()

router.route('/').get(
  InputValidation(publicMessageValidation),
  PublicController.root
)

router.route('/auth').get(
  TelegramPassport.authenticate('telegram'),
  function (req: any) {
    console.log(req)
  }
)

export default {
  path: '/',
  router
}
