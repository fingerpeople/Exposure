import { Request, Response, NextFunction } from 'express'
import status from 'http-status'
import UnprocessableEntityError from '@/commons/http/UnprocessableEntityError'

export default function InputValidation (validationFactory: any) {
  return (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const validation = validationFactory(request)
    if (validation.fails()) {
      const { previousError, httpStatus } = new UnprocessableEntityError(validation.errors.all())
      return response.status(httpStatus || status.UNPROCESSABLE_ENTITY).json(previousError)
    }

    return next()
  }
}
