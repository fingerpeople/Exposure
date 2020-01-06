import { Request, Response, NextFunction } from 'express'
import status from 'http-status'
import UnprocessableEntityError from '@/commons/http/UnprocessableEntityError'

interface IRequest extends Request {
  file: any
}

/**
 * currently just support `single` multer upload
 * @param fieldName
 * @return {Function}
 */
export default function InputValidation (fieldName: any) {
  return (
    request: IRequest,
    response: Response,
    next: NextFunction
  ) => {
    if (!request.file) {
      const { previousError, httpStatus } = new UnprocessableEntityError({ [fieldName]: [`The field ${fieldName} is required.`] })
      return response.status(httpStatus || status.UNPROCESSABLE_ENTITY).json(previousError)
    }

    return next()
  }
}
