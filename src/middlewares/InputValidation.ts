
import UnprocessableEntityError from '@/commons/http/UnprocessableEntityError'
import { Request, Response, NextFunction } from 'express'

export default function InputValidation (validationFactory: any) {
  return (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const validation = validationFactory(request)

    if (validation.fails()) {
      return next(new UnprocessableEntityError(validation.errors.all()))
    }

    return next()
  }
}
