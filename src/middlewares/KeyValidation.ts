import status from 'http-status'
import { Request, Response, NextFunction } from 'express'

import rjson from '@/helpers/response'
import { IResponse } from '../helpers/contracts/response.contracts'
import { i18n } from '@/commons/lang'

export default function KeyValidation () {
  return (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {

    if (process.env.NODE_ENV === 'production') return checkAuthorizationKey()

    function checkAuthorizationKey () {
      let responsePayload: IResponse

      if (!request.headers['x-authorization']) {
        responsePayload = rjson({
          message: i18n('missingKeyAuthorization')
        })
        return response.status(status.BAD_REQUEST).json(responsePayload)
      }

      if (request.headers['x-authorization'] !== process.env.TOKEN_KEY) {
        responsePayload = rjson({
          message: i18n('keyAuthorizationNotMatch')
        })
        return response.status(status.BAD_REQUEST).json(responsePayload)
      }
    }

    return next()
  }
}
