import { Request, Response } from 'express'
import status from 'http-status'
import { i18n } from '@/commons/lang'
import { IResponse } from '../helpers/contracts/responseTemplate.contracts'

const root = async (_: Request, response: Response) => {
  let responsePayload: IResponse = {
    message: ''
  }

  responsePayload.message = i18n('hello')

  response.status(status.CREATED).json(responsePayload)
}

export default {
  root
}
