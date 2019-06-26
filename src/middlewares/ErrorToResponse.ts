import * as status from 'http-status'
import UnprocessableEntityError from '../commons/http/UnprocessableEntityError'
import HttpError from '../commons/http/HttpError'
import { NextFunction } from 'express'

export default function ErrorToResponse(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const payload: any = { message: error.message }

  if (process.env.NODE_ENV === 'development') {
    payload.stack = error.stack
  }

  if (error instanceof HttpError) {
    if (error instanceof UnprocessableEntityError) {
      payload.errors = error.constraintErrors
      delete payload.stack
    }

    return response.status(error.httpStatus).json(payload)
  }

  payload.message = 'Unknown error'

  return response.status(status.INTERNAL_SERVER_ERROR).json(payload)
}
