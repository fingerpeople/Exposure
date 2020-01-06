import express from 'express'
import createController from '../controllers/v1/v1CreateController'
import browseController from '../controllers/v1/v1BrowseController'
import InputValidation from '@/middlewares/InputValidation'

import createRequest from '../requests/createRequest'

const router = express.Router()

router.route('/v1/create').post(
  InputValidation(createRequest),
  createController
)

router.route('/v1/browse').get(
  browseController
)

export default {
  path: '/file',
  router
}
